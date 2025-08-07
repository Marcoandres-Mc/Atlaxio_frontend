import React from 'react'

const page = () => {
  return (
    <>
    <section className="bg-white text-gray-800 py-16 px-4 md:px-10 lg:px-20">
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


    <section className="bg-white py-12 px-6 lg:px-24">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-10">Únete como Practicante</h2>

    <div className="flex flex-col lg:flex-row gap-10 items-center">
      <img
        src="https://actualidadlaboral.com/wp-content/uploads/2020/03/practicantes-1024x576.jpg"
        alt="Practicantes"
        className="rounded-2xl shadow-lg w-full lg:w-1/2 object-cover max-h-[400px]"
      />

      <div className="w-full lg:w-1/2 space-y-6">
        <p className="text-gray-700 text-lg">
          En nuestra empresa creemos en el poder de los nuevos talentos. Buscamos estudiantes motivados, creativos y con ganas de aprender en un entorno profesional dinámico.
        </p>

        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-green-500 text-xl mr-3">✔</span>
            <p><strong>Practicante de Administración:</strong> Apoyo en procesos administrativos, gestión de documentos y coordinación interna.</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 text-xl mr-3">✔</span>
            <p><strong>Practicante Frontend Developer:</strong> Desarrollo de interfaces en React, Tailwind y diseño responsivo.</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 text-xl mr-3">✔</span>
            <p><strong>Practicante Backend Developer:</strong> Implementación de APIs, manejo de bases de datos y lógica de negocio.</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 text-xl mr-3">✔</span>
            <p><strong>Practicante de Diseño:</strong> Creación de piezas gráficas, branding y diseño UI/UX.</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 text-xl mr-3">✔</span>
            <p><strong>Practicante de Marketing:</strong> Estrategias digitales, redes sociales y análisis de métricas.</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 text-xl mr-3">✔</span>
            <p><strong>Practicante de Psicología:</strong> Apoyo en clima organizacional, entrevistas y bienestar del equipo.</p>
          </li>
        </ul>

        <div className="text-center mt-8">
          <a
            href="#formulario"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Postula Ahora
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default page