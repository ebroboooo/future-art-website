import type { Metadata } from 'next';
import { Providers } from './providers';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'FUTURE ART | Packaging Reinvented',
  description: 'FUTURE ART - Packaging Reinvented. Modern and professional printing and packaging solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Cairo:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="font-body antialiased">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
