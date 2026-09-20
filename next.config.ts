/** @type {import('next').NextConfig} */
const nextConfig = {
  
    images: {
  remotePatterns: [
    { protocol: "https", hostname: "github-readme-stats.vercel.app" },
    { protocol: "https", hostname: "streak-stats.demolab.com" },
    // Imágenes subidas desde el panel admin (logo, favicon, banners,
    // fondos) se guardan en Supabase Storage. Sin este dominio
    // autorizado, next/image las bloquea y se ven como imagen rota.
    { protocol: "https", hostname: "*.supabase.co" },
  ],


  },

};

module.exports = nextConfig;
