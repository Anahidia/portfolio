"use client"

import { useState } from "react"
import Link from "next/link"
import { projects, Project } from "../lib/projects-data"
import { ArrowUpRight } from "lucide-react"

const categories = ["Todos", "Full Stack", "Frontend", "Backend"]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const filteredProjects = selectedCategory === "Todos"
    ? projects
    : projects.filter((p) => {
        if (selectedCategory === "Full Stack") return p.category === "Fullstack"
        if (selectedCategory === "Frontend") return p.category === "Frontend" || p.technologies.includes("React") || p.technologies.includes("Next.js")
        if (selectedCategory === "Backend") return p.category === "Backend" || p.technologies.includes("NestJS") || p.technologies.includes("FastAPI")
        return true
      })

  return (
    <section id="projects" className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Tech Strip */}
        <div className="border-y border-zinc-200 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs">
          <span className="text-zinc-400 uppercase tracking-wider font-medium">
            TECNOLOGÍAS PRINCIPALES
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-zinc-800 font-medium text-xs md:text-sm">
            <span>React</span>
            <span>Next.js</span>
            <span>NestJS</span>
            <span>TypeScript</span>
            <span>PostgreSQL</span>
            <span>MongoDB</span>
            <span>TypeORM</span>
            <span>n8n + IA</span>
          </div>
        </div>

        {/* Section 01 Header & Category Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-[#991b1b] font-mono text-xl md:text-2xl font-bold">01 /</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 font-mono">
              Proyectos seleccionados
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm transition-all ${
                    isActive
                      ? "bg-zinc-100 text-zinc-900 font-semibold border border-zinc-300 shadow-2xs"
                      : "text-zinc-500 hover:text-zinc-900 font-medium"
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* 3-Column Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const formattedIndex = project.numberCode || `/${String(idx + 1).padStart(2, "0")}`

            return (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group rounded-xl bg-zinc-50/70 hover:bg-zinc-100/60 border border-zinc-200/90 hover:border-zinc-300 p-3.5 transition-all duration-200 flex flex-col justify-between shadow-2xs hover:shadow-xs"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-zinc-200/60 border border-zinc-200 mb-4">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  </div>

                  {/* Top info line: number & tag */}
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-zinc-400 font-medium">{formattedIndex}</span>
                    <span className="text-zinc-500">{project.tagLine || project.category}</span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg md:text-xl text-zinc-900 group-hover:text-[#991b1b] transition-colors leading-snug">
                      {project.shortTitle || project.title}
                    </h3>
                    <p className="text-zinc-600 text-xs md:text-sm leading-relaxed line-clamp-2">
                      {project.shortDescription || project.description}
                    </p>
                  </div>
                </div>

                {/* Footer link line */}
                <div className="pt-4 mt-4 border-t border-zinc-200/70 flex items-center justify-between text-sm font-medium text-zinc-800 group-hover:text-[#991b1b] transition-colors">
                  <span>Ver proyecto</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
