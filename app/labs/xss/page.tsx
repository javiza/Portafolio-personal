"use client";

import { useState } from "react";

export default function XSSLab() {

  const [input, setInput] = useState("");

  return (
    <main className="min-h-screen px-10 py-20 max-w-3xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        XSS Playground
      </h1>

      <p className="mb-6">
        Intenta ejecutar scripts en el input.
      </p>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-gray-300 dark:border-purple-700/60 bg-white dark:bg-[#0f0a24] text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 p-3 rounded w-full"
        placeholder="Escribe algo..."
      />

      <div
        className="border mt-6 p-6"
        dangerouslySetInnerHTML={{ __html: input }}
      />

      <p className="mt-10 text-gray-500">
        prueba:  
        <code>{"<script>alert('XSS')</script>"}</code>
      </p>

    </main>
  );
}