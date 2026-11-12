import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "itWADURA | Digital Solutions. Engineered for Growth.",
  description:
    "Building digital experiences, intelligent business systems, and automation solutions that move businesses forward. Thoughtful design, reliable engineering, and smarter business.",
  keywords: [
    "itWADURA",
    "Web Development",
    "Business Management Software",
    "Inventory Management",
    "Point of Sale",
    "Business Automation",
    "AI Solutions",
    "Custom Software Engineering",
  ],
  icons: {
    icon: "/itWadura-logo.svg",
    apple: "/itWadura-logo.png",
  },
  openGraph: {
    title: "itWADURA | Digital Solutions. Engineered for Growth.",
    description:
      "Building digital experiences, intelligent business systems, and automation solutions that move businesses forward.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-[#8ccff0]/30 selection:text-[#111827]">
        {children}
      </body>
    </html>
  );
}
