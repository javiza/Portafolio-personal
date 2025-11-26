"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProyectoCondominio() {
  return (
    <>
      {/* NAVBAR SUPERIOR */}
      <nav className="w-full bg-white shadow-md py-4 px-8 sticky top-0 z-50 flex justify-between items-center">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl font-bold text-blue-700">
          GestCond
        </motion.h1>

        <Link
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:scale-105 transition-all"
        >
          ← Volver al Inicio
        </Link>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="min-h-screen bg-gray-100 px-8 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-blue-700 text-center mb-10"
        >
          Sistema de Condominio Habitacional
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto text-center text-lg text-gray-700 leading-relaxed"
        >
          Proyecto completo desarrollado para la gestión de un condominio habitacional,
          incluyendo control de acceso por QR, registro de visitas, administración de guardias,
          gestión de residentes, auditoría de datos y más. Frontend en Angular/Ionic y Backend con
          NestJS, TypeORM y PostgreSQL.
        </motion.p>

        {/* BOTÓN */}
        <div className="flex justify-center mt-10">
          <motion.a
            href="https://front-end-gestcond.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg"
          >
            Ver Proyecto en Vivo
          </motion.a>
        </div>

        {/* SECCIONES */}
        <section className="max-w-4xl mx-auto mt-16 grid gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-600">Tecnologías usadas</h2>
            <p className="mt-3 text-gray-700">
              NestJS, PostgreSQL, TypeORM, Angular/Ionic, JWT, WebSockets, Docker.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-600">Usuarios de prueba</h2>
            <ul className="mt-3 text-gray-700 list-disc list-inside">
              <li><strong>Administrador:</strong> admin@correo.cl — Admin123!</li>
              <li><strong>Guardia:</strong> usuario@correo.cl — Usuario123!</li>
              <li><strong>Locatario:</strong> locatario@correo.cl — Locatario123!</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-600">Funcionalidades</h2>
            <ul className="mt-3 text-gray-700 list-disc list-inside">
              <li>Autorización de visitas con QR dinámico</li>
              <li>Dashboard en tiempo real para guardias</li>
              <li>Gestión de residentes, casas y locatarios</li>
              <li>Control de contratistas y personal interno</li>
              <li>Sistema de auditoría de eventos</li>
              <li>Registro de ingresos y salidas</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
