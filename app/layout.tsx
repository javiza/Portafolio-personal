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

const SITE_URL = "https://portafolio-personal-dnar.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Jonathan Bustos | Desarrollador Full Stack & Pentester Web",
    template: "%s | Jonathan Bustos",
  },

  description:
    "Desarrollador Full Stack en Chile especializado en Next.js, NestJS, PostgreSQL y seguridad web. Desarrollo de aplicaciones web a medida, APIs y auditorías de seguridad (OWASP, pentesting web/API).",

  keywords: [
    "Desarrollador Full Stack Chile",
    "Full Stack Developer",
    "Pentester",
    "Next.js",
    "NestJS",
    "Ciberseguridad",
    "Seguridad de APIs",
    "OWASP",
    "PostgreSQL",
    "Docker",
    "Desarrollo web a medida",
    "Desarrollo de aplicaciones web Chile",
  ],

  authors: [{ name: "Jonathan Bustos" }],
  creator: "Jonathan Bustos",
  publisher: "Jonathan Bustos",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Jonathan Bustos | Desarrollador Full Stack & Pentester Web",
    description:
      "Desarrollo aplicaciones web a medida, APIs seguras y auditorías de seguridad web. Portafolio con proyectos reales en producción.",
    url: SITE_URL,
    siteName: "Jonathan Bustos Portfolio",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/logo-dark.png",
        width: 500,
        height: 300,
        alt: "Jonathan Bustos - Desarrollador Full Stack",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jonathan Bustos | Desarrollador Full Stack & Pentester Web",
    description:
      "Desarrollo aplicaciones web a medida, APIs seguras y auditorías de seguridad web.",
    images: ["/logo-dark.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jonathan Bustos",
  jobTitle: "Full Stack Developer & Pentester Web",
  url: SITE_URL,
  sameAs: [
    "https://github.com/javiza",
    "https://linkedin.com/in/jonathan-bustos-r",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "NestJS",
    "PostgreSQL",
    "Ciberseguridad",
    "Pentesting web",
    "OWASP",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}