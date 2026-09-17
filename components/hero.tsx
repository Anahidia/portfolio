"use client"

import { Sparkles, ArrowRight, Github, Mail, FolderGit2, Terminal, Code2, Cpu, MapPin, Phone } from "lucide-react"
import JumpText from "./ui/jump-text"

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const handleContactClick = () => {
    const element = document.getElementById("contact")
    element?.scrollIntoView({ behavior: "smooth" })
    setActiveSection("contact")
  }

  const handleProjectsClick = () => {
    const element = document.getElementById("projects")
    element?.scrollIntoView({ behavior: "smooth" })
    setActiveSection("projects")
  }

  return (
    <section className="min-h-screen pt-28 pb-16 px-6 flex items-center bg-gradient-to-br from-background via-background to-secondary/10 relative overflow-hidden">
      {/* Background Decorative Grids & Glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side - Text Content (Col 7) */}
        <div className="md:col-span-7 space-y-8">
          <div className="space-y-4">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary shadow-sm cursor-default">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-xs md:text-sm font-semibold tracking-wide">
                Disponible para Roles Backend / Full Stack & Proyectos
              </p>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Hola, soy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                Anahí Mailén Díaz
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-bold text-foreground/90 flex items-center gap-2 flex-wrap">
              <span>Full Stack Developer</span>
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-xs md:text-sm">
                Backend-focused
              </span>
            </h2>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
              Especializada en <span className="text-foreground font-semibold">NestJS, TypeORM, Node.js y bases de datos SQL / NoSQL</span>, con amplia experiencia en Frontend con <span className="text-foreground font-semibold">React y Next.js</span>. Creadora de UConnect e integraciones con n8n e Inteligencia Artificial para WhatsApp.
            </p>

            {/* Location & Contact fast icons */}
            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-muted-foreground pt-1">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-primary" />
                Concordia, Entre Ríos, Argentina
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Mail className="w-4 h-4 text-accent" />
                anahimailendiaz@gmail.com
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={handleContactClick}
              className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <JumpText text="Contáctame" />
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleProjectsClick}
              className="group px-7 py-3.5 rounded-xl bg-card border border-border hover:border-primary/50 text-foreground font-semibold hover:bg-secondary/40 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <FolderGit2 className="w-4 h-4 text-primary" />
              <JumpText text="Ver Proyectos" />
            </button>

            <a
              href="https://github.com/Anahidia"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-card border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground hover:bg-secondary/40 hover:scale-105 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Core Tech Stack Icons */}
          <div className="pt-6 border-t border-border/50 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" />
              Tecnologías Destacadas (CV):
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                { name: "NestJS", color: "bg-red-500/10 border-red-500/30 text-red-400" },
                { name: "TypeORM", color: "bg-orange-500/10 border-orange-500/30 text-orange-400" },
                { name: "TypeScript", color: "bg-blue-500/10 border-blue-500/30 text-blue-400" },
                { name: "React / Next.js", color: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400" },
                { name: "n8n + IA", color: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" },
                { name: "PostgreSQL / MongoDB", color: "bg-purple-500/10 border-purple-500/30 text-purple-400" }
              ].map((tech) => (
                <span
                  key={tech.name}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-semibold shadow-xs hover:scale-105 transition-transform ${tech.color}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Photo Card & Floating Badges (Col 5) */}
        <div className="md:col-span-5 flex justify-center items-center relative">
          {/* Main Photo Card Container */}
          <div className="relative w-72 h-72 md:w-88 md:h-88 group">
            {/* Glowing Backdrop Border */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-500 animate-gradient" />

            {/* Image Wrapper */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-card border-2 border-border shadow-2xl">
              <img
                src="/foto de perfil.jpg"
                alt="Anahí Mailén Díaz - Full Stack Developer (Backend-focused)"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Card 1: Focus */}
            <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-md border border-border/80 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Especialidad</p>
                <p className="text-sm font-bold text-foreground">Backend-focused</p>
              </div>
            </div>

            {/* Floating Card 2: AI & n8n */}
            <div className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-md border border-border/80 p-3.5 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Automatizaciones</p>
                <p className="text-sm font-bold text-foreground">n8n & IA WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
