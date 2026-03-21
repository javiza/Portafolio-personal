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
  SiOwasp,
  SiPython,
   
   SiRender,
   SiKubernetes,
   SiApachespark,
   SiApachekafka,
   SiJavascript,
   SiNodedotjs,
} from "react-icons/si";
import Link from "next/link";
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
            src="/foto.png"
            alt="Jonathan"
            width={300}
            height={250}
            className=" shadow-xl border-4 dark:border-purple-800"
          />
        </motion.div>

 

  {/* NOMBRE */}
  <motion.h1
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-2xl sm:text-3xl font-semibold text-white-800 dark:text-dark-200"
  >
    Jonathan Bustos Ramos
  </motion.h1>

  {/* TITULO PRINCIPAL */}
  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold max-w-3xl bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text">
    Desarrollador Full Stack
  </h2>

  {/* LINEA MODERNA */}
<div className="w-24 sm:w-40 md:w-56 lg:w-72 h-1 bg-gradient-to-r from-blue-600 to-purple-500 rounded-full mx-auto"></div>
  {/* ESPECIALIZACIÓN */}
  <p className="text-lg sm:text-xl font-bold text-white-600 dark:text-dark-300">
    🚀 Ciberseguridad & Pentesting Web / API
  </p>

  {/* TERMINAL EFFECT */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
    className="mt-4 space-y-1"
  >
    <p className="font-mono text-green-500">
      $ initializing_security_modules...
    </p>
    <p className="font-mono text-green-500">
      $ scanning_web_applications...
    </p>
    <p className="font-mono text-green-500">
      $ pentesting_mode_enabled ✓
    </p>
  </motion.div>

  {/* BOTONES */}
  <div className="flex gap-4 mt-6 flex-wrap justify-center">
    <a
      href="#proyectos"
      className="px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:scale-105 transition"
    >
      Ver Proyectos
    </a>

     <a
            href="#contacto"
            className="px-6 py-3 border border-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition"
          >
            Contactar
          </a>
  </div>

</section>
{/* SOBRE MI PRO */}
<section className="px-8 py-20 max-w-6xl mx-auto">
  <h2 className="title-section mb-12 text-center">
    <strong>Sobre mí</strong>
  </h2>

  <div className="grid md:grid-cols-2 gap-10">

    {/* COLUMNA IZQUIERDA */}
    <div className="card space-y-6">
      <h3 className="text-2xl font-semibold">
        FullStack Developer
      </h3>

      <p className="text-gray-600 dark:text-dark-300 leading-relaxed">
        Soy desarrollador Full Stack con experiencia en construcción de aplicaciones web modernas, 
        APIs escalables y despliegues en entornos cloud. Me enfoco en escribir código limpio, 
        seguro y mantenible, integrando buenas prácticas de desarrollo y arquitectura.
      </p>

      <p className="text-gray-600 dark:text-dark-300 leading-relaxed">
        Actualmente estoy especializándome en{" "}
        <span className="font-bold text-blue-600 dark:text-dark-300">
          Ciberseguridad y Pentesting Web / API
        </span>, 
        fortaleciendo habilidades en análisis de vulnerabilidades y seguridad ofensiva.
      </p>

      {/* HABILIDADES BLANDAS */}
      <div>
        <h4 className="font-semibold mb-2">Habilidades blandas</h4>
        <ul className="list-disc list-inside text-gray-600 dark:text-dark-300 space-y-1">
          <li>Resolución de problemas</li>
          <li>Pensamiento analítico</li>
          <li>Aprendizaje continuo</li>
          <li>Trabajo en equipo</li>
          <li>Comunicación efectiva</li>
          <li>Adaptabilidad a nuevas tecnologías</li>
        </ul>
      </div>
    </div>

    {/* COLUMNA DERECHA */}
    <div className="card space-y-4">
      <h4 className="text-xl font-semibold mb-2">
        Stack técnico
      </h4>

      <div className="space-y-3 text-gray-600 dark:text-dark-300">

        <p><strong>Lenguajes:</strong> JavaScript, TypeScript, Python, Java, C#</p>

        <p><strong>Frontend:</strong> React, Next.js, Angular, Ionic</p>

        <p><strong>Backend:</strong> Node.js, NestJS, Express</p>

        <p><strong>Bases de datos:</strong> PostgreSQL, MongoDB, Oracle SQL, PL/SQL</p>

        <p><strong>DevOps:</strong> Docker, Kubernetes, Linux, Git</p>

        <p><strong>Cloud:</strong> Azure, Oracle Cloud, Render</p>

        <p><strong>Big Data:</strong> Apache Spark, Apache Kafka</p>

      </div>

      {/* EXTRA DESTACADO */}
      <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-600/10 to-purple-500/10 border border-purple-500/20">
        <p className="text-sm font-medium text-gray-700 dark:text-dark-300">
          Enfoque actual:
        </p>
        <p className="font-bold text-blue-600 dark:text-dark-300">
          Seguridad en aplicaciones web, APIs y testing ofensivo
        </p>
      </div>
      <h2  className="text-xl font-semibold mb-2">Redes Profesionales</h2>

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
    </div>

  </div>
</section>

     

     {/* HABILIDADES FULLSTACK */}
<section className="px-8 py-20 max-w-6xl mx-auto">
  <h2 className="title-section mb-12">Stack de Desarrollo</h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
    {[
      // Frontend
      { icon: <SiNextdotjs />, name: "NextJS" },
      { icon: <SiReact />, name: "React" },
      { icon: <SiAngular />, name: "Angular" },
      { icon: <SiIonic />, name: "Ionic" },

      // Backend
      { icon: <SiNestjs />, name: "NestJS" },
      { icon: <SiExpress />, name: "Express" },
      { icon: <SiNodedotjs />, name: "Node.js" },

    
      // Bases de datos
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiMongodb />, name: "MongoDB" },

      // DevOps / Sistemas
      { icon: <SiDocker />, name: "Docker" },
      { icon: <SiKubernetes />, name: "Kubernetes" },
      { icon: <SiLinux />, name: "Linux" },
      { icon: <SiGit />, name: "Git" },

      

      // Big Data
      { icon: <SiApachespark />, name: "Apache Spark" },
      { icon: <SiApachekafka />, name: "Apache Kafka" },

    ].map((skill, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.08, rotate: 1 }}
        className="flex flex-col items-center gap-2 
bg-white dark:bg-[#160b34] 
border border-gray-200 dark:border-purple-700 
shadow-md hover:shadow-xl hover:-translate-y-1
transition duration-300 rounded-xl p-4"
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
            { icon: <SiSwagger />, name: "Swagger / OpenAPI" },
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
className="flex flex-col items-center gap-2 
bg-white dark:bg-[#160b34] 
border border-gray-200 dark:border-purple-700 
shadow-md hover:shadow-xl hover:-translate-y-1
transition duration-300 rounded-xl p-4"            >
              <div className="text-4xl text-red-500">{skill.icon}</div>

              <p className="font-semibold text-gray-800 dark:text-gray-200">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="px-8 py-10">
        <h2 className="title-section mb-12">Proyectos Destacados</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <motion.div whileHover={{ scale: 1.04 }} className="card">
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-dark-300">
              Sistema de Condominio
            </h3>

            <p className="mt-3 text-gray-700 dark:text-dark-300">
              Control de accesos con QR dinámico, auditoría en tiempo real y
              panel administrativo.
            </p>

            <Link
              href="/proyecto_condominio"
              className="mt-5 inline-block px-5 py-2 bg-blue-600 text-white rounded-full"
            >
              Ver Detalles →
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} className="card">
            <h3 className="text-2xl font-semibold text-green-600">
              API REST NestJS
            </h3>

            <p className="mt-3 text-gray-700 dark:text-dark-300">
              API profesional con autenticación JWT, validaciones y arquitectura
              modular.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} className="card">
            <h3 className="text-2xl font-semibold text-purple-600">
              Dashboard Tiempo Real
            </h3>

            <p className="mt-3 text-gray-700 dark:text-dark-300">
              Dashboard con WebSockets y métricas en vivo.
            </p>
          </motion.div>
        </div>
      </section>


      {/* CONTACTO */}
      <section id="contacto" className="px-8 py-20 max-w-3xl mx-auto">
        <h2 className="title-section mb-12">Contacto:</h2>
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
            rows={5}
            placeholder="Mensaje..."
            required
            className="border p-3 rounded"
          ></textarea>

          <button className="px-6 py-3 bg-blue-600 text-white rounded-full">
            Enviar mensaje
          </button>
        </form>
      </section>

   {/* FOOTER */}
<footer className="mt-20 w-full bg-gray-900 text-white py-6 px-6">
  <div className="max-w-6xl mx-auto relative flex items-center justify-center">

    {/* TEXTO CENTRADO */}
    <p className="text-sm text-gray-400 text-center">
      © {new Date().getFullYear()} Jonathan Bustos · Full Stack · Seguridad Web
    </p>

    {/* BOTÓN A LA DERECHA */}
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="absolute right-0 bg-blue-600 hover:bg-blue-700 p-3 rounded-full shadow-lg transition"
    >
      ↑
    </button>

  </div>
</footer>
    </main>
  );
}
