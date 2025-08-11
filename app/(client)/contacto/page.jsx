import React from 'react'

const page = () => {
  return (
    <>
        <section className="mt-24 bg-white py-12 px-6 md:px-12 lg:px-24" id="contacto">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">Contacto</h2>
    <p className="text-gray-600 mb-10">¡Ponte en contacto conmigo a través de los siguientes medios!</p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      <div className="flex flex-col items-center bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
        <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6-9.75-6" />
        </svg>
        <h3 className="font-semibold text-gray-800">Correo</h3>
        <p className="text-sm text-gray-600 break-words">tucorreo@example.com</p>
      </div>


      <div className="flex flex-col items-center bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
        <svg className="w-10 h-10 text-green-500 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M7.5 10.5l3.75 3.75L16.5 9m5.25 3a9.75 9.75 0 11-19.5 0 9.75 9.75 0 0119.5 0z" />
        </svg>
        <h3 className="font-semibold text-gray-800">WhatsApp</h3>
        <p className="text-sm text-gray-600">+51 987 654 321</p>
      </div>


      <div className="flex flex-col items-center bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
        <svg className="w-10 h-10 text-indigo-600 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M17.25 6.75h.008v.008H17.25V6.75zM3 12a9 9 0 1018 0 9 9 0 00-18 0z" />
          <path d="M15.75 9.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
        <h3 className="font-semibold text-gray-800">Redes Sociales</h3>
        <p className="text-sm text-gray-600">
          <a href="https://linkedin.com/in/tuusuario" className="text-blue-600 hover:underline block">LinkedIn</a>
          <a href="https://instagram.com/tuusuario" className="text-pink-500 hover:underline block">Instagram</a>
        </p>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default page