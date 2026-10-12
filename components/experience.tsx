"use client"

interface ExperienceRow {
  period: string
  tag: string
  title: string
  description: string
  subDescription?: string
}

const experienceRows: ExperienceRow[] = [
  {
    period: "2025 — ACTUALIDAD",
    tag: "Proyecto propio",
    title: "Desarrolladora Full Stack · UConnect",
    description:
      "Desarrollo integral de una plataforma hotelera, arquitectura desacoplada y automatización de reservas por WhatsApp con n8n e inteligencia artificial.",
  },
  {
    period: "EXPERIENCIA PROFESIONAL",
    tag: "Pasantías",
    title: "Whaber & Nomad Ride",
    description:
      "Experiencia en desarrollo frontend, trabajo en equipo y construcción de aplicaciones con React y Next.js.",
  },
  {
    period: "2024 / 2017 — 2023",
    tag: "Formación",
    title: "Full Stack Web Developer & Técnica en Computación",
    description: "Henry Bootcamp · Mayo a diciembre de 2024",
    subDescription: "Escuela Técnica N.º 2 · 2017 a 2023",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 px-6 bg-white border-t border-zinc-100">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[#991b1b] font-mono text-xl md:text-2xl font-bold">03 /</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 font-mono">
              Experiencia &amp; formación
            </h2>
          </div>

          <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
            APRENDER. CONSTRUIR. ITERAR.
          </span>
        </div>

        {/* Rows Container */}
        <div className="divide-y divide-zinc-200 border-t border-zinc-200">
          {experienceRows.map((row, idx) => (
            <div key={idx} className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-start">
              {/* Left Column (Period & Tag) */}
              <div className="md:col-span-4 space-y-1">
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#991b1b]">
                  {row.period}
                </p>
                <p className="text-xs md:text-sm text-zinc-400">{row.tag}</p>
              </div>

              {/* Right Column (Title & Description) */}
              <div className="md:col-span-8 space-y-1.5">
                <h3 className="font-bold text-base md:text-lg text-zinc-900">{row.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{row.description}</p>
                {row.subDescription && (
                  <p className="text-zinc-400 text-xs md:text-sm">{row.subDescription}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
