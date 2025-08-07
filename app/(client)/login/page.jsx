"use client";
import React from 'react'
import { useState } from 'react';

const page = () => {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de inicio de sesión
        console.log("Email:", email);
        console.log("Password:", password);
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Iniciar Sesión
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Correo electrónico</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ejemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Entrar
          </button>

          <p className="text-sm text-center text-gray-600 mt-4">
            ¿No tienes una cuenta? <a href="#" className="text-blue-500 hover:underline">Regístrate</a>
          </p>
        </form>
      </div>
    </div>

  )
}

export default page