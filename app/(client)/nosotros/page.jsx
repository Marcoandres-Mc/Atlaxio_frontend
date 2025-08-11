import React from 'react'

const page = () => {
  return (
    <>
    <section className="mt-24 bg-white text-gray-800 py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center border-b-4 border-blue-500 inline-block">
          ¿Quiénes somos?
        </h2>

        {/* Misión, Visión y Valores */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Misión</h3>
            <p>
              Ofrecer oportunidades de crecimiento profesional a jóvenes talentos mediante programas de prácticas significativos y bien estructurados.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Visión</h3>
            <p>
              Ser la plataforma líder en la integración de practicantes al mundo laboral, creando conexiones reales entre empresas y futuros profesionales.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Valores</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Compromiso</li>
              <li>Innovación</li>
              <li>Responsabilidad</li>
              <li>Transparencia</li>
            </ul>
          </div>
        </div>

        {/* Historia o propósito */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Nuestra Historia</h3>
          <p className="text-gray-700 leading-relaxed">
            Este proyecto nace de la necesidad de crear un puente entre estudiantes y el mundo empresarial.
            Fundado en 2025, nuestro objetivo ha sido claro desde el inicio: brindar experiencias laborales reales
            a practicantes, desarrollando tanto sus habilidades técnicas como personales.
          </p>
        </div>

        {/* Equipo Fundador */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-600 mb-8">Nuestro Equipo</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Fundador"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-lg font-bold">Marco A. Castillo</h4>
              <p className="text-sm text-gray-500">Fundador & CEO</p>
            </div>

            <div className="text-center bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
              <img
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="Co-Fundadora"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-lg font-bold">Lucía Torres</h4>
              <p className="text-sm text-gray-500">Co-Fundadora & Jefa de Operaciones</p>
            </div>

            <div className="text-center bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
              <img
                src="https://randomuser.me/api/portraits/men/76.jpg"
                alt="CTO"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-lg font-bold">Carlos Mendez</h4>
              <p className="text-sm text-gray-500">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    
    </>
  )
}

export default page