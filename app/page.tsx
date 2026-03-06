"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  SiNextdotjs,
  SiReact,
  SiNestjs,
  SiPostgresql,
  SiAngular,
  SiDocker,
  SiLinux,
  SiGit,
  SiTypescript,
  SiIonic,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiSwagger,
  SiOwasp
} from "react-icons/si";

import { MdSecurity } from "react-icons/md";
import { FaBug } from "react-icons/fa";

import BackgroundParticles from "./components/BackgroundParticles";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <BackgroundParticles />

      {/* BOTÓN DE TEMA */}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="fixed top-5 right-5 p-3 rounded-full shadow-lg 
        bg-white dark:bg-[#160b34]
        border border-gray-300 dark:border-purple-700
        text-gray-900 dark:text-purple-200
        hover:scale-110 transition-all z-50"
      >
        {theme === "light" ? "🌙" : "✨"}
      </button>

      {/* HERO */}
      <section className="flex flex-col items-center text-center pt-24 px-6 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.65 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/foto.jpg"
            alt="Jonathan"
            width={180}
            height={180}
            className="rounded-full shadow-xl border-4 border-purple-300 dark:border-purple-800"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="title-section"
        >
          Jonathan Bustos Ramos
        </motion.h1>

        <p className="text-lg max-w-2xl text-gray-700 dark:text-gray-300">
          Full Stack Developer especializado en NestJS, PostgreSQL, Angular,
          Ionic, React, Next.js, Docker y Linux.  
          Actualmente especializándome en **Ciberseguridad y Pentesting Web / API**.
        </p>
      </section>

      {/* REDES */}
      <section className="mt-16 flex flex-col items-center gap-6 px-6">
        <h2 className="title-section text-3xl">Redes Profesionales</h2>

        <div className="flex flex-wrap justify-center gap-6">

          <motion.a
            href="https://github.com/javiza"
            target="_blank"
            whileHover={{ scale: 1.08 }}
            className="flex items-center gap-3 px-6 py-3 
            bg-gray-900 dark:bg-gray-700 text-white 
            rounded-full shadow-lg"
          >
            <SiGit className="text-2xl" /> GitHub
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/jonathan-bustos-r"
            target="_blank"
            whileHover={{ scale: 1.08 }}
            className="flex items-center gap-3 px-6 py-3 
            bg-blue-600 text-white rounded-full shadow-lg"
          >
            LinkedIn
          </motion.a>

        </div>
      </section>

      {/* HABILIDADES FULLSTACK */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="title-section mb-12">Stack de Desarrollo</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { icon: <SiNextdotjs />, name: "NextJS" },
            { icon: <SiReact />, name: "React" },
            { icon: <SiNestjs />, name: "NestJS" },
            { icon: <SiPostgresql />, name: "PostgreSQL" },
            { icon: <SiAngular />, name: "Angular" },
            { icon: <SiIonic />, name: "Ionic" },
            { icon: <SiDocker />, name: "Docker" },
            { icon: <SiLinux />, name: "Linux" },
            { icon: <SiGit />, name: "Git" },
            { icon: <SiTypescript />, name: "TypeScript" },
            { icon: <SiExpress />, name: "Express" },
            { icon: <SiMongodb />, name: "MongoDB" }
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="card flex flex-col items-center gap-2"
            >
              <div className="text-4xl text-blue-600 dark:text-purple-300">
                {skill.icon}
              </div>

              <p className="font-semibold text-gray-800 dark:text-purple-200">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HABILIDADES CIBERSEGURIDAD */}
      <section className="px-8 pb-20 max-w-6xl mx-auto">
        <h2 className="title-section mb-12">Ciberseguridad</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { icon: <SiOwasp />, name: "OWASP Top 10" },
            { icon: <FaBug />, name: "SQL Injection" },
            { icon: <FaBug />, name: "Cross Site Scripting" },
            { icon: <MdSecurity />, name: "Broken Access Control" },
            { icon: <MdSecurity />, name: "API Security Testing" },
            { icon: <MdSecurity />, name: "JWT Security" },
            { icon: <SiPostman />, name: "Postman" },
            { icon: <SiSwagger />, name: "Swagger / OpenAPI" }
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="card flex flex-col items-center gap-2"
            >
              <div className="text-4xl text-red-500">
                {skill.icon}
              </div>

              <p className="font-semibold text-gray-800 dark:text-purple-200">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="px-8 py-20">
        <h2 className="title-section mb-12">Proyectos Destacados</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <motion.div whileHover={{ scale: 1.04 }} className="card">
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-purple-300">
              Sistema de Condominio
            </h3>

            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Control de accesos con QR dinámico, auditoría en tiempo real y panel administrativo.
            </p>

            <a
              href="/proyecto_condominio"
              className="mt-5 inline-block px-5 py-2 bg-blue-600 text-white rounded-full"
            >
              Ver Detalles →
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} className="card">
            <h3 className="text-2xl font-semibold text-green-600">
              API REST NestJS
            </h3>

            <p className="mt-3 text-gray-700 dark:text-gray-300">
              API profesional con autenticación JWT, validaciones y arquitectura modular.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} className="card">
            <h3 className="text-2xl font-semibold text-purple-600">
              Dashboard Tiempo Real
            </h3>

            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Dashboard con WebSockets y métricas en vivo.
            </p>
          </motion.div>

        </div>
      </section>

      {/* LABORATORIO DE SEGURIDAD */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="title-section mb-12">Laboratorio de Seguridad</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <motion.div whileHover={{ scale: 1.04 }} className="card">
            <h3 className="text-xl font-semibold text-red-500">
              SQL Injection Lab
            </h3>

            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Pruebas de explotación de SQL Injection y mitigación con prepared statements.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} className="card">
            <h3 className="text-xl font-semibold text-yellow-500">
              Cross Site Scripting
            </h3>

            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Análisis de XSS almacenado y reflejado en aplicaciones web.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} className="card">
            <h3 className="text-xl font-semibold text-purple-500">
              API Security Testing
            </h3>

            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Pruebas de autenticación JWT y vulnerabilidades IDOR.
            </p>
          </motion.div>

        </div>
      </section>

      {/* CONTACTO */}
      <section className="px-8 py-20 max-w-3xl mx-auto">
        <h2 className="title-section mb-10">Contacto</h2>

        <form
          className="card flex flex-col gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;

            const data = {
              nombre: form.nombre.value,
              email: form.email.value,
              mensaje: form.mensaje.value
            };

            const res = await fetch("/api/contacto", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data)
            });

            alert(res.ok ? "Mensaje enviado!" : "Error al enviar.");
            form.reset();
          }}
        >
          <input name="nombre" placeholder="Tu nombre" required className="border p-3 rounded"/>
          <input name="email" type="email" placeholder="Tu correo" required className="border p-3 rounded"/>
          <textarea name="mensaje" rows={5} placeholder="Mensaje..." required className="border p-3 rounded"></textarea>

          <button className="px-6 py-3 bg-blue-600 text-white rounded-full">
            Enviar mensaje
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-600 dark:text-purple-200">
        © {new Date().getFullYear()} Jonathan Bustos – Portafolio
      </footer>

    </main>
  );
}