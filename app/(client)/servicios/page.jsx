"use client";

import { Briefcase, Code, Smartphone, Server, Settings, LifeBuoy } from "lucide-react";

const servicios = [
  {
    icon: <Code className="w-8 h-8 text-blue-600" />,
    titulo: "Desarrollo Web",
    descripcion: "Creamos sitios y plataformas web responsivas y eficientes, tanto frontend como backend."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-green-600" />,
    titulo: "Aplicaciones Móviles",
    descripcion: "Desarrollo de apps móviles nativas y multiplataforma para iOS y Android."
  },
  {
    icon: <Server className="w-8 h-8 text-purple-600" />,
    titulo: "APIs y Sistemas Backend",
    descripcion: "Arquitectura robusta para gestionar datos y lógica del lado servidor."
  },
  {
    icon: <Briefcase className="w-8 h-8 text-yellow-600" />,
    titulo: "Integraciones con Terceros",
    descripcion: "Conectamos tu sistema con pasarelas de pago, CRMs, servicios externos y más."
  },
  {
    icon: <LifeBuoy className="w-8 h-8 text-red-600" />,
    titulo: "Mantenimiento y Soporte",
    descripcion: "Aseguramos que tus sistemas estén actualizados y funcionando 24/7."
  },
  {
    icon: <Settings className="w-8 h-8 text-indigo-600" />,
    titulo: "Consultoría Tecnológica",
    descripcion: "Te guiamos para escalar y optimizar tus proyectos con tecnología adecuada."
  }
];

const page = () => {
  return (
    <>

    <main className="mt-24 bg-gray-50 text-gray-900">
      <section className="text-center py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Servicios de Desarrollo de Software</h1>
          <p className="text-lg">
            Creamos soluciones digitales a medida para potenciar tu negocio.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">¿Qué ofrecemos?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{servicio.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{servicio.titulo}</h3>
              <p className="text-gray-600 text-sm">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Tecnologías que usamos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-800">
            {[
              "React.js",
              "Next.js",
              "Node.js",
              "Express",
              "MongoDB",
              "MySQL",
              "Tailwind CSS",
              "Firebase",
            ].map((tech, i) => (
              <span
                key={i}
                className="bg-white border px-4 py-2 rounded-lg shadow-sm hover:shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">¿Por qué elegirnos?</h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✅ Experiencia en desarrollo ágil y entrega continua.</li>
          <li>✅ Enfoque 100% personalizado a tus objetivos.</li>
          <li>✅ Comunicación clara y fluida durante todo el proyecto.</li>
          <li>✅ Soporte y mantenimiento post-lanzamiento.</li>
          <li>✅ Ideal para startups, emprendedores y empresas en crecimiento.</li>
        </ul>
      </section>

      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para empezar?</h2>
        <p className="text-lg mb-6">Contáctanos y te ayudaremos a hacer realidad tu idea.</p>
        <a
          href="/contacto"
          className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-200 transition"
        >
          Contáctanos
        </a>
      </section>
    </main>
    </>
  )
}

export default page