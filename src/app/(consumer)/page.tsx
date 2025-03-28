"use client";

import Image from "next/image";
import { BookOpen, Award, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import { useState } from "react";
import { StudentsRating } from "@/components/StudentsRating";

export default function Page() {
  // Estado para controlar si se muestran opciones extra
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  return (
    <SignedOut>
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          {/* Fondo con gradientes */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#121212] to-[#0a0a0a] -z-10" />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#f9d423]/5 rounded-full blur-3xl -z-10 animate-pulse" />
          <div
            className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#2c6e49]/5 rounded-full blur-3xl -z-10 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="container mx-auto px-4 relative">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Texto del Hero */}
              <div className="md:w-1/2 space-y-6 text-white">
                <div className="inline-block px-4 py-1 bg-[#f9d423]/10 rounded-full text-[#f9d423] font-medium text-sm mb-2 border border-[#f9d423]/20">
                  Formación de Excelencia
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Impulsa tu{" "}
                  <span className="text-[#f9d423] relative">
                    futuro
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 100 10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0,5 Q25,0 50,5 T100,5"
                        fill="none"
                        stroke="#f9d423"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>{" "}
                  con nosotros
                </h1>
                <p className="text-lg text-gray-400 max-w-lg">
                  Descubre programas educativos innovadores diseñados para
                  desarrollar tu potencial profesional. Únete hoy y transforma
                  tu futuro.
                </p>
                {/* Botón principal y enlace para más opciones */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <SignInButton>
                    <Button className="bg-gradient-to-r from-[#f9d423] to-[#f9b423] hover:from-[#f9b423] hover:to-[#f9d423] text-black font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      Comienza Ahora
                    </Button>
                  </SignInButton>
                  <button
                    onClick={() => setShowMoreOptions(!showMoreOptions)}
                    className="text-[#f9d423] underline self-center"
                  >
                    {showMoreOptions ? "Ocultar Opciones" : "Más Opciones"}
                  </button>
                </div>
                {/* Opciones extra, se muestran en vertical */}
                {showMoreOptions && (
                  <div className="flex flex-col gap-4 pt-4">
                    <SignInButton>
                      <Button className="bg-gradient-to-r from-[#2c6e49] to-[#3d8e59] hover:from-[#3d8e59] hover:to-[#2c6e49] text-white font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        Inscríbete Gratis
                      </Button>
                    </SignInButton>
                    <SignInButton>
                      <Button className="bg-gradient-to-r from-[#1a3a6c] to-[#2a5a8c] hover:from-[#2a5a8c] hover:to-[#1a3a6c] text-white font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        Explora Oportunidades
                      </Button>
                    </SignInButton>
                  </div>
                )}
                {/* Reseñas de estudiantes */}
                <StudentsRating />
              </div>
              {/* Imagen principal con overlay */}
              <div className="md:w-1/2 mt-6 md:mt-0 relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#2c6e49]/20 rounded-lg rotate-12 -z-10" />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#f9d423]/20 rounded-lg -rotate-12 -z-10" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 border border-gray-800">
                  <Image
                    src="/Prom.jpg"
                    alt="Estudiantes del Instituto San Pablo"
                    width={1200}
                    height={800}
                    quality={100}
                    className="object-cover w-full h-[350px]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <div className="flex flex-col items-center">
                      <div className="bg-[#f9d423] rounded-lg p-2 mb-2">
                        <BookOpen className="text-black w-6 h-6" />
                      </div>
                      <p className="text-[#f9d423] font-bold text-sm">
                        PROM 2024-2
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-[#0f0f0f] relative border-y border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-16 relative z-10">
              {[
                { icon: <Users className="w-6 h-6" />, value: "2,000+", label: "Estudiantes" },
                { icon: <BookOpen className="w-6 h-6" />, value: "12+", label: "Cursos" },
                { icon: <Award className="w-6 h-6" />, value: "98%", label: "Satisfacción" },
                { icon: <Zap className="w-6 h-6" />, value: "5+", label: "Años de experiencia" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#161616] rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 border border-gray-800"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#1a3a6c] to-[#2a5a8c] text-white mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 relative overflow-hidden bg-[#0a0a0a]">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#f9d423]/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#2c6e49]/5 rounded-full blur-3xl -z-10" />
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1 bg-[#2c6e49]/10 rounded-full text-[#2c6e49] font-medium text-sm mb-4 border border-[#2c6e49]/20">
                TUS OPORTUNIDADES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center">
                ¿Por qué unirte al
                <span className="text-[#2c6e49] relative flex items-center mx-2">
                  Instituto San Pablo
                </span>
                ?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Te ofrecemos un ambiente de aprendizaje de primer nivel, con
                programas reconocidos y un equipo docente que impulsa tu éxito.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <BookOpen />,
                  color: "#f9d423",
                  title: "Programas Acreditados",
                  description:
                    "Plan de estudios actualizado para que te mantengas a la vanguardia en el mercado laboral.",
                },
                {
                  icon: <Award />,
                  color: "#2c6e49",
                  title: "Docentes Expertos",
                  description:
                    "Aprende de profesionales con amplia experiencia dispuestos a guiarte hacia el éxito.",
                },
                {
                  icon: <Users />,
                  color: "#2a5a8c",
                  title: "Comunidad Activa",
                  description:
                    "Únete a una red de estudiantes y profesionales que crecen juntos.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#161616] rounded-2xl shadow-lg p-8 border border-gray-800 hover:border-gray-700 transition-colors"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <div className="text-2xl" style={{ color: feature.color }}>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] to-[#161616] -z-10" />
          <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[#f9d423]/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#2c6e49]/5 rounded-full blur-3xl -z-10" />
          <div className="container mx-auto px-4">
            <div className="bg-[#161616]/80 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-gray-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#f9d423]/10 to-transparent rounded-full blur-3xl -z-10" />
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    ¡La educación que mereces está a un clic!
                  </h2>
                  <p className="text-gray-400 mb-6 text-lg">
                    El momento de transformar tu futuro es ahora. Da el primer
                    paso y regístrate para descubrir todo lo que podemos
                    ofrecerte.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <SignInButton>
                      <Button className="bg-gradient-to-r from-[#f9d423] to-[#f9b423] hover:from-[#f9b423] hover:to-[#f9d423] text-black font-medium px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        ¡Regístrate Ya!
                      </Button>
                    </SignInButton>
                    <SignInButton>
                      <Button className="bg-gradient-to-r from-[#2c6e49] to-[#3d8e59] hover:from-[#3d8e59] hover:to-[#2c6e49] text-white font-medium px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        Comienza tu Camino
                      </Button>
                    </SignInButton>
                  </div>
                </div>
                <div className="relative hidden md:block">
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#f9d423]/20 rounded-lg rotate-12 -z-10" />
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#2c6e49]/20 rounded-lg -rotate-12 -z-10" />
                  <div className="bg-black rounded-2xl p-6 shadow-xl border border-gray-800">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Próximos Eventos
                    </h3>
                    {[
                      {
                        date: "20 AGO",
                        title: "Webinar: Tendencias Educativas",
                        time: "06:00 PM",
                      },
                      {
                        date: "25 AGO",
                        title: "Taller de Liderazgo",
                        time: "04:00 PM",
                      },
                    ].map((event, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 mb-4 pb-4 border-b border-gray-800 last:border-0 last:mb-0 last:pb-0"
                      >
                        <div className="bg-[#1a3a6c]/20 rounded-lg p-2 text-center min-w-[60px] border border-[#1a3a6c]/30">
                          <div className="text-[#2a5a8c] font-bold">
                            {event.date}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-white">
                            {event.title}
                          </h4>
                          <div className="flex items-center text-sm text-gray-400 mt-1">
                            <span className="mr-1">⏰</span> {event.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SignedOut>
  );
}
