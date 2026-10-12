"use client"

import { MapPin } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 bg-white border-t border-zinc-100">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="text-xs font-mono tracking-wider">
          <span className="text-[#991b1b] font-semibold">02 / SOBRE MÍ</span>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 leading-[1.15]">
              Curiosidad constante.
              <br />
              Soluciones concretas.
            </h2>

            <div className="flex items-center gap-2 text-zinc-500 text-sm pt-2">
              <MapPin className="w-4 h-4 text-zinc-400 shrink-0" />
              <span>Concordia, Entre Ríos, Argentina</span>
            </div>
          </div>

          {/* Right Column (Col 7) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-zinc-700 text-base md:text-lg leading-relaxed">
              <p>
                Soy desarrolladora Full Stack con foco en Backend. Me gusta entender cómo funcionan
                las cosas y transformar esa curiosidad en software útil. Combino experiencia con{" "}
                <strong className="font-bold text-zinc-900">
                  NestJS, TypeORM y bases de datos SQL / NoSQL
                </strong>{" "}
                con desarrollo de interfaces en React y Next.js.
              </p>

              <p className="text-zinc-600">
                Mi recorrido incluye proyectos propios como UConnect, pasantías en Whaber y Nomad
                Ride, y formación en Henry. Trabajo con una mirada práctica: resolver problemas,
                colaborar y construir sistemas que puedan crecer.
              </p>
            </div>

            {/* Skills Sub-Grid */}
            <div className="grid sm:grid-cols-2 gap-8 pt-4 border-t border-zinc-100">
              {/* Backend & Datos */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#991b1b] font-semibold">
                  Backend &amp; datos
                </h3>
                <div className="text-sm text-zinc-700 space-y-1">
                  <p>NestJS · Node.js · Express · TypeORM</p>
                  <p>PostgreSQL · MongoDB · Python</p>
                </div>
              </div>

              {/* Interfaces & Automatización */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#991b1b] font-semibold">
                  Interfaces &amp; automatización
                </h3>
                <div className="text-sm text-zinc-700 space-y-1">
                  <p>React · Next.js · TypeScript · Tailwind</p>
                  <p>n8n · Inteligencia artificial · Git</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
