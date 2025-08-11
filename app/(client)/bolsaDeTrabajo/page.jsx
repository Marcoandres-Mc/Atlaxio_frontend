import React from 'react'

function page() {
  return (
    <div className='bg-gray-50 text-gray-900'>
    <section className="mt-24 text-center py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Únete como Practicante</h1>
          <p className="text-lg">
            En nuestra empresa creemos en el poder de los nuevos talentos. Buscamos estudiantes motivados, creativos y con ganas de aprender en un entorno profesional dinámico.
          </p>
        </div>
      </section>
<section className="bg-gray-100 py-12 px-6 lg:px-24">
  <div className="py-8 max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center">Beneficios</h2>

    <div className="flex flex-col lg:flex-row gap-10 items-center p-10">
      <figure className='w-full lg:w-1/2 mb-6 lg:mb-0'>
        <img
          src="https://actualidadlaboral.com/wp-content/uploads/2020/03/practicantes-1024x576.jpg"
          alt="Practicantes"
          className=" w-full h-auto rounded-lg shadow-lg"
        />
      </figure>


      <div className="w-full lg:w-1/2 space-y-6">
        

        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-green-500 text-xl mr-3">✔</span>
            <p><strong>Aprendizaje práctico:</strong> Trabaja en proyectos reales de software, aplicaciones y soluciones tecnológicas.</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 text-xl mr-3">✔</span>
            <p><strong>Mentoría constante:</strong> Recibe acompañamiento de profesionales con experiencia en desarrollo y diseño.</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 text-xl mr-3">✔</span>
            <p><strong>Flexibilidad de horario:</strong> Compatibiliza tu práctica con estudios u otras actividades.</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 text-xl mr-3">✔</span>
            <p><strong>Oportunidad de crecimiento:</strong> Posibilidad de incorporación a la empresa al finalizar la práctica.</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 text-xl mr-3">✔</span>
            <p><strong>Entorno innovador:</strong> Participa en un equipo creativo y enfocado en soluciones digitales modernas.</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 text-xl mr-3">✔</span>
            <p><strong>Networking profesional:</strong> Conecta con clientes, startups y expertos en tecnología.</p>
          </li>
        </ul>


        <div className="text-center mt-10">
      <a href="#contacto" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition">
        ¿Quieres unirte como practicante?
      </a>
    </div>
      </div>
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

</div>
  )
}
export default page;