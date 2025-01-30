import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ThemeProvider } from '../components/Theme-Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Silver Springs',
  description: 'Silver Springs Project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}