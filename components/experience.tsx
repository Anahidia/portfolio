"use client"

import { Briefcase, Calendar, Building2, CheckCircle2, Terminal, Sparkles, GraduationCap } from "lucide-react"

interface ExperienceItem {
  id: string
  role: string
  company: string
  type: string
  period: string
  location?: string
  description: string
  achievements: string[]
  skills: string[]
  iconColor: string
}

const experiences: ExperienceItem[] = [
  {
    id: "uconnect",
    role: "Desarrolladora Full Stack (Backend-focused)",
    company: "UConnect (Proyecto propio)",
    type: "Software de Gestión Hotelera",
    period: "2025 - Actualidad",
    location: "Concordia, Argentina",
    description:
      "Desarrollo integral de software de gestión hotelera orientado a centralizar y optimizar la operación diaria de hoteles (habitaciones, incidencias, denuncias, fichaje laboral, turnos, legajos del personal, departamentos y productos).",
    achievements: [
      "Implementó una automatización con n8n e Inteligencia Artificial que gestiona reservas de hotel por WhatsApp, integrada con un backend propio en NestJS y MongoDB.",
      "Desarrolló el software de gestión centralizando operaciones diarias (habitaciones, incidencias, canal ético de denuncias, fichaje laboral y productos).",
      "Colaboró en frontend y backend creando nuevos módulos y manteniendo la arquitectura desacoplada.",
      "Participó activamente en el diseño de las distintas secciones del sistema y en la estética general de la plataforma."
    ],
    skills: ["NestJS", "TypeScript", "MongoDB", "n8n", "OpenAI / IA", "React", "Next.js", "Redux", "Tailwind CSS"],
    iconColor: "from-purple-500 to-indigo-500"
  },
  {
    id: "whaber",
    role: "Desarrolladora Full Stack (Pasante)",
    company: "Whaber",
    type: "Pasantía Profesional",
    period: "Agosto 2025 - Noviembre 2025",
    description:
      "Desarrollo Full Stack enfocado en resolución de errores, mantenimiento de plataforma y creación de componentes UI en React.",
    achievements: [
      "Colaboró en la resolución de bugs y el mantenimiento activo del proyecto.",
      "Analizó y comprendió código existente para mejorar la eficiencia del flujo de desarrollo.",
      "Desarrolló componentes en React siguiendo buenas prácticas y estándares de la industria."
    ],
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Git", "GitHub"],
    iconColor: "from-emerald-500 to-teal-500"
  },
  {
    id: "nomad-ride",
    role: "Desarrolladora Full Stack (Pasante)",
    company: "Nomad Ride",
    type: "Pasantía Profesional",
    period: "Mayo 2025 - Julio 2025",
    description:
      "Participación activa en el desarrollo de una plataforma de alquiler de vehículos dirigida a nómades digitales.",
    achievements: [
      "Desarrolló la plataforma utilizando Next.js, React, TypeScript y Tailwind CSS.",
      "Implementó funcionalidades completas de cliente y servidor, integrando Firebase para almacenamiento y autenticación.",
      "Trabajó en equipo utilizando Git, GitHub y Notion para la gestión de tareas y control de versiones."
    ],
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase", "Git", "Notion"],
    iconColor: "from-blue-500 to-cyan-500"
  },
  {
    id: "finnegan",
    role: "Participante Orientación Empresarial",
    company: "Finnegan",
    type: "Formación & Metodologías",
    period: "Junio 2023",
    description:
      "Capacitación intensiva sobre el funcionamiento interno, metodologías de trabajo en equipo y procesos en empresas de software.",
    achievements: [
      "Adquirió conocimientos sobre metodologías de trabajo colaborativo en la industria de tecnología.",
      "Certificada por completar el curso de orientación empresarial de software."
    ],
    skills: ["Metodologías Ágiles", "Trabajo en Equipo", "Procesos IT"],
    iconColor: "from-amber-500 to-orange-500"
  }
]

export default function Experience() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Background glowing blur effects */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trayectoria Profesional</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Experiencia{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
              Laboral
            </span>
          </h2>

          <div className="w-20 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full" />

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed pt-2">
            Desarrollo de software propio, pasantías tecnológicas y proyectos de impacto con NestJS, React, Next.js e Inteligencia Artificial.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-border/60 ml-4 md:ml-36 space-y-12 pl-6 md:pl-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Node Dot */}
              <div
                className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-gradient-to-r ${exp.iconColor} p-1 ring-4 ring-background shadow-lg transition-transform duration-300 group-hover:scale-125`}
              >
                <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.iconColor}`} />
                </div>
              </div>

              {/* Date Badge on Desktop Left */}
              <div className="hidden md:block absolute -left-40 top-1.5 w-32 text-right">
                <span className="text-xs font-bold text-muted-foreground bg-secondary/30 border border-border/50 px-2.5 py-1 rounded-md inline-block">
                  {exp.period}
                </span>
              </div>

              {/* Card Container */}
              <div className="rounded-2xl bg-card/60 backdrop-blur-md border border-border/80 p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 pb-4 border-b border-border/40">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1 flex-wrap">
                      <span className="flex items-center gap-1.5 font-semibold text-foreground">
                        <Building2 className="w-4 h-4 text-primary" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5 md:hidden">
                        <Calendar className="w-4 h-4 text-accent" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-primary" />
                    Responsabilidades & Logros Clave:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground/90 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies List */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-secondary/40 border border-border/60 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
