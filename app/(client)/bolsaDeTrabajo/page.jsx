import React from 'react'

function page() {
  return (
    <>
<section className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center px-6">
        {/* Fondo con imagen superpuesta */}
        <div className="absolute inset-0">
          <img
            src="https://actualidadlaboral.com/wp-content/uploads/2020/03/practicantes-1024x576.jpg"
            alt="Fondo tecnológico"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Oportunidad para Practicantes
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            En nuestra empresa brindamos espacio a estudiantes o egresados que buscan ganar experiencia real en proyectos tecnológicos. Trabajamos con practicantes comprometidos y con ganas de aprender, mientras les ofrecemos una carta de recomendación, acompañamiento, mentoría y proyectos reales para su portafolio.
          </p>
          
        </div>
      </section>


<section className="bg-white py-16 px-4 md:px-10">
  <div className="max-w-5xl mx-auto">
    <div className="grid md:grid-cols-3 gap-6 text-center">
      <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Experiencia Real</h3>
        <p className="text-gray-600">Participa en proyectos que llegan a clientes reales y mejora tu perfil profesional.</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Mentoría Constante</h3>
        <p className="text-gray-600">No estarás solo. Te guiamos paso a paso con buenas prácticas y soporte técnico.</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Certificación</h3>
        <p className="text-gray-600">Al finalizar tu proceso, obtienes una carta de recomendación o constancia para tu universidad.</p>
      </div>
    </div>

    <div className="text-center mt-10">
      <a href="#contacto" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition">
        ¿Quieres unirte como practicante?
      </a>
    </div>
  </div>
</section>

<section className="py-16 px-4 md:px-10 bg-[#001C27]">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Puestos Disponibles para Practicantes</h2>
    <p className="text-center text-white mb-10 max-w-3xl mx-auto">
      Estos son los roles en los que puedes aplicar si deseas realizar tus prácticas preprofesionales con nosotros.
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Practicante de Administración</h3>
        <p className="text-gray-600 mb-4">
          Apoya en la gestión de documentos, coordinación interna, y organización de tareas administrativas.
        </p>
        <ul className="text-sm text-gray-500 list-disc list-inside mb-4">
          <li>Excel básico/intermedio</li>
          <li>Organización y responsabilidad</li>
          <li>Buena comunicación</li>
        </ul>
        <a href="#contacto" className="text-blue-600 font-medium hover:underline">Postular ahora →</a>
      </div>


      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Practicante Frontend Developer</h3>
        <p className="text-gray-600 mb-4">
          Trabaja en el desarrollo visual de nuestras plataformas usando tecnologías modernas.
        </p>
        <ul className="text-sm text-gray-500 list-disc list-inside mb-4">
          <li>HTML, CSS, JavaScript</li>
          <li>React o Tailwind (deseable)</li>
          <li>Creatividad y enfoque UX/UI</li>
        </ul>
        <a href="#contacto" className="text-blue-600 font-medium hover:underline">Postular ahora →</a>
      </div>


      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Practicante Backend Developer</h3>
        <p className="text-gray-600 mb-4">
          Forma parte del equipo que construye la lógica y funcionalidad detrás de nuestras aplicaciones.
        </p>
        <ul className="text-sm text-gray-500 list-disc list-inside mb-4">
          <li>Node.js, Java o PHP</li>
          <li>APIs REST y bases de datos</li>
          <li>Responsabilidad y lógica clara</li>
        </ul>
        <a href="#contacto" className="text-blue-600 font-medium hover:underline">Postular ahora →</a>
      </div>


      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Practicante de Diseño</h3>
        <p className="text-gray-600 mb-4">
          Colabora en la creación de interfaces atractivas y material gráfico para productos digitales.
        </p>
        <ul className="text-sm text-gray-500 list-disc list-inside mb-4">
          <li>Figma, Adobe XD o Photoshop</li>
          <li>Sentido estético</li>
          <li>Interés en diseño UI/UX</li>
        </ul>
        <a href="#contacto" className="text-blue-600 font-medium hover:underline">Postular ahora →</a>
      </div>


      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Practicante de Marketing</h3>
        <p className="text-gray-600 mb-4">
          Apoya en estrategias digitales, redes sociales y posicionamiento de marca.
        </p>
        <ul className="text-sm text-gray-500 list-disc list-inside mb-4">
          <li>Gestión de redes sociales</li>
          <li>Copywriting y creatividad</li>
          <li>Conocimiento en marketing digital</li>
        </ul>
        <a href="#contacto" className="text-blue-600 font-medium hover:underline">Postular ahora →</a>
      </div>


      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Practicante de Psicología</h3>
        <p className="text-gray-600 mb-4">
          Contribuye al bienestar organizacional, clima laboral y desarrollo del talento humano.
        </p>
        <ul className="text-sm text-gray-500 list-disc list-inside mb-4">
          <li>Interés en psicología organizacional</li>
          <li>Buenas habilidades interpersonales</li>
          <li>Apoyo en dinámicas de equipo</li>
        </ul>
        <a href="#contacto" className="text-blue-600 font-medium hover:underline">Postular ahora →</a>
      </div>
    </div>

    <div className="text-center mt-12">
      <a href="#contacto" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition">
        Ver más puestos o contactarnos
      </a>
    </div>
  </div>
</section>

</>
  )
}
export default page;