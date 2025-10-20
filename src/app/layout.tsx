import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AOSInit } from './aos';
const inter = Inter({
    subsets: ['latin'],
    weight: ['200', '400', '600'],
});

export const metadata: Metadata = {
    title: 'Lishida company',
    description: 'Lishida company',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <AOSInit />
            <body className={inter.className}>{children}</body>
        </html>
    );
}
