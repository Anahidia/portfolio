import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Github, Sparkles } from "lucide-react"
import { getProjectById, projects } from "../../../lib/projects-data"
import GalaxyBackground from "../../../components/galaxy-background"

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#030014] text-foreground relative">
      <GalaxyBackground />

      <div className="relative z-10">
        {/* Header Navigation */}
        <header className="sticky top-0 z-50 bg-[#030014]/80 backdrop-blur-md border-b border-border/60">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/#projects"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold text-sm">Volver a Proyectos</span>
            </Link>

            <div className="flex gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border/80 hover:border-primary/50 text-foreground font-semibold transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <section className="relative h-[350px] md:h-[450px] overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/60 to-transparent" />

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10">
            <div className="max-w-4xl mx-auto">
              {project.category && (
                <span className="inline-block px-3 py-1 mb-3 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold">
                  {project.category}
                </span>
              )}
              <h1 className="text-3xl md:text-5xl font-black text-foreground mb-3">{project.title}</h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">{project.description}</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Technologies */}
            <div className="p-6 rounded-2xl bg-card/60 backdrop-blur-md border border-border/80">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Tecnologías & Stack Utilizado
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-lg bg-primary/10 text-primary font-semibold text-sm border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="p-8 rounded-2xl bg-card/60 backdrop-blur-md border border-border/80 space-y-4">
              <h2 className="text-2xl font-bold">Detalles & Arquitectura del Proyecto</h2>
              <div className="prose prose-invert max-w-none text-muted-foreground text-base leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </div>
            </div>

            {/* Gallery */}
            {project.gallery.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Galería de Capturas</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.gallery.map((image, idx) => (
                    <div key={idx} className="rounded-2xl overflow-hidden border border-border/80 bg-card shadow-lg">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} captura ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
