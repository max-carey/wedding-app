import { Resend } from 'resend';
import WeddingEmail from '@/emails/WeddingEmail';
import WeddingEmailDecline from '@/emails/WeddingEmailDecline';
import { NextRequest, NextResponse } from "next/server";

// Only initialize Resend if we have an API key
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: NextRequest, res: NextResponse) {
    if (req.method === 'POST') {
        const body = await req.json();
        const { name, surname, email, assistance } = body;
        console.log('Received RSVP from:', name, surname, email, 'Assistance:', assistance);

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
            const emailTemplate = assistance === 'true' ? WeddingEmail : WeddingEmailDecline;
            const emailSubject = assistance === 'true' 
                ? 'Boda de Lili y Max, 14 de Febrero del 2026 - Bienvenido/Welcome! 🎉'
                : 'Boda de Lili y Max, 14 de Febrero del 2026 - Gracias por tu respuesta/Thank you for your response';

            const response = await resend.emails.send({
                to: email,
                cc: process.env.NEXT_PUBLIC_LILI_EMAIL,
                from: 'hola@email.bodalilimax.com',
                subject: emailSubject,
                react: emailTemplate({ firstName: name, lastName: surname, email: email }),
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
