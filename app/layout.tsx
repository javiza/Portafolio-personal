import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { createClient } from "../lib/supabase/server";
import { DEFAULT_SETTINGS, type SiteSettings } from "../types/settings";

// El home lee configuración desde Supabase (cookies()), así que Next lo
// trataba como dinámico solo mientras nada atrapara ese error interno.
// El try/catch de getSettings() se lo comía, y la página quedaba
// congelada como estática desde el build (initialRevalidateSeconds:
// false). Esto fuerza el render en cada request para todo el sitio.
export const dynamic = "force-dynamic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Las 4 opciones del selector de tipografía del panel admin. next/font
// exige que las fuentes se declaren de forma estática (no se puede
// llamar Poppins({...}) dentro de una condición), así que se cargan
// las cuatro y se elige cuál queda activa vía variable CSS --font-site.
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const FONT_VAR: Record<SiteSettings["font_family"], string> = {
  geist: "var(--font-geist-sans)",
  inter: "var(--font-inter)",
  poppins: "var(--font-poppins)",
  roboto: "var(--font-roboto)",
};

const SITE_URL = "https://portafolio-personal-dnar.vercel.app";

// Lee la configuración del sitio de forma segura: si Supabase no está
// disponible todavía, se usan los valores por defecto y el sitio se ve
// exactamente igual que antes.
async function getSettings(): Promise<SiteSettings> {
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("site_settings")
      .select("*")
      .eq("id", 1)
      .maybeSingle();

    return data ? { ...DEFAULT_SETTINGS, ...data } : DEFAULT_SETTINGS;
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  const title = settings.browser_tab_title || DEFAULT_SETTINGS.browser_tab_title;

  return {
    metadataBase: new URL(SITE_URL),

    title: {
      default: title,
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

    icons: {
      icon: settings.favicon_url || "/favicon.ico",
      shortcut: settings.favicon_url || "/favicon.ico",
    },

    openGraph: {
      title,
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
      title,
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
}

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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSettings();

  // Colores, tipografía y color de texto guardados en Supabase,
  // aplicados como variables CSS en :root/.dark para que globals.css
  // (vía @theme inline) los convierta en utilidades reales:
  // bg-background, text-foreground, bg-card, bg-brand, font-sans.
  // Van en un <style> del <head> (no en un atributo style de <main>)
  // porque body, que es quien pinta el fondo, es ancestro del
  // contenido, no descendiente.
  // Todo es color plano: sin degradados. El fondo de las tarjetas
  // (--card-bg) es un color propio, independiente del fondo de
  // página, así nunca se confunden entre sí.
  const cssVars = `
    :root {
      --background: ${settings.background_light};
      --foreground: ${settings.text_color_light};
      --brand-primary: ${settings.primary_color};
      --brand-secondary: ${settings.secondary_color};
      --card-bg: ${settings.card_bg_light};
      --font-site: ${FONT_VAR[settings.font_family] ?? FONT_VAR.geist};
    }
    .dark {
      --background: ${settings.background_dark};
      --foreground: ${settings.text_color_dark};
      --card-bg: ${settings.card_bg_dark};
    }
  `;

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: cssVars }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poppins.variable} ${roboto.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers defaultTheme={settings.default_theme}>{children}</Providers>
      </body>
    </html>
  );
}
