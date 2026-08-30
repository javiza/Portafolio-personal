import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyecto: Agencia de Turismo",
  description:
    "Sitio web comercial para agencia de turismo con catálogo de destinos, paquetes, ofertas, reservas online y panel administrativo. Desarrollado con Next.js.",
  alternates: {
    canonical: "/proyecto_turismo",
  },
};

export default function ProyectoTurismoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
