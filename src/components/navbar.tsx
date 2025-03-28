import Link from "next/link"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Suspense } from "react"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="bg-black/80 backdrop-blur-md text-white py-4 sticky top-0 z-20 border-b border-gray-800">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold hover:text-[#f9d423] transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
        >
          <div className="bg-[#f9d423] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold overflow-hidden">
            <Image
              src="/logo-san-pablo.svg"
              alt="Logo Instituto San Pablo"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <span className="text-[#f9d423]">Instituto</span> San Pablo
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="#" className="hover:text-[#f9d423] transition-colors">
            Programas
          </Link>
          <Link href="#" className="hover:text-[#f9d423] transition-colors">
            Admisiones
          </Link>
          <Link href="#" className="hover:text-[#f9d423] transition-colors">
            Nosotros
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Suspense>
            <SignedIn>
              <div className="flex items-center gap-3">
                <Link
                  className="bg-gradient-to-r from-[#2c6e49] to-[#3d8e59] hover:from-[#3d8e59] hover:to-[#2c6e49] flex items-center px-4 py-1.5 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
                  href="/admin"
                >
                  Admin
                </Link>
                <Link
                  className="relative overflow-hidden rounded-full px-4 py-1.5 group text-gray-300 hover:text-white"
                  href="/courses"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#1a3a6c] to-[#2a5a8c] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative">Mis Cursos</span>
                </Link>
                <Link
                  className="relative overflow-hidden rounded-full px-4 py-1.5 group text-gray-300 hover:text-white"
                  href="/purchases"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#1a3a6c] to-[#2a5a8c] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative">Comprar</span>
                </Link>
                <div className="size-9 self-center">
                  <Suspense>
                    <UserButton
                      appearance={{
                        elements: {
                          userButtonAvatarBox: {
                            width: "100%",
                            height: "100%",
                          },
                        },
                      }}
                    />
                  </Suspense>
                </div>
              </div>
            </SignedIn>
          </Suspense>
          <Suspense>
            <SignedOut>
              <Button
                className="self-center bg-gradient-to-r from-[#f9d423] to-[#f9b423] hover:from-[#f9b423] hover:to-[#f9d423] text-black font-medium rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <SignInButton>Iniciar Sesion</SignInButton>
              </Button>
            </SignedOut>
          </Suspense>
        </div>
      </div>
    </nav>
  )
}

