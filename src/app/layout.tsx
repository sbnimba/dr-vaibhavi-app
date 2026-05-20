import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Vaibhavi Dhenge | Premium Obstetrician & Gynaecologist",
  description: "Dr. Vaibhavi Dhenge, Senior Resident at MGM Belapur Hospital. Expert Obstetrician & Gynaecologist for pregnancy, PCOS, and women's health.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      translate="no"
      className={`${plusJakartaSans.variable} ${lora.variable} scroll-smooth snap-y snap-mandatory antialiased`}
    >
      <head>
        {/* Libraries */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
        {/* Prevent browser auto-translate — we have built-in translation */}
        <meta name="google" content="notranslate" />
        <meta httpEquiv="Content-Language" content="en" />
      </head>
      <body className="font-sans text-gray-800 overflow-x-hidden">{children}</body>
    </html>
  );
}
