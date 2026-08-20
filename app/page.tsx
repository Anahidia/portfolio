"use client"

import { useState } from "react"
import GalaxyBackground from "../components/galaxy-background"
import Navigation from "../components/navigation"
import Hero from "../components/hero"
import About from "../components/about"
import Experience from "../components/experience"
import Projects from "../components/projects"
import Contact from "../components/contact"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <main className="min-h-screen bg-[#030014] text-foreground selection:bg-primary/30 selection:text-primary relative">
      {/* Galaxy Canvas Background */}
      <GalaxyBackground />

      {/* Main Content Sections (Z-10 to float above backdrop) */}
      <div className="relative z-10">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

        <section id="home">
          <Hero setActiveSection={setActiveSection} />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </main>
  )
}
