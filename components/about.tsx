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
                Soy desarrolladora <strong className="font-bold text-zinc-900">Full Stack</strong> con sólida experiencia
                en la creación de aplicaciones web completas. Combino el desarrollo de interfaces modernas e interactivas en{" "}
                <strong className="font-bold text-zinc-900">React, Next.js y Tailwind CSS</strong> con la construcción
                de arquitecturas sólidas y escalables en{" "}
                <strong className="font-bold text-zinc-900">NestJS, Node.js, Express y TypeORM</strong>, respaldadas por bases
                de datos SQL y NoSQL (<strong className="font-bold text-zinc-900">PostgreSQL y MongoDB</strong>).
              </p>

              <p className="text-zinc-600">
                Actualmente desarrollo <strong className="font-bold text-zinc-900">UConnect</strong>, un software de gestión
                hotelera integral donde cubro tanto frontend como backend e implementé automatizaciones con{" "}
                <strong className="font-bold text-zinc-900">n8n e inteligencia artificial</strong> para reservas vía WhatsApp.
                Mi recorrido combina experiencia profesional en pasantías (<strong className="text-zinc-800 font-medium">Whaber</strong> y{" "}
                <strong className="text-zinc-800 font-medium">Nomad Ride</strong>) con proyectos de envergadura construidos
                durante el <strong className="text-zinc-800 font-medium">Bootcamp de Henry</strong>. Destaco por mi capacidad de resolución
                de problemas, trabajo en equipo y comunicación efectiva para entregar soluciones eficientes y escalables.
              </p>
            </div>

            {/* Skills Sub-Grid aligned with CV Technologies */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-zinc-100">
              {/* Frontend */}
              <div className="space-y-2 p-3.5 rounded-xl bg-zinc-50/60 border border-zinc-100">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#991b1b] font-semibold">
                  Frontend
                </h3>
                <div className="text-xs md:text-sm text-zinc-700 space-y-1">
                  <p className="font-medium text-zinc-900">React · Next.js · React Native</p>
                  <p className="text-zinc-600">Redux · Context API · Angular · Tailwind CSS · Bootstrap · HTML · CSS</p>
                </div>
              </div>

              {/* Backend */}
              <div className="space-y-2 p-3.5 rounded-xl bg-zinc-50/60 border border-zinc-100">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#991b1b] font-semibold">
                  Backend
                </h3>
                <div className="text-xs md:text-sm text-zinc-700 space-y-1">
                  <p className="font-medium text-zinc-900">NestJS · Node.js · Express.js</p>
                  <p className="text-zinc-600">TypeScript · TypeORM · JWT · bcrypt · Python · n8n</p>
                </div>
              </div>

              {/* Bases de Datos */}
              <div className="space-y-2 p-3.5 rounded-xl bg-zinc-50/60 border border-zinc-100">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#991b1b] font-semibold">
                  Bases de datos
                </h3>
                <div className="text-xs md:text-sm text-zinc-700 space-y-1">
                  <p className="font-medium text-zinc-900">PostgreSQL · MongoDB · SQL</p>
                  <p className="text-zinc-600">Firebase · Modelado relacional y no relacional</p>
                </div>
              </div>

              {/* Herramientas y otros */}
              <div className="space-y-2 p-3.5 rounded-xl bg-zinc-50/60 border border-zinc-100">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#991b1b] font-semibold">
                  Herramientas &amp; Metodologías
                </h3>
                <div className="text-xs md:text-sm text-zinc-700 space-y-1">
                  <p className="font-medium text-zinc-900">Git · GitHub · n8n · Cloudinary</p>
                  <p className="text-zinc-600">Jira · Trello · Axios · C++ · C# · PHP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
