import { NextResponse } from "next/server";

// Exportamos la función 'middleware' (sin 'default') para Next.js 13.2+
export function middleware(_) {
  // Si no usas 'request', ponle un guion bajo para evitar el warning
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Excluir rutas internas y archivos estáticos
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Aplicar siempre en rutas API y TRPC
    "/(api|trpc)(.*)",
  ],
};
