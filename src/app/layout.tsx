import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/site/header";
import Footer from "@/components/site/footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://silverspringstudio.com"),
  title: {
    default: "Silver Springs Studio — An inclusive art community in Ottawa",
    template: "%s · Silver Springs Studio",
  },
  description:
    "Silver Springs cultivates a vibrant, inclusive creative community for adults with developmental disabilities in Ottawa-Carleton. Support our artists, join a program, or shop original artwork.",
  openGraph: {
    type: "website",
    siteName: "Silver Springs Studio",
    locale: "en_CA",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
