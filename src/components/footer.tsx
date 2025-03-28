import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ChevronRight, Send } from "lucide-react"
import { SignedOut } from "@clerk/nextjs"

export default function Footer() {
  return (
    <SignedOut>
      <footer className="relative overflow-hidden bg-black text-white border-t border-gray-800">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[#f9d423]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#2c6e49]/5 rounded-full blur-3xl"></div>

        {/* Top Wave - Dark version */}
        <div className="relative h-16 overflow-hidden">
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L48 105C96 90 192 60 288 55C384 50 480 70 576 75C672 80 768 70 864 65C960 60 1056 60 1152 70C1248 80 1344 100 1392 110L1440 120V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V120Z"
              fill="#0a0a0a"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-[#f9d423] text-black w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  ISP
                </div>
                <h3 className="text-2xl font-bold">
                  <span className="text-[#f9d423]">Instituto</span> San Pablo
                </h3>
              </div>
              <p className="text-gray-400">
                Formando profesionales de excelencia desde 1985. Comprometidos con la educación de calidad y el
                desarrollo integral de nuestros estudiantes.
              </p>

              <div className="pt-4">
                <h4 className="text-lg font-semibold mb-3 text-gray-300">Suscríbete a nuestro boletín</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="bg-[#161616] border border-gray-700 rounded-l-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#f9d423]/50 text-white"
                  />
                  <button className="bg-[#f9d423] hover:bg-[#f9b423] text-black rounded-r-full px-4 transition-colors">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4 pt-2">
                <Link
                  href="#"
                  className="bg-[#161616] hover:bg-[#f9d423]/20 hover:text-[#f9d423] w-10 h-10 rounded-full flex items-center justify-center transition-colors border border-gray-800"
                >
                  <Facebook size={18} />
                </Link>
                <Link
                  href="#"
                  className="bg-[#161616] hover:bg-[#f9d423]/20 hover:text-[#f9d423] w-10 h-10 rounded-full flex items-center justify-center transition-colors border border-gray-800"
                >
                  <Twitter size={18} />
                </Link>
                <Link
                  href="#"
                  className="bg-[#161616] hover:bg-[#f9d423]/20 hover:text-[#f9d423] w-10 h-10 rounded-full flex items-center justify-center transition-colors border border-gray-800"
                >
                  <Instagram size={18} />
                </Link>
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <h4 className="text-lg font-semibold border-b border-gray-800 pb-2 text-gray-300">Programas</h4>
              <ul className="space-y-3">
                {["Licenciaturas", "Maestrías", "Diplomados", "Cursos"].map((item, index) => (
                  <li key={index}>
                    <Link href="#" className="flex items-center group text-gray-400">
                      <ChevronRight className="w-4 h-4 mr-2 text-[#f9d423] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:text-[#f9d423] transition-colors">{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2 space-y-4">
              <h4 className="text-lg font-semibold border-b border-gray-800 pb-2 text-gray-300">Enlaces</h4>
              <ul className="space-y-3">
                {["Sobre Nosotros", "Admisiones", "Calendario", "FAQ"].map((item, index) => (
                  <li key={index}>
                    <Link href="#" className="flex items-center group text-gray-400">
                      <ChevronRight className="w-4 h-4 mr-2 text-[#f9d423] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:text-[#f9d423] transition-colors">{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 space-y-4">
              <h4 className="text-lg font-semibold border-b border-gray-800 pb-2 text-gray-300">Contacto</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#161616] rounded-full p-2 mr-3 border border-gray-800">
                    <MapPin className="text-[#f9d423] w-5 h-5" />
                  </div>
                  <span className="text-gray-400">Av. Educación 1234, Ciudad Universitaria</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#161616] rounded-full p-2 mr-3 border border-gray-800">
                    <Phone className="text-[#f9d423] w-5 h-5" />
                  </div>
                  <span className="text-gray-400">+57 304 3496841</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#161616] rounded-full p-2 mr-3 border border-gray-800">
                    <Mail className="text-[#f9d423] w-5 h-5" />
                  </div>
                  <span className="text-gray-400">info@institutosanpablo.edu</span>
                </li>
              </ul>

              <div className="mt-6 bg-[#161616] rounded-xl p-4 border border-gray-800">
                <h5 className="font-medium mb-2 text-gray-300">Horario de Atención</h5>
                <p className="text-sm text-gray-400">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                <p className="text-sm text-gray-400">Sábados: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Instituto San Pablo. Todos los derechos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-[#f9d423] transition-colors">
                Términos y Condiciones
              </Link>
              <Link href="#" className="hover:text-[#f9d423] transition-colors">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </SignedOut>
  )
}

