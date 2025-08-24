import type { Metadata } from "next";
import Script from "next/script";
import "./global.css";

export const metadata: Metadata = {
  title: "Canary - Digital Failsafe for Critical Information",
  description: "Canary is a trusted, secure space for journalists, activists, and everyday citizens to automatically release critical information if they're unable to speak for themselves.",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
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
          strategy="lazyOnload"
          async
        />
      </body>
    </html>
  );
}
