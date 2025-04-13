import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sudha Chandran | Full Stack Developer",
  description: "Portfolio of Sudha Chandran, a passionate full stack developer specializing in React, Node.js, TypeScript and modern web technologies. Explore my projects, skills, and journey in web development.",
  keywords: [
    "full stack developer",
    "web development",
    "React developer",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "portfolio",
    "software engineer",
    "IIIT Ranchi",
    "frontend development",
    "backend development"
  ],
  creator: "Sudha Chandran",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://portfolio-rose-omega-41.vercel.app", 
    title: "Sudha Chandran | Full Stack Developer Portfolio",
    description: "Showcasing projects and skills in React, Node.js, MongoDB, and modern web technologies",
    siteName: "Sudha Chandran Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudha Chandran | Full Stack Developer",
    description: "Full stack developer specializing in modern web technologies",
    creator: "sudha51529", 
  },
  robots: {
    index: true,
    follow: true
  },
  metadataBase: new URL("https://portfolio-rose-omega-41.vercel.app"), 
  alternates: {
    canonical: "/",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >   <Toaster />
        {children}
      </body>
    </html>
  );
}
