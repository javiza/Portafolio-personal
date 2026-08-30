"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BackgroundParticles from "../components/BackgroundParticles";

export default function ProyectoTurismo() {
  return (
    <>
      <BackgroundParticles />

      {/* NAVBAR UNIFICADO */}
      <nav className="backdrop-blur-xl bg-white/40 dark:bg-black/40 
      border-b border-gray-300 dark:border-purple-900
      sticky top-0 z-50 py-4 px-8 flex justify-between items-center">

        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-blue-700 dark:text-purple-200"
        >
          Agencia de Turismo
        </motion.h1>

        <Link
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded-full 
          font-semibold shadow hover:scale-105 transition-all"
        >
          ← Volver al Inicio
        </Link>
      </nav>

      {/* CONTENIDO */}
      <main className="min-h-screen px-8 py-20 text-foreground">

        {/* TÍTULO PRINCIPAL */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-5xl font-extrabold title-section mb-10"
        >
          Plataforma Web para Agencia de Turismo
        </motion.h1>

        {/* DESCRIPCIÓN PRINCIPAL */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto text-center text-lg text-gray-700 
          dark:text-gray-300 leading-relaxed"
        >
          Sitio web comercial para una agencia de turismo, con catálogo de
          destinos, paquetes y ofertas, gestión de reservas y un panel
          administrativo para que la agencia publique y controle su propio
          contenido sin depender de un desarrollador.
        </motion.p>

        {/* BOTÓN PROYECTO EN VIVO */}
        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          <motion.a
            href="https://turismo-frontend-hd69.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 
            bg-blue-600 text-white font-semibold rounded-full 
            shadow-lg hover:shadow-blue-500/40 transition-all"
          >
            Ver Proyecto en Vivo 🚀
          </motion.a>

          <motion.a
            href="https://turismo-frontend-hd69.onrender.com/login/admin"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 
            border border-blue-600 text-blue-600 dark:text-purple-200 dark:border-purple-400
            font-semibold rounded-full 
            hover:bg-blue-600 hover:text-white transition-all"
          >
            Ver Panel de Administración 🔐
          </motion.a>
        </div>

        {/* SECCIONES */}
        <section className="max-w-4xl mx-auto mt-20 grid gap-10">

          {/* TARJETA 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-6"
          >
            <h2 className="text-2xl font-bold text-blue-600 dark:text-purple-300">
              Tecnologías Usadas
            </h2>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Next.js, React, TypeScript, Node.js, despliegue en Render,
              gestión de imágenes con Cloudinary.
            </p>
          </motion.div>

          {/* TARJETA 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-6"
          >
            <h2 className="text-2xl font-bold text-blue-600 dark:text-purple-300">
              Acceso de Prueba
            </h2>
            <ul className="mt-3 text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li><strong>Usuario:</strong> administrador</li>
              <li><strong>Correo:</strong> admin@turismo.cl</li>
              <li><strong>Contraseña:</strong> 12345678</li>
            </ul>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              Ingresa desde el botón &quot;Ver Panel de Administración&quot; para
              probar la gestión de destinos, paquetes y ofertas.
            </p>
          </motion.div>

          {/* TARJETA 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-6"
          >
            <h2 className="text-2xl font-bold text-blue-600 dark:text-purple-300">
              Funcionalidades
            </h2>
            <ul className="mt-3 text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li>Catálogo público de destinos, paquetes y ofertas</li>
              <li>Reserva y consulta de disponibilidad por destino</li>
              <li>Registro e inicio de sesión de clientes</li>
              <li>Panel administrativo para publicar contenido propio</li>
              <li>Sección institucional: misión, visión y valores</li>
              <li>Contacto directo con proveedores turísticos</li>
            </ul>
          </motion.div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-600 dark:text-purple-300">
        © {new Date().getFullYear()} Jonathan Bustos – Portafolio
      </footer>
    </>
  );
}
