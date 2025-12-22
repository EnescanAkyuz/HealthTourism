import './globals.css';
import { Inter } from 'next/font/google';
import { ComparisonProvider } from '@/context/ComparisonContext';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'HealthHaven - Premium Health Tourism',
    description: 'Find top-rated health tourism agencies worldwide.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <LanguageProvider>
                    <ComparisonProvider>
                        <Navbar />
                        {children}
                    </ComparisonProvider>
                </LanguageProvider>
            </body>
        </html>
    );
}
