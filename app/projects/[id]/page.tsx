import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { getProjectById, projects } from "../../../lib/projects-data"
import ProjectGalleryLightbox from "../../../components/project-gallery-lightbox"

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
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-zinc-600 hover:text-[#991b1b] transition-colors group font-mono text-sm"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Volver a Proyectos</span>
          </Link>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#991b1b] hover:bg-[#7f1d1d] text-white text-xs md:text-sm font-medium transition-colors shadow-xs"
              >
                <span>Ver Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-200 bg-white hover:border-[#991b1b] text-zinc-800 hover:text-[#991b1b] text-xs md:text-sm font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12 md:py-16 space-y-12">
        {/* Title Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            {project.numberCode && (
              <span className="text-[#991b1b] font-semibold">{project.numberCode}</span>
            )}
            {project.tagLine && (
              <span className="text-zinc-500 font-medium">· {project.tagLine}</span>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 font-mono">
            {project.title}
          </h1>

          <p className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-3xl font-sans">
            {project.description}
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="p-6 md:p-8 rounded-2xl bg-zinc-50/70 border border-zinc-200 space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#991b1b] font-semibold">
            Tecnologías &amp; Herramientas
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-white border border-zinc-200 text-zinc-800 text-xs font-mono font-medium shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6 md:p-8 rounded-2xl bg-white border border-zinc-200 space-y-4">
          <h2 className="text-xl font-bold text-zinc-900 font-mono">
            Detalles y Arquitectura
          </h2>
          <div className="text-zinc-700 text-sm md:text-base leading-relaxed whitespace-pre-line space-y-2 font-sans">
            {project.fullDescription}
          </div>
        </div>

        {/* Interactive Gallery & Lightbox with Click-to-Zoom and Carousel Navigation */}
        <ProjectGalleryLightbox
          title={project.shortTitle || project.title}
          mainImage={project.image}
          gallery={project.gallery}
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <p>© 2026 Anahí Mailén Díaz</p>
          <Link href="/#projects" className="hover:text-[#991b1b] transition-colors">
            ← Volver a proyectos
          </Link>
        </div>
      </footer>
    </div>
  )
}
