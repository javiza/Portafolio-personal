import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jonathan Bustos | FullStack Developer & Pentester",

  description:
    "Full Stack Developer especializado en Next.js, NestJS, PostgreSQL y seguridad web. Experiencia en pentesting de APIs y aplicaciones web.",

  keywords: [
    "Full Stack Developer",
    "Pentester",
    "Next.js",
    "NestJS",
    "Cybersecurity",
    "API Security",
    "OWASP",
    "PostgreSQL",
    "Docker",
  ],

  authors: [{ name: "Jonathan Bustos" }],

  creator: "Jonathan Bustos",

  openGraph: {
    title: "Jonathan Bustos | FullStack Developer",
    description:
      "Desarrollador FullStack especializado en seguridad web y pentesting de APIs.",
    url: "https://portafolio-personal-dnar.vercel.app",
    siteName: "Jonathan Bustos Portfolio",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}