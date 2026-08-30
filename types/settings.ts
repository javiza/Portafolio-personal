export type SkillItem = { name: string; icon: string };
export type StackFact = { label: string; value: string };
export type ServiceItem = { title: string; description: string };
export type ProjectItem = {
  title: string;
  description: string;
  link?: string;
  linkLabel?: string;
  color?: string;
};

export type SiteSettings = {
  // Identidad del sitio
  favicon_url: string;
  browser_tab_title: string;

  // Colores
  primary_color: string;
  secondary_color: string;
  background_light: string;
  background_dark: string;

  // Tipografía
  font_family: "geist" | "inter" | "poppins" | "roboto";

  // Modo oscuro / efectos visuales
  default_theme: "light" | "dark";
  enable_effects: boolean; // partículas de fondo + animaciones extra

  // Hero
  hero_title: string;
  hero_subtitle: string;
  hero_terminal_lines: string[];
  hero_button_primary_label: string;
  hero_button_primary_href: string;
  hero_button_secondary_label: string;
  hero_button_secondary_href: string;
  logo_light_url: string;
  logo_dark_url: string;

  // Banner / Slider (imágenes con texto opcional)
  banner_images: { url: string; caption?: string }[];

  // Sobre mí
  about_title: string;
  about_text: string;
  about_highlight: string;
  about_soft_skills_title: string;
  about_soft_skills: string[];
  about_stack_title: string;
  about_stack_facts: StackFact[];
  about_focus_label: string;
  about_focus_text: string;
  about_social_title: string;

  // Servicios
  services_title: string;
  services_description: string;
  services_items: ServiceItem[];
  services_cta_label: string;
  services_cta_href: string;

  // Stack de desarrollo (grid de íconos)
  stack_title: string;
  stack_items: SkillItem[];

  // Ciberseguridad (grid de íconos)
  security_title: string;
  security_items: SkillItem[];

  // Proyectos
  projects_title: string;
  projects_items: ProjectItem[];

  // Contacto
  contact_title: string;

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
  favicon_url: "/favicon.ico",
  browser_tab_title: "Jonathan Bustos | Desarrollador Full Stack & Pentester Web",

  primary_color: "#2563eb",
  secondary_color: "#9333ea",
  background_light: "#f5f7fa",
  background_dark: "#0b0722",

  font_family: "geist",

  default_theme: "light",
  enable_effects: true,

  hero_title: "Desarrollador Full Stack",
  hero_subtitle: "🚀 Ciberseguridad & Pentesting Web / API",
  hero_terminal_lines: [
    "$ initializing_security_modules...",
    "$ scanning_web_applications...",
    "$ pentesting_mode_enabled ✓",
  ],
  hero_button_primary_label: "Ver Proyectos",
  hero_button_primary_href: "#proyectos",
  hero_button_secondary_label: "Contactar",
  hero_button_secondary_href: "#contacto",
  logo_light_url: "/logo-light.png",
  logo_dark_url: "/logo-dark.png",

  banner_images: [],

  about_title: "FullStack Developer",
  about_text:
    "Mi nombre es Jonathan Bustos R. Soy desarrollador Full Stack con experiencia en construcción de aplicaciones web modernas, APIs escalables y despliegues en entornos cloud. Me enfoco en escribir código limpio, seguro y mantenible, integrando buenas prácticas de desarrollo y arquitectura.",
  about_highlight: "Ciberseguridad y Pentesting Web / API",
  about_soft_skills_title: "Habilidades blandas",
  about_soft_skills: [
    "Resolución de problemas",
    "Pensamiento analítico",
    "Aprendizaje continuo",
    "Trabajo en equipo",
    "Comunicación efectiva",
    "Adaptabilidad a nuevas tecnologías",
  ],
  about_stack_title: "Stack técnico",
  about_stack_facts: [
    { label: "Lenguajes", value: "JavaScript, TypeScript, Python, Java, C#" },
    { label: "Frontend", value: "React, Next.js, Angular, Ionic" },
    { label: "Backend", value: "Node.js, NestJS, Express" },
    { label: "Bases de datos", value: "PostgreSQL, MongoDB, Oracle SQL, PL/SQL" },
    { label: "DevOps", value: "Docker, Kubernetes, Linux, Git" },
    { label: "Cloud", value: "Azure, Oracle Cloud, Render" },
    { label: "Big Data", value: "Apache Spark, Apache Kafka" },
  ],
  about_focus_label: "Enfoque actual:",
  about_focus_text: "Seguridad en aplicaciones web, APIs y testing ofensivo",
  about_social_title: "Redes Profesionales",

  services_title: "Servicios",
  services_description:
    "Desarrollo aplicaciones web a medida para negocios y proyectos personales, desde el diseño hasta el despliegue en producción.",
  services_items: [
    {
      title: "Desarrollo Web a Medida",
      description:
        "Sitios y sistemas web para empresas: catálogos, reservas, paneles administrativos y más, con Next.js y React.",
    },
    {
      title: "APIs y Backends",
      description:
        "APIs seguras y escalables con NestJS/Node.js, autenticación JWT y bases de datos PostgreSQL o MongoDB.",
    },
    {
      title: "Seguridad Web",
      description:
        "Revisión de vulnerabilidades OWASP, pruebas de seguridad en APIs y hardening de aplicaciones antes de salir a producción.",
    },
  ],
  services_cta_label: "Solicitar una cotización",
  services_cta_href: "#contacto",

  stack_title: "Stack de Desarrollo",
  stack_items: [
    { icon: "nextjs", name: "NextJS" },
    { icon: "react", name: "React" },
    { icon: "angular", name: "Angular" },
    { icon: "ionic", name: "Ionic" },
    { icon: "nestjs", name: "NestJS" },
    { icon: "express", name: "Express" },
    { icon: "nodejs", name: "Node.js" },
    { icon: "postgresql", name: "PostgreSQL" },
    { icon: "mongodb", name: "MongoDB" },
    { icon: "docker", name: "Docker" },
    { icon: "kubernetes", name: "Kubernetes" },
    { icon: "linux", name: "Linux" },
    { icon: "git", name: "Git" },
    { icon: "apachespark", name: "Apache Spark" },
    { icon: "apachekafka", name: "Apache Kafka" },
  ],

  security_title: "Ciberseguridad",
  security_items: [
    { icon: "owasp", name: "OWASP Top 10" },
    { icon: "bug", name: "SQL Injection" },
    { icon: "bug", name: "Cross Site Scripting" },
    { icon: "security", name: "Broken Access Control" },
    { icon: "security", name: "API Security Testing" },
    { icon: "security", name: "JWT Security" },
    { icon: "postman", name: "Postman" },
    { icon: "swagger", name: "Swagger / OpenAPI" },
  ],

  projects_title: "Proyectos Destacados",
  projects_items: [
    {
      title: "Sistema de Condominio",
      description:
        "Control de accesos con QR dinámico, auditoría en tiempo real y panel administrativo.",
      link: "/proyecto_condominio",
      linkLabel: "Ver Detalles →",
    },
    {
      title: "Agencia de Turismo Online",
      description:
        "Sitio web comercial con catálogo de destinos, paquetes y ofertas, reservas online y panel administrativo propio.",
      link: "/proyecto_turismo",
      linkLabel: "Ver Detalles →",
    },
    {
      title: "API REST & Dashboards en Tiempo Real",
      description:
        "Backends con NestJS y autenticación JWT, y dashboards con WebSockets y métricas en vivo, integrados a los proyectos anteriores.",
    },
  ],

  contact_title: "Contacto:",

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
