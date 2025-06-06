import { Resend } from 'resend';
import {EmailTemplate} from "@/components/email-template";
import {NextRequest, NextResponse} from "next/server";

// Only initialize Resend if we have an API key
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: NextRequest, res: NextResponse) {
    if (req.method === 'POST') {
        const body = await req.json();
        const { name, surname, email } = body;
        console.log('Received RSVP from:', name, surname, email);

        // If we're in development or don't have an API key, just log and return success
        if (!resend) {
            console.log('Development mode: Email would be sent to:', email);
            return NextResponse.json({ 
                message: 'Development mode: Email not sent', 
                success: true,
                recipient: email 
            });
        }

        try {
            const response = await resend.emails.send({
                to: email,
                bcc: 'oscarlopezarriaga@icloud.com',
                from: 'onboarding@resend.dev',
                subject: 'Boda de Lili y Max, 14 de Febrero del 2026 - Bienvenido/Welcome! 🎉',
                react: EmailTemplate({ firstName: name, lastName: surname, email: email}),
                text: ``,
            });
            console.log('Email sent successfully:', response);
            return NextResponse.json({ 
                message: 'Correo enviado', 
                success: true,
                response 
            });
        } catch (error) {
            console.error('Error sending email:', error);
            return NextResponse.json({ 
                message: 'Error al enviar el correo', 
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error'
            }, { status: 500 });
        }
    }
    
    return NextResponse.json({ 
        message: 'Method not allowed', 
        success: false 
    }, { status: 405 });
}
