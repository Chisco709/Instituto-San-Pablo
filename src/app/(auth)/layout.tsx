import type React from "react"
export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black">
      <div className="relative w-full max-w-md p-4">
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-yellow-500 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-teal-500 rounded-full opacity-20 blur-3xl"></div>

        {/* Main container with glassmorphism effect */}
        <div className="relative z-10 w-full p-8 bg-gray-900/80 backdrop-blur-lg rounded-2xl border border-gray-800 shadow-xl">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-extrabold text-yellow-500">Instituto San Pablo</h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-yellow-500 to-yellow-400 mx-auto rounded-full"></div>
          </div>
          {children}
        </div>
      </div>
      <p className="mt-6 text-sm text-gray-500">Plataforma Educativa © 2025</p>
    </div>
  )
}

