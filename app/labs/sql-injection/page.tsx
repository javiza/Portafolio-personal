"use client";

import { useState } from "react";

export default function SQLLab() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [result, setResult] = useState("");

  const login = async () => {
    const res = await fetch("/api/labs/sql", {
      method: "POST",
      body: JSON.stringify({ user, pass }),
    });

    const data = await res.json();

    setResult(data.success ? "Login bypassed!" : "Login failed");
  };

  return (
    <main className="min-h-screen px-10 py-20 max-w-3xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        SQL Injection Lab
      </h1>

      <p className="mb-6 text-gray-600">
        Intenta bypass del login usando SQL Injection.
      </p>

      <div className="flex flex-col gap-4">

        <input
          placeholder="usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="border p-3 rounded"
        />

        <input
          placeholder="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="border p-3 rounded"
        />

        <button
          onClick={login}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Login
        </button>

      </div>

      <p className="mt-6 text-xl">{result}</p>

      <p className="mt-10 text-gray-500">
        💡 Tip: prueba  
        <br/>
        <code>' OR 1=1 --</code>
      </p>

    </main>
  );
}