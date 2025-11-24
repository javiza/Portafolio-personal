"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      {/* HERO */}
<section className="flex flex-col items-center text-center py-16 px-6 gap-4">
        <Image
          src="/foto.jpg" // luego te digo dónde guardarla
          alt="Foto de Jonathan"
          width={150}
          height={150}
          className="rounded-full shadow-lg mb-4"
        />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold text-blue-700 drop-shadow-md"
        >
          Jonathan Bustos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl mt-4 text-gray-700"
        >
          Full Stack Developer | NestJS | PostgreSQL | Angular | Ionic | React |
          NextJS | Docker | Linux | Oracle | MongoDB
        </motion.p>
        {/* <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg"
        >
          Descargar CV
        </motion.button> */}
      </section>

      {/* SOBRE MI */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 gap-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-6"
        >
          Sobre mí
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg leading-relaxed text-gray-700"
        >
          Técnico Informático con experiencia en arquitectura de software,
          desarrollo backend con NestJS, Express y modelado de bases de datos en
          PostgreSQL. Lenguajes de programacion: TypeScript, JavaScript, Python
          y SQL. Conocimientos en desarrollo frontend con Angular, Ionic, React
          y NextJS. Manejo de herramientas como Docker, Git y entornos Linux.
          Apasionado por crear sistemas robustos, escalables y seguros.
        </motion.p>
      </section>

      {/* PROYECTOS */}
      <section className="px-8 py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Proyectos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
          >
            <h3 className="text-2xl font-semibold text-blue-600">
              Sistema de Condominio
            </h3>
            <p className="mt-3 text-gray-700">
              Control de acceso, QR dinámico, guardias, visitas y auditoría.
            </p>

            {/* Botón */}
            <motion.a
              href="/proyecto_condominio"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-5 px-6 py-2 bg-blue-600 text-white rounded-full shadow-md"
            >
              Ver más
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-8 py-10 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Habilidades</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "NextJS",
            "React",
            "Express",
            "NestJS",
            "PostgreSQL",
            "Angular",
            "Ionic",
            "Docker",
            "Linux",
            "Git",
            "TypeScript",
          ].map((skill, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium shadow-sm"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>
      {/* CONTACTO */}
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

      if (res.ok) {
        alert("Mensaje enviado correctamente 😎📬");
        form.reset();
      } else {
        alert("Hubo un error al enviar el mensaje.");
      }
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
      placeholder="Escribe tu mensaje..."
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


      {/* FOOTER */}
      <footer className="text-center py-8 text-gray-600">
        <p>© {new Date().getFullYear()} Jonathan Bustos – Portafolio</p>
      </footer>
    </main>
  );
}
