import type { Metadata } from 'next';
import { montserrat } from '@/styles/fonts';
import './globals.css';
import Footer from '@/components/footer';
import React, {ReactNode} from 'react';
import Navbar from '@/components/Navbar';
import {NextIntlClientProvider} from "next-intl";
import { cookies } from 'next/headers';

export const metadata: Metadata = {
    title: 'Lili y Max',
    description: 'Bienvenidos a la boda del año, a la boda de Lili y Max',
};

export default async function RootLayout({ children, params }: { children: ReactNode, params: { locale: string } }) {
    const messages = (await import(`@/messages/${params.locale}.json`)).default;
    const cookieStore = cookies();
    const isAuthenticated = cookieStore.get('wedding-auth');

    return (
        <html lang={params.locale}>
        <body className={`${montserrat.className} `}>
        <NextIntlClientProvider messages={messages}>
            {isAuthenticated && <Navbar/>}
            <main className={`w-full flex-grow ${isAuthenticated ? 'mt-[78px]' : ''}`}>
                {children}
            </main>
            {isAuthenticated && <Footer/>}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
