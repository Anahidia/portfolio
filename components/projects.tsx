import Link from "next/link"
import { projects } from "../lib/projects-data"

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Proyectos Destacados</h2>
          <div className="w-16 h-1 bg-linear-to-r
 from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-lg overflow-hidden bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-linear-to-r
 from-primary/20 to-accent/20">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span key={techIdx} className="px-2 py-1 rounded text-xs bg-primary/10 text-primary font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <Link
                  href={`/projects/${project.id}`}
                  className="block w-full mt-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-accent transition-colors text-center"
                >
                  Ver Proyecto
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
