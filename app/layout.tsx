import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

export const metadata: Metadata = {
  title:
    "2Care Foot Health - Professional Foot Care in Aberdeen & Aberdeenshire",
  description:
    "2Care Foot Health provides professional foot care services in Aberdeen & Aberdeenshire. Book appointments, learn about services, and read our privacy policy.",
  keywords:
    "foot health, podiatry, diabetic foot care, Aberdeen, Aberdeenshire, home visits, nail care, corn removal",
  robots: "index, follow",
  openGraph: {
    title: "2Care Foot Health",
    description: "Professional foot care services in Aberdeen & Aberdeenshire",
    //url: 'https://www.2carefoothealth.com',
    siteName: "2Care Foot Health",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}
