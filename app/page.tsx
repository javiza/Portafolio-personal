"use client";

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

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      {/* ------------------------ HERO REDISEÑADO ------------------------ */}
      <section className="flex flex-col items-center text-center pt-20 px-6 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Image
            src="/foto.jpg"
            alt="Jonathan"
            width={180}
            height={180}
            className="rounded-full shadow-xl border-4 border-white"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-blue-700 drop-shadow-md"
        >
          Jonathan Bustos Ramos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl mt-2 text-gray-700 max-w-2xl"
        >
          Full Stack Developer especializado en NestJS, PostgreSQL, Angular,
          Ionic, React, Next.js, Docker, Linux y arquitectura de software
          robusta y escalable.
        </motion.p>
      </section>

      {/* ------------------------ REDES PROFESIONALES ------------------------ */}
      <section className="flex flex-col items-center text-center py-12 gap-6">
        <h2 className="text-4xl font-bold">Redes Profesionales</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {/* GitHub */}
          <motion.a
            href="https://github.com/javiza"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold shadow-lg hover:bg-black transition"
          >
            <SiGit className="text-2xl" />
            GitHub
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/jonathan-bustos-r"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.7-2.2 3.5-2.2 3.7 0 4.4 2.4 4.4 5.6V23h-4v-7.7c0-1.8 0-4-2.4-4-2.4 0-2.8 1.9-2.8 3.9V23h-4V8z" />
            </svg>
            LinkedIn
          </motion.a>
        </div>
      </section>

      {/* ------------------------ GITHUB STATS ------------------------ */}
      <section className="py-10 flex flex-col items-center text-center">
  <h2 className="text-4xl font-bold mb-6">Estadísticas de GitHub</h2>

  <div className="flex flex-col items-center gap-6">

    <Image
      src="https://github-readme-stats-git-master-jstrieb.vercel.app/api?username=javiza&show_icons=true&theme=blueberry"
      alt="GitHub Stats"
      width={500}
      height={200}
      className="rounded-lg shadow-lg"
    />

    <Image
      src="https://github-readme-streak-stats.herokuapp.com/?user=javiza&theme=blueberry"
      alt="GitHub Streak"
      width={500}
      height={200}
      className="rounded-lg shadow-lg"
    />

  </div>
</section>


      {/* ------------------------ HABILIDADES (tarjetas con iconos) ------------------------ */}
      <section className="px-8 py-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Habilidades Técnicas
        </h2>

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
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer border border-gray-200"
            >
              <div className="text-4xl text-blue-600 mb-2">{skill.icon}</div>
              <p className="text-lg font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ------------------------ PROYECTOS MEJORADOS ------------------------ */}
      <section className="px-8 py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Proyectos Destacados
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* PROYECTO 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
          >
            <h3 className="text-2xl font-semibold text-blue-600">
              Sistema de Condominio
            </h3>
            <p className="mt-3 text-gray-700">
              Control de accesos, QR dinámico, auditoría, guardias y dashboard
              en vivo.
            </p>

            <motion.a
              href="/proyecto_condominio"
              whileHover={{ scale: 1.1 }}
              className="inline-block mt-5 px-6 py-2 bg-blue-600 text-white rounded-full shadow-md"
            >
              Ver más
            </motion.a>
          </motion.div>

          {/* PROYECTO 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
          >
            <h3 className="text-2xl font-semibold text-green-700">
              API Rest NestJS
            </h3>
            <p className="mt-3 text-gray-700">
              Autenticación JWT, CRUD profesional, validaciones, excepciones y
              auditoría.
            </p>
          </motion.div>

          {/* PROYECTO 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
          >
            <h3 className="text-2xl font-semibold text-purple-700">
              Dashboard en tiempo real
            </h3>
            <p className="mt-3 text-gray-700">
              WebSockets, métricas de tráfico, monitoreo en vivo estilo admin
              panel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ------------------------ CONTACTO ------------------------ */}
      <section className="px-8 py-20 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Contacto</h2>

        <form
          className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4"
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
            className="border p-3 rounded"
          />
          <input
            name="email"
            type="email"
            placeholder="Tu correo"
            required
            className="border p-3 rounded"
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje..."
            rows={5}
            required
            className="border p-3 rounded"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:scale-105 transition-all"
          >
            Enviar mensaje
          </button>
        </form>
      </section>

      {/* ------------------------ FOOTER ------------------------ */}
      <footer className="text-center py-8 text-gray-600">
        <p>© {new Date().getFullYear()} Jonathan Bustos – Portafolio</p>
      </footer>
    </main>
  );
}
