"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BackgroundParticles from "../components/BackgroundParticles";

export default function ProyectoCondominio() {
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
          GestCond
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
          Sistema de Condominio Habitacional
        </motion.h1>

        {/* DESCRIPCIÓN PRINCIPAL */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto text-center text-lg text-gray-700 
          dark:text-gray-300 leading-relaxed"
        >
          Solución completa para gestión de condominios con control de acceso por
          QR, registro de visitas, auditoría, administración de residentes,
          dashboard en tiempo real y más.  
          Desarrollado con Angular/Ionic, NestJS, TypeORM y PostgreSQL.
        </motion.p>

        {/* BOTÓN PROYECTO EN VIVO */}
        <div className="flex justify-center mt-10">
          <motion.a
            href="https://front-end-gestcond.onrender.com"
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
              NestJS, PostgreSQL, TypeORM, Angular/Ionic, JWT, WebSockets, Docker.
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
              Usuarios de Prueba
            </h2>
            <ul className="mt-3 text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li><strong>Administrador:</strong> admin@correo.cl — Admin123!</li>
              <li><strong>Guardia:</strong> usuario@correo.cl — Usuario123!</li>
              <li><strong>Locatario:</strong> locatario@correo.cl — Locatario123!</li>
            </ul>
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
              <li>Autorización de visitas con QR dinámico</li>
              <li>Dashboard en tiempo real para guardias</li>
              <li>Gestión de residentes, casas y locatarios</li>
              <li>Control de contratistas y personal interno</li>
              <li>Sistema de auditoría de eventos</li>
              <li>Registro de ingresos y salidas</li>
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
