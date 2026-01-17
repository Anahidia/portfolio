"use client"

import { useState } from "react"
import Navigation from "../components/navigation"
import Hero from "../components/hero"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <section id="home">
        <Hero setActiveSection={setActiveSection} />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  )
}
