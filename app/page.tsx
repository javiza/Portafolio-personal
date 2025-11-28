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
} from "react-icons/si";

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

      {/* ------------------------ HERO ------------------------ */}
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
          Ionic, React, Next.js, Docker, Linux y arquitectura de software
          robusta y escalable.
        </p>
      </section>

      {/* ------------------------ REDES ------------------------ */}
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
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.38-1.1 2.5-2.48 2.5S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v15h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.7-2.2 3.5-2.2 3.7 0 4.4 2.4 4.4 5.6V23h-4v-7.7c0-1.8 0-4-2.4-4-2.4 0-2.8 1.9-2.8 3.9V23h-4V8z" />
            </svg>
            LinkedIn
          </motion.a>
        </div>
      </section>

      {/* ------------------------ HABILIDADES ------------------------ */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="title-section mb-12">Habilidades Técnicas</h2>

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
            { icon: <SiMongodb />, name: "MongoDB" },
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

      {/* ------------------------ PROYECTOS ------------------------ */}
      <section className="px-8 py-20">
        <h2 className="title-section mb-12">Proyectos Destacados</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
         <motion.div whileHover={{ scale: 1.04 }} className="card flex flex-col">
  <h3 className="text-2xl font-semibold text-blue-600 dark:text-purple-300">
    Sistema de Condominio
  </h3>

  <p className="mt-3 text-gray-700 dark:text-gray-300">
    Control de accesos, QR dinámico y auditoría en vivo.
  </p>

  <a
    href="/proyecto_condominio"
    className="mt-5 inline-block px-5 py-2 bg-blue-600 text-white rounded-full 
               shadow-md hover:scale-105 transition-all text-center"
  >
    Ver Detalles →
  </a>
</motion.div>


          <motion.div whileHover={{ scale: 1.04 }} className="card">
            <h3 className="text-2xl font-semibold text-green-700 dark:text-green-300">
              API Rest NestJS
            </h3>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              CRUD profesional con autenticación JWT y validaciones.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} className="card">
            <h3 className="text-2xl font-semibold text-purple-700 dark:text-purple-300">
              Dashboard en tiempo real
            </h3>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              WebSockets, métricas en vivo y monitoreo avanzado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ------------------------ CONTACTO ------------------------ */}
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
              mensaje: form.mensaje.value,
            };

            const res = await fetch("/api/contacto", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            });

            alert(res.ok ? "Mensaje enviado!" : "Error al enviar.");
            form.reset();
          }}
        >
          <input
            name="nombre"
            type="text"
            placeholder="Tu nombre"
            required
            className="border p-3 rounded 
            dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />

          <input
            name="email"
            type="email"
            placeholder="Tu correo"
            required
            className="border p-3 rounded 
            dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />

          <textarea
            name="mensaje"
            placeholder="Mensaje..."
            rows={5}
            required
            className="border p-3 rounded 
            dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-full 
            font-semibold hover:scale-105 transition-all"
          >
            Enviar mensaje
          </button>
        </form>
      </section>

      {/* ------------------------ FOOTER ------------------------ */}
      <footer className="text-center py-10 text-gray-600 dark:text-purple-200">
        © {new Date().getFullYear()} Jonathan Bustos – Portafolio
      </footer>
    </main>
  );
}
