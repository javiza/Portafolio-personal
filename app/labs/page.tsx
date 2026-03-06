"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function LabsPage() {
  const labs = [
    {
      title: "SQL Injection Lab",
      desc: "Explota una vulnerabilidad SQL Injection en un login vulnerable.",
      link: "/labs/sql-injection",
    },
    {
      title: "XSS Playground",
      desc: "Prueba ataques Cross-Site Scripting.",
      link: "/labs/xss",
    },
    {
      title: "JWT Attack Lab",
      desc: "Manipula tokens JWT para escalar privilegios.",
      link: "/labs/jwt",
    },
    {
      title: "Broken Access Control",
      desc: "Prueba vulnerabilidades IDOR en APIs.",
      link: "/labs/access-control",
    },
  ];

  return (
    <main className="min-h-screen px-10 py-20 max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold mb-12 text-center">
        Security Playground
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {labs.map((lab, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="card p-6"
          >
            <h2 className="text-2xl font-semibold">{lab.title}</h2>

            <p className="mt-3 text-gray-600">
              {lab.desc}
            </p>

            <Link
              href={lab.link}
              className="inline-block mt-5 px-4 py-2 bg-purple-600 text-white rounded"
            >
              Abrir laboratorio →
            </Link>
          </motion.div>
        ))}
      </div>

    </main>
  );
}