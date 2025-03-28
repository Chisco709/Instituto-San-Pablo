"use client";

import { ReactNode, Suspense, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";

export default function ConsumerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Gradientes de fondo */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-gradient-to-b from-[#f9d423]/5 to-transparent -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-screen bg-gradient-to-t from-[#2c6e49]/5 to-transparent -z-10 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-1/3 h-1/3 bg-gradient-to-tr from-[#1a3a6c]/5 to-transparent -z-10 blur-3xl"></div>

      <Navbar />

      <main className="flex-grow">
        <Suspense>
          {/* Para usuarios NO logueados */}
          <SignedOut>{children}</SignedOut>

          {/* Para usuarios logueados */}
          <SignedIn>
            <div className="container mx-auto px-4 py-8">{children}</div>
          </SignedIn>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

// --------------------------------------------------------------------------------
// Navbar con transparencia variable al hacer scroll
// --------------------------------------------------------------------------------
function Navbar() {
  // Estado para saber si hemos scrolleado
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Si bajamos más de 10px, marcamos que se ha hecho scroll
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-20 backdrop-blur-md text-white border-b border-gray-800 transition-all duration-300 ${
        scrolled ? "bg-black/60" : "bg-black/80"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo + Nombre */}
          <Link
            className="text-xl md:text-2xl font-bold hover:text-[#f9d423] transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            href="/"
          >
            <div className="bg-[#f9d423] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">
              <Image
                src="/logo-san-pablo.svg"
                alt="Logo Instituto San Pablo"
                width={32}
                height={32}
              />
            </div>
            <span className="text-[#f9d423]">Instituto</span> San Pablo
          </Link>

          {/* Sección derecha (links + user) */}
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
                  {/* Botón de usuario de Clerk */}
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

            {/* Si no está logueado, muestra el botón para Iniciar Sesión */}
            <Suspense>
              <SignedOut>
                <Button
                  className="self-center bg-gradient-to-r from-[#f9d423] to-[#f9b423] hover:from-[#f9b423] hover:to-[#f9d423] text-black font-medium rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <SignInButton>Iniciar Sesión</SignInButton>
                </Button>
              </SignedOut>
            </Suspense>
          </div>
        </nav>
      </div>
    </header>
  );
}
