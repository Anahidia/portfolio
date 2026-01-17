import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { getProjectById, projects } from "../../../lib/projects-data"

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
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a Proyectos</span>
          </Link>

          <div className="flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-accent transition-colors"
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
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
        <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Technologies */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Tecnologías Utilizadas</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Descripción del Proyecto</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed">{project.fullDescription}</p>
            </div>
          </div>

          {/* Gallery */}
          {project.gallery.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Galería de Imágenes</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.gallery.map((image, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden border border-border">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          
        </div>
      </section>
    </div>
  )
}
