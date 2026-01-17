"use client"

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const handleContactClick = () => {
    const element = document.getElementById("contact")
    element?.scrollIntoView({ behavior: "smooth" })
    setActiveSection("contact")
  }

  return (
    <section className="min-h-screen pt-20 px-6 flex items-center bg-gradient-to-br from-background via-background to-secondary/5">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
              <p className="text-sm font-medium text-secondary">Bienvenido a mi portafolio</p>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Desarrollo Web{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                Full Stack
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Creo soluciones web modernas, escalables y de alto rendimiento. Especializado en React, Next.js y
              tecnologías backend robustas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleContactClick}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Contáctame
            </button>
            <button className="px-8 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/5 transition-colors">
              Ver Proyectos
            </button>
          </div>

          {/* Skills Badges */}
          <div className="pt-4 space-y-4">
            <p className="text-sm font-semibold text-muted-foreground">Tecnologías:</p>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-secondary/20 border border-secondary/40 text-sm font-medium text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Image Placeholder */}
        <div className="flex justify-center items-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-gradient-to-br from-primary to-accent shadow-2xl">
            <img src="/foto de perfil.jpg" alt="Perfil profesional" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
