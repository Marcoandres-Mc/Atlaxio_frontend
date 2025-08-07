import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center px-6">
        {/* Fondo con imagen superpuesta */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80"
            alt="Fondo tecnológico"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Impulsando el Futuro con Tecnología Inteligente
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Desarrollamos soluciones digitales a medida para empresas, startups y emprendedores
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-semibold transition"
            >
              Contáctanos
            </a>
            <a
              href="#servicios"
              className="bg-white text-gray-900 hover:bg-gray-200 py-3 px-6 rounded-full font-semibold transition"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </section>

      {/* ¿Quiénes Somos? */}
      <section className="bg-white py-20 px-6 text-center text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">¿Quiénes Somos?</h2>
          <p className="text-lg sm:text-xl leading-relaxed">
            Atlaxio es una empresa innovadora dedicada al desarrollo de software, aplicaciones web y soluciones tecnológicas personalizadas. 
            Creemos en el poder del talento joven y la tecnología para transformar industrias.
          </p>
        </div>
      </section>
      <section id="servicios" className="bg-gray-100 py-20 px-6 text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Desarrollo Web</h3>
              <p className="text-sm text-gray-600">Sitios, landing pages y tiendas online modernas, rápidas y escalables.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Desarrollo de Software</h3>
              <p className="text-sm text-gray-600">Sistemas personalizados para mejorar tus procesos y productividad.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Aplicaciones Móviles</h3>
              <p className="text-sm text-gray-600">Próximamente: apps móviles que conectan con tus usuarios donde sea.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Consultoría Tecnológica</h3>
              <p className="text-sm text-gray-600">Automatizamos procesos y guiamos tu transformación digital.</p>
            </div>
          </div>
        </div>
      </section>

<section className="bg-white py-20 px-6 text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">¿Cómo trabajamos?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Reunión Inicial</h3>
              <p className="text-sm text-gray-600">Conocemos tu proyecto, tus metas y te asesoramos desde el primer momento.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-2">Diseño de Solución</h3>
              <p className="text-sm text-gray-600">Creamos una propuesta visual y técnica adaptada a tus necesidades reales.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🛠</div>
              <h3 className="text-xl font-semibold mb-2">Desarrollo y Testeo</h3>
              <p className="text-sm text-gray-600">Desarrollamos con calidad, revisamos errores y validamos funcionalidades.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">Entrega y Soporte</h3>
              <p className="text-sm text-gray-600">Implementamos la solución, damos capacitación y soporte post-lanzamiento.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-700 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Listo para transformar tu idea en una solución tecnológica?
          </h2>
          <p className="text-lg sm:text-xl mb-6">
            En Atlaxio convertimos tus desafíos en soluciones digitales poderosas, personalizadas y listas para crecer contigo.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-white text-blue-700 hover:bg-gray-100 py-3 px-6 rounded-full font-semibold transition"
          >
            Solicita una reunión gratuita
          </a>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4 md:px-10">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">Preguntas Frecuentes</h2>

    <div className="space-y-6 text-left">


      <details className="bg-white p-5 rounded-lg shadow">
        <summary className="cursor-pointer text-lg font-medium text-gray-800">¿Cuánto cuesta un sistema?</summary>
        <p className="mt-2 text-gray-600">
          El costo depende del tipo de sistema que necesites. Ofrecemos soluciones a medida y presupuestos personalizados según tus requerimientos. Contáctanos para una cotización gratuita.
        </p>
      </details>


      <details className="bg-white p-5 rounded-lg shadow">
        <summary className="cursor-pointer text-lg font-medium text-gray-800">¿En cuánto tiempo entregan?</summary>
        <p className="mt-2 text-gray-600">
          Depende de la complejidad del proyecto. Un sistema pequeño puede tomar de 1 a 2 semanas, mientras que uno más completo puede tomar de 4 a 8 semanas. Siempre trabajamos con cronogramas claros.
        </p>
      </details>


      <details className="bg-white p-5 rounded-lg shadow">
        <summary className="cursor-pointer text-lg font-medium text-gray-800">¿Qué necesito para empezar?</summary>
        <p className="mt-2 text-gray-600">
          Solo necesitas tener una idea clara de lo que quieres lograr. Nosotros te ayudaremos a definir los requerimientos técnicos y funcionales, y te guiaremos en todo el proceso.
        </p>
      </details>

    </div>
  </div>
</section>
      </>
  );
}
