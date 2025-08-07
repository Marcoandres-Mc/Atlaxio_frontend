"use client";
import React from 'react';

const Paso = ({ numero, titulo, descripcion }) => (
  <div className="mb-8 p-6 rounded-2xl shadow-md border border-gray-200 bg-white">
    <h3 className="text-xl font-bold mb-2 text-blue-600">Paso {numero}: {titulo}</h3>
    <p className="text-gray-700">{descripcion}</p>
  </div>
);

const Page = () => {
  const pasos = [
    {
      numero: 1,
      titulo: "Solicitud de Cotización",
      descripcion: "Completa el formulario con los detalles de tu proyecto: tipo de página, funcionalidades requeridas, plazos estimados, etc."
    },
    {
      numero: 2,
      titulo: "Revisión del Proyecto",
      descripcion: "Nuestro equipo evaluará la información recibida para entender a fondo tus necesidades."
    },
    {
      numero: 3,
      titulo: "Reunión Inicial",
      descripcion: "Nos comunicaremos contigo para aclarar detalles importantes y asesorarte sobre las mejores soluciones tecnológicas."
    },
    {
      numero: 4,
      titulo: "Envío de Cotización",
      descripcion: "Te enviaremos una propuesta formal con el costo, cronograma de desarrollo y alcances del proyecto."
    },
    {
      numero: 5,
      titulo: "Inicio del Proyecto",
      descripcion: "Una vez aprobada la propuesta, iniciaremos el desarrollo de tu proyecto siguiendo los tiempos acordados."
    },
    {
      numero: 6,
      titulo: "Entrega y Seguimiento",
      descripcion: "Te entregamos el proyecto y brindamos soporte post-lanzamiento para garantizar su correcto funcionamiento."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-10">
        Proceso para Desarrollar tu Proyecto Web
      </h1>
      {pasos.map((paso) => (
        <Paso
          key={paso.numero}
          numero={paso.numero}
          titulo={paso.titulo}
          descripcion={paso.descripcion}
        />
      ))}
      <div className="text-center mt-10">
        <a
          href="/contacto"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Solicitar Cotización Ahora
        </a>
      </div>
    </div>
  );
};

export default Page;