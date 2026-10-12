import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Anahí Mailén Díaz | Full Stack Developer",
  description: "Portafolio profesional de Anahí Mailén Díaz, desarrolladora Full Stack (Backend-focused) en NestJS, React, Next.js e Inteligencia Artificial.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
      </head>
      <body className={`${workSans.variable} ${jetbrainsMono.variable} ${workSans.className} font-sans bg-white text-zinc-900 antialiased selection:bg-red-100 selection:text-red-900`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
