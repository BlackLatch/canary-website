import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canary - Digital Failsafe for Critical Information",
  description: "Canary is a trusted, secure space for journalists, activists, and everyday citizens to automatically release critical information if they're unable to speak for themselves.",
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
      </body>
    </html>
  );
}
