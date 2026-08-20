"use client"

import { User, Code2, Database, Layout, Sparkles, GraduationCap, ShieldCheck, Rocket, Cpu, Terminal, Wrench } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: Database,
      title: "Backend & Bases de Datos",
      description: "NestJS, Node.js, Express.js, TypeScript, TypeORM, JWT, bcrypt, Python, n8n. PostgreSQL, SQL, MongoDB."
    },
    {
      icon: Layout,
      title: "Frontend & Interfaces UI",
      description: "React, React Native, Next.js, Redux, Context API, Angular, Tailwind CSS, Bootstrap, HTML, CSS."
    },
    {
      icon: Cpu,
      title: "Automatización & IA",
      description: "Flujos automatizados en n8n integrados con Inteligencia Artificial para gestión de reservas y mensajería en WhatsApp."
    },
    {
      icon: Wrench,
      title: "Herramientas & Otros Lenguajes",
      description: "Git, GitHub, Trello, Jira, Firebase, Cloudinary, Axios. Nivel de programación en C++, C# y PHP."
    }
  ]

  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Perfil Profesional</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Acerca de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
              Mí
            </span>
          </h2>

          <div className="w-20 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full" />
        </div>

        {/* Narrative Text Grid */}
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-12 space-y-6 bg-card/60 backdrop-blur-md border border-border/80 p-8 md:p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              Full Stack Developer con foco en Backend
            </h3>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Soy Full Stack Developer especializada en Backend con <span className="text-foreground font-semibold">NestJS, TypeORM y bases de datos SQL / NoSQL</span>, sumando experiencia profesional en Frontend con <span className="text-foreground font-semibold">React y Next.js</span>. 
              Desarrollé <span className="text-foreground font-semibold">UConnect</span>, un software de gestión hotelera centralizado en el que integré automatizaciones con <span className="text-foreground font-semibold">n8n e Inteligencia Artificial</span> para reservas de WhatsApp.
            </p>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Combino la experiencia de pasantías profesionales en <span className="text-foreground font-semibold">Whaber y Nomad Ride</span> con proyectos backend construidos durante mi formación en el <span className="text-foreground font-semibold">Bootcamp de Henry</span> (E-commerce y Sistema de Gestión de Gimnasio). Me destaco por mi capacidad de resolución de problemas, trabajo en equipo y comunicación efectiva para entregar soluciones escalables.
            </p>

            {/* Education Badge Bar */}
            <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30 border border-border/50">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Full Stack Web Developer</p>
                  <p className="text-xs text-muted-foreground">Henry Bootcamp (Mayo 2024 - Diciembre 2024)</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30 border border-border/50">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Técnica en Computación</p>
                  <p className="text-xs text-muted-foreground">Escuela Técnica N°2 (2017 - 2023)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/70 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
