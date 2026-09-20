-- =========================================================
-- Ejecutar esto en Supabase → SQL Editor
-- Este script es idempotente: sirve tanto para crear la base
-- desde cero como para migrar una base ya existente (agrega
-- solo las columnas que falten, sin tocar tus datos actuales).
-- =========================================================

-- 1) Tabla de configuración del sitio (una sola fila, id = 1)
create table if not exists site_settings (
  id int primary key default 1,
  primary_color text default '#2563eb',
  secondary_color text default '#9333ea',
  background_light text default '#f5f7fa',
  background_dark text default '#0b0722',
  font_family text default 'geist',
  hero_title text default 'Desarrollador Full Stack',
  hero_subtitle text default '🚀 Ciberseguridad & Pentesting Web / API',
  logo_light_url text default '/logo-light.png',
  logo_dark_url text default '/logo-dark.png',
  banner_images jsonb default '[]',
  about_title text default 'FullStack Developer',
  about_text text default '',
  about_highlight text default '', -- (legacy, ya no se usa, ver about_highlights más abajo)
  github_url text default '',
  linkedin_url text default '',
  footer_text text default 'Full Stack · Seguridad Web',
  news jsonb default '[]',
  show_about boolean default true,
  show_services boolean default true,
  show_stack boolean default true,
  show_security boolean default true,
  show_projects boolean default true,
  show_news boolean default false,
  show_banner boolean default false,
  show_contact boolean default true,
  section_order jsonb default '["about","services","stack","security","projects","news","contact"]',
  updated_at timestamptz default now()
);

-- 1.1) Migración: columnas nuevas del panel "control total del home".
-- Cada línea es segura de re-ejecutar (IF NOT EXISTS). También cubre
-- columnas que ya estaban en el CREATE TABLE de arriba: si tu tabla se
-- creó con una versión más vieja de este script (antes de que existieran),
-- "create table if not exists" no las agrega retroactivamente, así que
-- quedan reforzadas acá también.
alter table site_settings add column if not exists show_about boolean default true;
alter table site_settings add column if not exists show_services boolean default true;
alter table site_settings add column if not exists show_stack boolean default true;
alter table site_settings add column if not exists show_security boolean default true;
alter table site_settings add column if not exists show_projects boolean default true;
alter table site_settings add column if not exists show_news boolean default false;
alter table site_settings add column if not exists show_banner boolean default false;
alter table site_settings add column if not exists show_contact boolean default true;
alter table site_settings add column if not exists section_order jsonb default '["about","services","stack","security","banner","news","projects","contact"]';

alter table site_settings add column if not exists favicon_url text default '/favicon.ico';
alter table site_settings add column if not exists browser_tab_title text default 'Jonathan Bustos | Desarrollador Full Stack & Pentester Web';

-- 1.2) Fondo de tarjetas/módulos y color de texto, por tema. Antes
-- estaban fijos en el CSS (blanco/morado y negro/lila), sin poder
-- editarse desde el panel; ahora son independientes del color de
-- fondo de la página para que no se confundan entre sí.
alter table site_settings add column if not exists card_bg_light text default '#ffffff';
alter table site_settings add column if not exists card_bg_dark text default '#171233';
alter table site_settings add column if not exists text_color_light text default '#0f0f0f';
alter table site_settings add column if not exists text_color_dark text default '#f0eaff';

alter table site_settings add column if not exists default_theme text default 'light';
alter table site_settings add column if not exists enable_effects boolean default true;

alter table site_settings add column if not exists hero_terminal_lines jsonb default
  '["$ initializing_security_modules...","$ scanning_web_applications...","$ pentesting_mode_enabled ✓"]';
alter table site_settings add column if not exists hero_button_primary_label text default 'Ver Proyectos';
alter table site_settings add column if not exists hero_button_primary_href text default '#proyectos';
alter table site_settings add column if not exists hero_button_secondary_label text default 'Contactar';
alter table site_settings add column if not exists hero_button_secondary_href text default '#contacto';

alter table site_settings add column if not exists about_soft_skills_title text default 'Habilidades blandas';
alter table site_settings add column if not exists about_soft_skills jsonb default
  '["Resolución de problemas","Pensamiento analítico","Aprendizaje continuo","Trabajo en equipo","Comunicación efectiva","Adaptabilidad a nuevas tecnologías"]';
alter table site_settings add column if not exists about_highlights jsonb default '[]'; -- recuadros opcionales, reemplaza a about_highlight
alter table site_settings add column if not exists about_stack_title text default 'Stack técnico';
alter table site_settings add column if not exists about_stack_facts jsonb default '[]';
alter table site_settings add column if not exists about_focus_label text default 'Enfoque actual:';
alter table site_settings add column if not exists about_focus_text text default '';
alter table site_settings add column if not exists about_social_title text default 'Redes Profesionales';

alter table site_settings add column if not exists services_title text default 'Servicios';
alter table site_settings add column if not exists services_description text default '';
alter table site_settings add column if not exists services_items jsonb default '[]';
alter table site_settings add column if not exists services_cta_label text default 'Solicitar una cotización';
alter table site_settings add column if not exists services_cta_href text default '#contacto';

alter table site_settings add column if not exists stack_title text default 'Stack de Desarrollo';
alter table site_settings add column if not exists stack_items jsonb default '[]';

alter table site_settings add column if not exists security_title text default 'Ciberseguridad';
alter table site_settings add column if not exists security_items jsonb default '[]';

alter table site_settings add column if not exists projects_title text default 'Proyectos Destacados';
alter table site_settings add column if not exists projects_items jsonb default '[]';

alter table site_settings add column if not exists contact_title text default 'Contacto:';

-- 1.3) Secciones personalizadas: el admin puede agregar tantas secciones
-- propias como quiera (título + texto libre), además de las secciones
-- fijas de arriba. Cada una tiene un id único que se referencia desde
-- section_order como "custom:<id>".
alter table site_settings add column if not exists custom_sections jsonb default '[]';

-- 1.4) Fondos opcionales adicionales a las partículas. Ambos son
-- independientes entre sí y de "enable_effects": se puede tener
-- partículas + imagen de fondo del hero + imagen de fondo de toda la
-- página, todo a la vez, o ninguno.
alter table site_settings add column if not exists hero_bg_image_url text default '';
alter table site_settings add column if not exists hero_bg_overlay_opacity numeric default 0.55;
alter table site_settings add column if not exists page_bg_image_url text default '';
alter table site_settings add column if not exists page_bg_image_opacity numeric default 0.18;

-- 1.5) Títulos de sección que antes venían fijos en el código y ahora
-- son editables desde el panel (parte del pedido de que "cada sección
-- se pueda renombrar").
alter table site_settings add column if not exists about_section_title text default 'Sobre mí';
alter table site_settings add column if not exists news_title text default 'Noticias';

-- 1.6) Botones: antes cada botón del sitio tenía su color pegado en el
-- código (azul, morado, negro...) y no eran editables. Ahora TODOS los
-- botones "sólidos" del sitio comparten estas 3 columnas.
alter table site_settings add column if not exists button_bg_color text default '#2563eb';
alter table site_settings add column if not exists button_text_color text default '#ffffff';
alter table site_settings add column if not exists button_shape text default 'full';

-- 1.7) Color del texto del efecto terminal del hero (antes venía fijo
-- en verde y no se podía editar desde el panel).
alter table site_settings add column if not exists hero_terminal_text_color text default '#22c55e';

-- 1.8) Alineación de cada sección del home (izquierda / centro /
-- derecha), independiente del orden. Las claves del jsonb son las
-- mismas que se usan en section_order ("about", "custom:<id>", etc.).
alter table site_settings add column if not exists section_align jsonb default '{}';

-- 1.9) Tamaño del logo (ancho en px) y colores del footer (fondo y texto).
-- Antes el logo se dibujaba siempre a 500px y el footer tenía el color
-- fijo en el código.
alter table site_settings add column if not exists logo_width integer default 280;
alter table site_settings add column if not exists footer_bg_color text default '#111827';
alter table site_settings add column if not exists footer_text_color text default '#e5e7eb';

-- Fila inicial (si no existe)
insert into site_settings (id) values (1)
on conflict (id) do nothing;

-- 2) Seguridad a nivel de fila (RLS)
alter table site_settings enable row level security;

-- Cualquier visitante puede LEER la configuración (para que el home público funcione)
drop policy if exists "Lectura pública de site_settings" on site_settings;
create policy "Lectura pública de site_settings"
on site_settings for select
to anon, authenticated
using (true);

-- Solo un usuario autenticado (el admin) puede modificarla
drop policy if exists "Solo admin puede escribir site_settings" on site_settings;
create policy "Solo admin puede escribir site_settings"
on site_settings for insert
to authenticated
with check (true);

drop policy if exists "Solo admin puede actualizar site_settings" on site_settings;
create policy "Solo admin puede actualizar site_settings"
on site_settings for update
to authenticated
using (true)
with check (true);

-- 3) Bucket de almacenamiento para imágenes subidas desde el panel
-- (se reutiliza también para el favicon)
insert into storage.buckets (id, name, public)
values ('site-images', 'site-images', true)
on conflict (id) do nothing;

-- Cualquiera puede VER las imágenes (son públicas, es un sitio web)
drop policy if exists "Lectura pública de imágenes" on storage.objects;
create policy "Lectura pública de imágenes"
on storage.objects for select
to anon, authenticated
using (bucket_id = 'site-images');

-- Solo un usuario autenticado puede subir/editar imágenes
drop policy if exists "Solo admin puede subir imágenes" on storage.objects;
create policy "Solo admin puede subir imágenes"
on storage.objects for insert
to authenticated
with check (bucket_id = 'site-images');

drop policy if exists "Solo admin puede actualizar imágenes" on storage.objects;
create policy "Solo admin puede actualizar imágenes"
on storage.objects for update
to authenticated
using (bucket_id = 'site-images');

-- =========================================================
-- Después de correr esto, crea tu usuario admin en:
-- Supabase → Authentication → Users → Add user
-- (usa el correo y contraseña con los que vas a iniciar sesión
-- en /login/admin)
-- =========================================================
