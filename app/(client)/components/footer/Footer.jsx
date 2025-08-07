export default function Footer() {   
    return (
        <>
            <div>
            <div className="h-2 bg-[#001C27]"></div>
            </div>
            <footer className="bg-[#00E4F3] text-black py-6 ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo o nombre de la marca */}
        <div className="mb-4 md:mb-0 text-xl font-bold tracking-wide">
          ATLAXIO
        </div>

        {/* Enlaces */}
        <div className="flex space-x-6 text-sm">
          <a href="/about" className="hover:underline">Nosotros</a>
          <a href="/services" className="hover:underline">Servicios</a>
          <a href="/contact" className="hover:underline">Contacto</a>
          <a href="/terms" className="hover:underline">Términos</a>
        </div>

        {/* Derechos de autor */}
        <div>
            <div className="mt-4 md:mt-0 text-xs text-center md:text-right">
          © {new Date().getFullYear()} Atlaxio. Todos los derechos reservados.
        </div>
            <div className="mt-4 md:mt-0 text-xs text-center md:text-right">
            RUC: 1234567890
            </div>
        </div>
        
      </div>
    </footer>
        </>
    );
}