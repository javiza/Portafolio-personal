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

// Sección 100% personalizada creada desde el panel: título libre +
// texto libre. Se identifica con un id único que no cambia aunque se
// renombre el título (así "section_order" no se rompe al renombrar).
export type CustomSection = {
  id: string;
  title: string;
  content: string;
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

  // Fondo de las tarjetas/módulos, independiente del fondo de página.
  // Antes era un color fijo en el CSS; al elegir cualquier fondo de
  // página se podía confundir con el de las tarjetas.
  card_bg_light: string;
  card_bg_dark: string;

  // Color del texto (tipografía), por tema. Antes estaba fijo en el
  // CSS y no era editable desde el panel.
  text_color_light: string;
  text_color_dark: string;

  // Tipografía
  font_family: "geist" | "inter" | "poppins" | "roboto";

  // Color del texto del efecto terminal del hero (antes venía fijo en
  // verde y no se podía editar desde el panel).
  hero_terminal_text_color: string;

  // Botones: antes cada botón del sitio (hero, servicios, redes,
  // proyectos, formulario) tenía su color pegado en el código
  // (azul, morado, negro...) y no eran editables. Ahora TODOS los
  // botones "sólidos" del sitio comparten estos mismos valores.
  button_bg_color: string;
  button_text_color: string;
  button_shape: "full" | "rounded" | "square";

  // Modo oscuro / efectos visuales
  default_theme: "light" | "dark";
  enable_effects: boolean; // partículas de fondo + animaciones extra

  // Fondos opcionales adicionales a las partículas. Independientes entre
  // sí: se pueden combinar libremente o dejar todos vacíos/apagados.
  hero_bg_image_url: string; // imagen de fondo solo detrás del hero/inicio
  hero_bg_overlay_opacity: number; // 0 a 1, oscurece la imagen del hero para que se lea el texto
  page_bg_image_url: string; // imagen de fondo fija detrás de toda la página
  page_bg_image_opacity: number; // 0 a 1, qué tan visible es la imagen de fondo completa

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
  // Ancho del logo en píxeles (el alto se ajusta solo para no deformarlo).
  // Antes el logo se dibujaba siempre a 500px y no se podía cambiar.
  logo_width: number;

  // Banner / Slider (imágenes con texto opcional)
  banner_images: { url: string; caption?: string }[];

  // Sobre mí
  about_section_title: string; // título de la sección completa (antes venía fijo como "Sobre mí")
  about_title: string;
  about_text: string;
  about_highlights: string[]; // recuadros opcionales (frases destacadas), 100% editables por el admin
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
  footer_bg_color: string; // color de fondo del footer (antes fijo en gris oscuro)
  footer_text_color: string; // color del texto del footer (antes fijo, casi invisible)

  // Noticias / novedades (opcional, se muestran si hay al menos una)
  news_title: string; // título de la sección completa (antes venía fijo como "Noticias")
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

  // Secciones 100% personalizadas agregadas desde el panel (además de
  // las fijas de arriba). Se pueden crear, renombrar y eliminar todas
  // las que se quiera.
  custom_sections: CustomSection[];

  // Orden y ubicación de TODOS los módulos del home. Incluye las claves
  // fijas ("about", "services", "stack", "security", "projects", "news",
  // "contact") y, para las personalizadas, "custom:<id>". Cualquier
  // sección visible que no aparezca aquí se agrega al final.
  section_order: string[];

  // Alineación de cada sección dentro de la página: puede quedar
  // centrada (por defecto, como hasta ahora), o desplazada e
  // "imantada" hacia la izquierda o la derecha. Usa las mismas claves
  // que section_order ("about", "custom:<id>", etc.). Una sección sin
  // entrada acá se muestra centrada.
  section_align: Record<string, "left" | "center" | "right">;
};

// Claves de las secciones fijas (no personalizadas) del home.
export const BUILTIN_SECTION_KEYS = [
  "about",
  "services",
  "stack",
  "security",
  "banner",
  "projects",
  "news",
  "contact",
] as const;
export type BuiltinSectionKey = (typeof BUILTIN_SECTION_KEYS)[number];

// Valores por defecto = el contenido actual del portafolio.
// Si todavía no existe una fila en la base de datos, el home se ve
// exactamente igual que ahora.
export const DEFAULT_SETTINGS: SiteSettings = {
  favicon_url: "/favicon.ico",
  browser_tab_title: "Jonathan Bustos | Desarrollador Full Stack & Pentester Web",

  primary_color: "#2563eb",
  secondary_color: "#9333ea",
  background_light: "#f5f7fa",
  background_dark: "#0b0722", // ahora es un color plano, sin degradado

  card_bg_light: "#ffffff",
  card_bg_dark: "#171233", // un poco más claro que el fondo oscuro, para que se distinga

  text_color_light: "#0f0f0f",
  text_color_dark: "#f0eaff",

  font_family: "geist",

  hero_terminal_text_color: "#22c55e",

  button_bg_color: "#2563eb",
  button_text_color: "#ffffff",
  button_shape: "full",

  default_theme: "light",
  enable_effects: true,

  hero_bg_image_url: "",
  hero_bg_overlay_opacity: 0.55,
  page_bg_image_url: "",
  page_bg_image_opacity: 0.18,

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
  logo_width: 280,

  banner_images: [],

  about_section_title: "Sobre mí",
  about_title: "FullStack Developer",
  about_text:
    "Mi nombre es Jonathan Bustos R. Soy desarrollador Full Stack con experiencia en construcción de aplicaciones web modernas, APIs escalables y despliegues en entornos cloud. Me enfoco en escribir código limpio, seguro y mantenible, integrando buenas prácticas de desarrollo y arquitectura.",
  about_highlights: [], // vacío por defecto: la sección es opcional
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
  footer_bg_color: "#111827",
  footer_text_color: "#e5e7eb",

  news_title: "Noticias",
  news: [],

  custom_sections: [],

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
    "banner",
    "news",
    "projects",
    "contact",
  ],

  section_align: {},
};
