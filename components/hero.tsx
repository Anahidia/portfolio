"use client"

import { ArrowDown, ArrowUpRight } from "lucide-react"

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setActiveSection(id)
  }

  return (
    <section id="home" className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Status Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
          <span className="text-zinc-400 tracking-wider">
            PORTFOLIO / DESARROLLO DE SOFTWARE
          </span>
          <div className="flex items-center gap-2 text-zinc-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Disponible para nuevos proyectos</span>
          </div>
        </div>

        {/* Main Grid: Left Intro + Right Portrait & Code Card */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-2">
          {/* Left Column: Heading, Subtitle, Paragraph, CTAs (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.08] font-mono">
              Anahí Mailén
              <br />
              <span className="text-[#991b1b] inline-flex items-center">
                Díaz
                <span className="animate-cursor-blink font-mono font-normal">_</span>
              </span>
            </h1>

            <div className="space-y-3 pt-2">
              <h2 className="text-xl md:text-2xl font-bold text-zinc-900">
                Full Stack Developer.{" "}
                <span className="text-[#991b1b] font-medium">Backend first.</span>
              </h2>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed max-w-xl">
                Conecto datos, sistemas y personas. Desarrollo aplicaciones con bases sólidas y
                automatizaciones que resuelven problemas reales.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button
                onClick={() => scrollTo("projects")}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-medium text-sm transition-all shadow-xs"
              >
                <span>Explorar proyectos</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="flex items-center gap-1.5 text-zinc-800 hover:text-[#991b1b] font-medium text-sm transition-colors group"
              >
                <span>Contactar</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Profile Picture + Monospace Code Box (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Profile Avatar Card */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-200/80 bg-zinc-50/70 shadow-2xs">
              <div className="relative shrink-0">
                <img
                  src="/foto de perfil.jpg"
                  alt="Anahí Mailén Díaz"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover border border-zinc-200 shadow-xs"
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-zinc-900 text-base">Anahí Mailén Díaz</p>
                <p className="text-xs font-mono text-[#991b1b] font-medium">Full Stack · Backend Developer</p>
                <p className="text-xs text-zinc-500">Concordia, Entre Ríos, Argentina</p>
              </div>
            </div>

            {/* Code Box matching Screenshot 1 */}
            <div className="border-l-2 border-[#991b1b] pl-5 py-2 font-mono text-xs md:text-sm space-y-3">
              <p className="text-[#991b1b] font-medium">// un poco sobre mí</p>
              <div className="space-y-1.5 text-zinc-700">
                <p>
                  <span className="text-zinc-500">enfoque: </span>
                  <span className="text-zinc-900 font-semibold">&quot;backend &amp; automatización&quot;</span>
                </p>
                <p>
                  <span className="text-zinc-500">stack: </span>
                  <span className="text-zinc-900 font-semibold">[NestJS, TypeScript, React]</span>
                </p>
                <p>
                  <span className="text-zinc-500">ubicación: </span>
                  <span className="text-zinc-900 font-semibold">&quot;Entre Ríos, Argentina&quot;</span>
                </p>
                <p>
                  <span className="text-zinc-500">motivación: </span>
                  <span className="text-zinc-900 font-semibold">&quot;construir, aprender, mejorar&quot;</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
