"use client"

import { useState } from "react"
import Navigation from "../components/navigation"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Experience from "../components/experience"
import Contact from "../components/contact"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-red-100 selection:text-red-900">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero setActiveSection={setActiveSection} />
      <Projects />
      <About />
      <Experience />
      <Contact />
    </main>
  )
}
