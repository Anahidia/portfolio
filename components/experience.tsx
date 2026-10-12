"use client"

import { GraduationCap, Briefcase, Languages } from "lucide-react"

interface ExperienceItem {
  period: string
  tag: string
  title: string
  company: string
  description: string
  highlights: string[]
}

const professionalExperience: ExperienceItem[] = [
  {
    period: "2025 — ACTUALIDAD",
    tag: "Proyecto propio",
    company: "UConnect",
    title: "Desarrolladora Full Stack — UConnect",
    description: "Software de gestión hotelera orientado a centralizar y optimizar la operación diaria de un hotel.",
    highlights: [
      "Gestión de habitaciones, incidencias, denuncias (canal ético), fichaje laboral, turnos, legajos del personal, departamentos y productos.",
      "Colaboración en frontend y backend junto al equipo de desarrollo, creando nuevos módulos y manteniendo los existentes.",
      "Participación activa en el diseño de las distintas secciones del sistema y en la estética general de la plataforma.",
      "Implementación de automatización con n8n que, mediante inteligencia artificial, gestiona reservas de hotel por WhatsApp, integrada con backend propio en NestJS y MongoDB.",
    ],
  },
  {
    period: "AGOSTO 2025 — NOVIEMBRE 2025",
    tag: "Pasantía",
    company: "Whaber",
    title: "Desarrolladora Full Stack — Whaber",
    description: "Pasantía profesional con foco en desarrollo y mantenimiento de producto.",
    highlights: [
      "Colaboración en la resolución de bugs y el mantenimiento preventivo y correctivo del proyecto.",
      "Análisis y comprensión de código existente para mejorar la eficiencia del desarrollo.",
      "Desarrollo de componentes en React siguiendo buenas prácticas y patrones de diseño.",
    ],
  },
  {
    period: "MAYO 2025 — JULIO 2025",
    tag: "Pasantía",
    company: "Nomad Ride",
    title: "Desarrolladora Full Stack — Nomad Ride",
    description: "Participación activa en el desarrollo de una plataforma de alquiler de vehículos para nómades digitales.",
    highlights: [
      "Desarrollo de interfaz y funcionalidades con Next.js, React, TypeScript y Tailwind CSS.",
      "Implementación de funcionalidades completas de cliente y servidor, integrando Firebase para almacenamiento y autenticación.",
      "Trabajo en equipo utilizando Git, GitHub y Notion para gestión de tareas y control de versiones.",
    ],
  },
  {
    period: "26 — 30 JUNIO 2023",
    tag: "Orientación empresarial",
    company: "Finnegan",
    title: "Participante — Curso en Finnegan",
    description: "Introducción al funcionamiento y procesos de una empresa de desarrollo de software.",
    highlights: [
      "Adquisición de conocimiento sobre metodologías de trabajo en equipo en la industria de tecnología.",
      "Certificada por completar el curso de orientación empresarial.",
    ],
  },
]

const educationItems = [
  {
    period: "MAYO 2024 — DICIEMBRE 2024",
    title: "Full Stack Web Developer",
    institution: "Henry Bootcamp",
    description:
      "Formación intensiva de más de 800 horas en tecnologías full stack: React, Next.js, Redux, Node.js, Express, NestJS, TypeORM, PostgreSQL y metodologías ágiles (Scrum).",
  },
  {
    period: "2017 — 2023",
    title: "Técnica en Computación",
    institution: "Escuela Técnica N°2 (Secundaria)",
    description:
      "Formación técnica orientada a lógica de programación, algoritmos, arquitectura de sistemas, hardware y desarrollo de software.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 px-6 bg-white border-t border-zinc-100">
      <div className="max-w-6xl mx-auto space-y-16">
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

        {/* 1. Experiencia Profesional */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#991b1b] font-semibold border-b border-zinc-100 pb-3">
            <Briefcase className="w-4 h-4" />
            <span>Experiencia Profesional</span>
          </div>

          <div className="divide-y divide-zinc-200">
            {professionalExperience.map((exp, idx) => (
              <div key={idx} className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-start">
                {/* Left Column (Period & Tag) */}
                <div className="md:col-span-4 space-y-1">
                  <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#991b1b]">
                    {exp.period}
                  </p>
                  <p className="text-xs md:text-sm text-zinc-400">{exp.tag}</p>
                </div>

                {/* Right Column (Title, Description & Bullet points) */}
                <div className="md:col-span-8 space-y-3">
                  <div>
                    <h3 className="font-bold text-base md:text-lg text-zinc-900">{exp.title}</h3>
                    <p className="text-zinc-600 text-sm mt-0.5">{exp.description}</p>
                  </div>

                  <ul className="space-y-2 text-xs md:text-sm text-zinc-600 pt-1">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <span className="text-[#991b1b] font-mono text-sm leading-tight shrink-0">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Educación & Idiomas Grid */}
        <div className="grid lg:grid-cols-12 gap-12 pt-8 border-t border-zinc-200 items-start">
          {/* Educación (Col 8) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#991b1b] font-semibold border-b border-zinc-100 pb-3">
              <GraduationCap className="w-4 h-4" />
              <span>Educación &amp; Certificaciones</span>
            </div>

            <div className="divide-y divide-zinc-200">
              {educationItems.map((edu, idx) => (
                <div key={idx} className="py-6 grid sm:grid-cols-12 gap-4 items-start">
                  <div className="sm:col-span-4">
                    <p className="text-xs font-mono font-semibold text-[#991b1b] uppercase">
                      {edu.period}
                    </p>
                    <p className="text-xs text-zinc-400 font-medium">{edu.institution}</p>
                  </div>
                  <div className="sm:col-span-8 space-y-1">
                    <h4 className="font-bold text-sm md:text-base text-zinc-900">{edu.title}</h4>
                    <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Idiomas & Info Adicional (Col 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#991b1b] font-semibold border-b border-zinc-100 pb-3">
              <Languages className="w-4 h-4" />
              <span>Idiomas</span>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50/70 border border-zinc-200 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between py-1.5 border-b border-zinc-200/70">
                <span className="font-medium text-zinc-900">Español</span>
                <span className="text-[#991b1b] font-semibold">Nativo</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="font-medium text-zinc-900">Inglés</span>
                <span className="text-zinc-500 font-semibold">Nivel A2 (Básico)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
