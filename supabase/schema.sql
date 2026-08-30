-- =========================================================
-- Ejecutar esto en Supabase → SQL Editor
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
  about_highlight text default '',
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

-- Fila inicial (si no existe)
insert into site_settings (id) values (1)
on conflict (id) do nothing;

-- 2) Seguridad a nivel de fila (RLS)
alter table site_settings enable row level security;

-- Cualquier visitante puede LEER la configuración (para que el home público funcione)
create policy "Lectura pública de site_settings"
on site_settings for select
to anon, authenticated
using (true);

-- Solo un usuario autenticado (el admin) puede modificarla
create policy "Solo admin puede escribir site_settings"
on site_settings for insert
to authenticated
with check (true);

create policy "Solo admin puede actualizar site_settings"
on site_settings for update
to authenticated
using (true)
with check (true);

-- 3) Bucket de almacenamiento para imágenes subidas desde el panel
insert into storage.buckets (id, name, public)
values ('site-images', 'site-images', true)
on conflict (id) do nothing;

-- Cualquiera puede VER las imágenes (son públicas, es un sitio web)
create policy "Lectura pública de imágenes"
on storage.objects for select
to anon, authenticated
using (bucket_id = 'site-images');

-- Solo un usuario autenticado puede subir/editar imágenes
create policy "Solo admin puede subir imágenes"
on storage.objects for insert
to authenticated
with check (bucket_id = 'site-images');

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
