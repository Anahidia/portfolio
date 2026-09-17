"use client"

import { useState } from "react"
import Link from "next/link"
import { projects, Project } from "../lib/projects-data"
import { FolderGit2, ExternalLink, Github, Sparkles, ArrowUpRight, Code2, Tag } from "lucide-react"
import JumpText from "./ui/jump-text"

const categories = ["Todos", "Fullstack", "Backend", "Frontend", "Python / AI"]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const filteredProjects = selectedCategory === "Todos"
    ? projects
    : projects.filter((p) => p.category === selectedCategory || (selectedCategory === "Backend" && p.technologies.includes("NestJS")))

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portafolio de Trabajos</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Proyectos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
              Destacados
            </span>
          </h2>

          <div className="w-20 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full" />

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed pt-2">
            Una selección de aplicaciones web Fullstack, motores de procesamiento y proyectos desarrollados con tecnologías modernas.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`group px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                  : "bg-card border border-border/70 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-secondary/40"
              }`}
            >
              <JumpText text={cat} />
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden bg-card/70 backdrop-blur-md border border-border/80 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div>
                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Category Pill Tag */}
                  {project.category && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border/60 text-xs font-bold text-primary">
                      {project.category}
                    </div>
                  )}

                  {/* Links top right overlay */}
                  <div className="absolute top-3 right-3 flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-background/80 backdrop-blur-md text-foreground hover:text-primary hover:scale-110 transition-all"
                        aria-label="Ver en GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 5).map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2.5 py-1 rounded-md text-xs bg-primary/10 text-primary border border-primary/20 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 rounded-md text-xs bg-secondary/40 text-muted-foreground font-medium">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-6 pb-6 pt-2">
                <Link
                  href={`/projects/${project.id}`}
                  className="group w-full py-3 rounded-xl bg-secondary/40 hover:bg-primary border border-border/80 hover:border-primary text-foreground hover:text-primary-foreground font-semibold transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-xs"
                >
                  <JumpText text="Ver Detalle del Proyecto" />
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
