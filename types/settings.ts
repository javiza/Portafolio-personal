export type SiteSettings = {
  // Colores
  primary_color: string;
  secondary_color: string;
  background_light: string;
  background_dark: string;

  // Tipografía
  font_family: "geist" | "inter" | "poppins" | "roboto";

  // Hero
  hero_title: string;
  hero_subtitle: string;
  logo_light_url: string;
  logo_dark_url: string;

  // Banner / Slider (imágenes con texto opcional)
  banner_images: { url: string; caption?: string }[];

  // Sobre mí
  about_title: string;
  about_text: string;
  about_highlight: string;

  // Redes
  github_url: string;
  linkedin_url: string;

  // Footer
  footer_text: string;

  // Noticias / novedades (opcional, se muestran si hay al menos una)
  news: { title: string; content: string; date?: string }[];

  // Visibilidad de secciones (todo opcional, como pidió el usuario)
  show_about: boolean;
  show_services: boolean;
  show_stack: boolean;
  show_security: boolean;
  show_projects: boolean;
  show_news: boolean;
  show_banner: boolean;
  show_contact: boolean;

  // Orden de las secciones principales en el home
  section_order: (
    | "about"
    | "services"
    | "stack"
    | "security"
    | "projects"
    | "news"
    | "contact"
  )[];
};

// Valores por defecto = el contenido actual del portafolio.
// Si todavía no existe una fila en la base de datos, el home se ve
// exactamente igual que ahora.
export const DEFAULT_SETTINGS: SiteSettings = {
  primary_color: "#2563eb",
  secondary_color: "#9333ea",
  background_light: "#f5f7fa",
  background_dark: "#0b0722",

  font_family: "geist",

  hero_title: "Desarrollador Full Stack",
  hero_subtitle: "🚀 Ciberseguridad & Pentesting Web / API",
  logo_light_url: "/logo-light.png",
  logo_dark_url: "/logo-dark.png",

  banner_images: [],

  about_title: "FullStack Developer",
  about_text:
    "Mi nombre es Jonathan Bustos R. Soy desarrollador Full Stack con experiencia en construcción de aplicaciones web modernas, APIs escalables y despliegues en entornos cloud. Me enfoco en escribir código limpio, seguro y mantenible, integrando buenas prácticas de desarrollo y arquitectura.",
  about_highlight: "Ciberseguridad y Pentesting Web / API",

  github_url: "https://github.com/javiza",
  linkedin_url: "https://linkedin.com/in/jonathan-bustos-r",

  footer_text: "Jonathan Bustos · Full Stack · Seguridad Web",

  news: [],

  show_about: true,
  show_services: true,
  show_stack: true,
  show_security: true,
  show_projects: true,
  show_news: false,
  show_banner: false,
  show_contact: true,

  section_order: [
    "about",
    "services",
    "stack",
    "security",
    "projects",
    "news",
    "contact",
  ],
};
