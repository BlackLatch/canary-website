import type { Metadata } from "next";
import Script from "next/script";
import "./global.css";

export const metadata: Metadata = {
  title: "Canary - Digital Failsafe for Critical Information",
  description: "Canary is a trusted, secure space for journalists, activists, and everyday citizens to automatically release critical information if they're unable to speak for themselves.",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  metadataBase: new URL('https://canaryapp.io'),
  openGraph: {
    title: "Canary - Digital Failsafe for Critical Information",
    description: "Canary releases your files or messages if you don't check in. You define the schedule and the recipients.",
    url: 'https://canaryapp.io',
    siteName: 'Canary',
    images: [
      {
        url: '/canary2.png',
        width: 1200,
        height: 630,
        alt: 'Canary - Digital Dead Man\'s Switch',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Canary - Digital Failsafe for Critical Information",
    description: "Canary releases your files or messages if you don't check in. You define the schedule and the recipients.",
    images: ['/canary2.png'],
    creator: '@canaryapp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {/* Supascribe Script (Only add this to your site once) */}
        <Script 
          src="https://js.supascribe.com/v1/loader/zgn5IbpooVbrPacN4C27D8yOn1S2.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
