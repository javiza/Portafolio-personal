"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../lib/supabase/client";
import type { SiteSettings } from "../../types/settings";

const SECTION_LABELS: Record<string, string> = {
  about: "Sobre mí",
  services: "Servicios",
  stack: "Stack de Desarrollo",
  security: "Ciberseguridad",
  projects: "Proyectos",
  news: "Noticias",
  contact: "Contacto",
};

export default function AdminDashboard({
  initialSettings,
  userEmail,
}: {
  initialSettings: SiteSettings;
  userEmail: string;
}) {
  const router = useRouter();
  const supabase = createClient();

  const [settings, setSettings] = useState<SiteSettings>(initialSettings);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [uploading, setUploading] = useState<string | null>(null);

  function set<K extends keyof SiteSettings>(key: K, value: SiteSettings[K]) {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }

  async function uploadImage(file: File, label: string): Promise<string | null> {
    setUploading(label);
    const path = `${Date.now()}-${file.name}`;
    const { error } = await supabase.storage
      .from("site-images")
      .upload(path, file, { upsert: true });

    setUploading(null);

    if (error) {
      setMessage(`Error subiendo imagen: ${error.message}`);
      return null;
    }

    const { data } = supabase.storage.from("site-images").getPublicUrl(path);
    return data.publicUrl;
  }

  async function handleSave() {
    setSaving(true);
    setMessage(null);

    const { error } = await supabase
      .from("site_settings")
      .upsert({ id: 1, ...settings });

    setSaving(false);
    setMessage(error ? `Error al guardar: ${error.message}` : "Cambios guardados ✅");
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login/admin");
    router.refresh();
  }

  function moveSection(index: number, dir: -1 | 1) {
    const order = [...settings.section_order];
    const newIndex = index + dir;
    if (newIndex < 0 || newIndex >= order.length) return;
    [order[index], order[newIndex]] = [order[newIndex], order[index]];
    set("section_order", order);
  }

  return (
    <main className="min-h-screen px-6 py-10 max-w-4xl mx-auto text-foreground">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-blue-600 dark:text-purple-300">
            Panel de Administración
          </h1>
          <p className="text-sm text-gray-500">Sesión: {userEmail}</p>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 border border-red-400 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition"
        >
          Cerrar sesión
        </button>
      </div>

      {message && (
        <div className="card mb-6 text-center font-medium">{message}</div>
      )}

      {/* COLORES */}
      <section className="card mb-6 space-y-4">
        <h2 className="text-xl font-bold">🎨 Colores</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {(
            [
              ["primary_color", "Primario"],
              ["secondary_color", "Secundario"],
              ["background_light", "Fondo claro"],
              ["background_dark", "Fondo oscuro"],
            ] as const
          ).map(([key, label]) => (
            <label key={key} className="flex flex-col items-center gap-2 text-sm">
              {label}
              <input
                type="color"
                value={settings[key]}
                onChange={(e) => set(key, e.target.value)}
                className="w-16 h-10 cursor-pointer"
              />
            </label>
          ))}
        </div>
      </section>

      {/* TIPOGRAFÍA */}
      <section className="card mb-6 space-y-3">
        <h2 className="text-xl font-bold">🔤 Tipografía</h2>
        <select
          value={settings.font_family}
          onChange={(e) => set("font_family", e.target.value as SiteSettings["font_family"])}
          className="border p-3 rounded w-full sm:w-64"
        >
          <option value="geist">Geist (actual)</option>
          <option value="inter">Inter</option>
          <option value="poppins">Poppins</option>
          <option value="roboto">Roboto</option>
        </select>
      </section>

      {/* HERO */}
      <section className="card mb-6 space-y-3">
        <h2 className="text-xl font-bold">🏠 Portada (Hero)</h2>
        <input
          value={settings.hero_title}
          onChange={(e) => set("hero_title", e.target.value)}
          placeholder="Título principal"
          className="border p-3 rounded w-full"
        />
        <input
          value={settings.hero_subtitle}
          onChange={(e) => set("hero_subtitle", e.target.value)}
          placeholder="Subtítulo / especialización"
          className="border p-3 rounded w-full"
        />
      </section>

      {/* SOBRE MI */}
      <section className="card mb-6 space-y-3">
        <label className="flex items-center gap-2 font-semibold">
          <input
            type="checkbox"
            checked={settings.show_about}
            onChange={(e) => set("show_about", e.target.checked)}
          />
          Mostrar sección &quot;Sobre mí&quot;
        </label>
        <input
          value={settings.about_title}
          onChange={(e) => set("about_title", e.target.value)}
          placeholder="Título (ej: FullStack Developer)"
          className="border p-3 rounded w-full"
        />
        <textarea
          value={settings.about_text}
          onChange={(e) => set("about_text", e.target.value)}
          placeholder="Texto sobre ti"
          rows={4}
          className="border p-3 rounded w-full"
        />
        <input
          value={settings.about_highlight}
          onChange={(e) => set("about_highlight", e.target.value)}
          placeholder="Frase destacada (especialización actual)"
          className="border p-3 rounded w-full"
        />
      </section>

      {/* REDES */}
      <section className="card mb-6 space-y-3">
        <h2 className="text-xl font-bold">🔗 Redes</h2>
        <input
          value={settings.github_url}
          onChange={(e) => set("github_url", e.target.value)}
          placeholder="URL de GitHub"
          className="border p-3 rounded w-full"
        />
        <input
          value={settings.linkedin_url}
          onChange={(e) => set("linkedin_url", e.target.value)}
          placeholder="URL de LinkedIn"
          className="border p-3 rounded w-full"
        />
      </section>

      {/* BANNER / SLIDER */}
      <section className="card mb-6 space-y-3">
        <label className="flex items-center gap-2 font-semibold">
          <input
            type="checkbox"
            checked={settings.show_banner}
            onChange={(e) => set("show_banner", e.target.checked)}
          />
          Mostrar banner / slider de imágenes
        </label>

        {settings.banner_images.map((img, i) => (
          <div key={i} className="flex gap-2 items-center">
            <img src={img.url} alt="" className="w-16 h-10 object-cover rounded" />
            <input
              value={img.caption ?? ""}
              onChange={(e) => {
                const next = [...settings.banner_images];
                next[i] = { ...next[i], caption: e.target.value };
                set("banner_images", next);
              }}
              placeholder="Texto de la imagen (opcional)"
              className="border p-2 rounded flex-1"
            />
            <button
              onClick={() =>
                set(
                  "banner_images",
                  settings.banner_images.filter((_, idx) => idx !== i)
                )
              }
              className="text-red-500"
            >
              ✕
            </button>
          </div>
        ))}

        <input
          type="file"
          accept="image/*"
          disabled={uploading === "banner"}
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (!file) return;
            const url = await uploadImage(file, "banner");
            if (url) set("banner_images", [...settings.banner_images, { url }]);
            e.target.value = "";
          }}
        />
        {uploading === "banner" && <p className="text-sm">Subiendo imagen...</p>}
      </section>

      {/* NOTICIAS */}
      <section className="card mb-6 space-y-3">
        <label className="flex items-center gap-2 font-semibold">
          <input
            type="checkbox"
            checked={settings.show_news}
            onChange={(e) => set("show_news", e.target.checked)}
          />
          Mostrar sección de noticias
        </label>

        {settings.news.map((n, i) => (
          <div key={i} className="border p-3 rounded space-y-2">
            <input
              value={n.title}
              onChange={(e) => {
                const next = [...settings.news];
                next[i] = { ...next[i], title: e.target.value };
                set("news", next);
              }}
              placeholder="Título de la noticia"
              className="border p-2 rounded w-full"
            />
            <textarea
              value={n.content}
              onChange={(e) => {
                const next = [...settings.news];
                next[i] = { ...next[i], content: e.target.value };
                set("news", next);
              }}
              placeholder="Contenido"
              rows={2}
              className="border p-2 rounded w-full"
            />
            <button
              onClick={() => set("news", settings.news.filter((_, idx) => idx !== i))}
              className="text-red-500 text-sm"
            >
              Eliminar noticia
            </button>
          </div>
        ))}

        <button
          onClick={() =>
            set("news", [...settings.news, { title: "", content: "" }])
          }
          className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm"
        >
          + Agregar noticia
        </button>
      </section>

      {/* VISIBILIDAD Y ORDEN DE SECCIONES */}
      <section className="card mb-6 space-y-3">
        <h2 className="text-xl font-bold">📑 Secciones del Home</h2>
        <p className="text-sm text-gray-500">
          Actívalas o desactívalas, y usa las flechas para cambiar el orden en
          que aparecen en la página.
        </p>
        <div className="space-y-2">
          {settings.section_order.map((key, i) => (
            <div key={key} className="flex items-center gap-3">
              <button onClick={() => moveSection(i, -1)} className="px-2">↑</button>
              <button onClick={() => moveSection(i, 1)} className="px-2">↓</button>
              <label className="flex items-center gap-2 flex-1">
                <input
                  type="checkbox"
                  checked={
                    settings[
                      (`show_${key}` as unknown) as keyof SiteSettings
                    ] as boolean
                  }
                  onChange={(e) =>
                    set(
                      (`show_${key}` as unknown) as keyof SiteSettings,
                      e.target.checked as SiteSettings[keyof SiteSettings]
                    )
                  }
                />
                {SECTION_LABELS[key]}
              </label>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <section className="card mb-6 space-y-3">
        <h2 className="text-xl font-bold">🦶 Footer</h2>
        <input
          value={settings.footer_text}
          onChange={(e) => set("footer_text", e.target.value)}
          placeholder="Texto del footer"
          className="border p-3 rounded w-full"
        />
      </section>

      <div className="flex justify-center">
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-10 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all disabled:opacity-60"
        >
          {saving ? "Guardando..." : "Guardar cambios"}
        </button>
      </div>
    </main>
  );
}
