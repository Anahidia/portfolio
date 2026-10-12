"use client"

import { useEffect, useState } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const navLinks = [
  { id: "projects", label: "Proyectos" },
  { id: "about", label: "Sobre mí" },
  { id: "experience", label: "Experiencia" },
]

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = ["home", "projects", "about", "experience", "contact"]
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [setActiveSection])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setActiveSection(id)
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-zinc-200 py-3 shadow-xs"
          : "bg-white/60 backdrop-blur-xs py-4 md:py-5 border-b border-zinc-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo: [a.] anahí /dev */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2.5 text-base font-bold text-zinc-900 group focus:outline-none"
        >
          <span className="w-7 h-7 rounded bg-[#991b1b] text-white font-mono text-xs font-bold flex items-center justify-center transition-transform group-hover:scale-105">
            a.
          </span>
          <span className="flex items-center gap-1 tracking-tight">
            <span>anahí</span>
            <span className="font-mono text-zinc-400 font-normal">/dev</span>
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-sm transition-colors ${
                activeSection === link.id
                  ? "text-zinc-900 font-semibold"
                  : "text-zinc-600 hover:text-zinc-900 font-normal"
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* CTA: Hablemos ↗ */}
          <button
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-zinc-800 bg-white border border-zinc-200 rounded-lg hover:border-[#991b1b] hover:text-[#991b1b] transition-all shadow-2xs"
          >
            <span>Hablemos</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 rounded-lg border border-zinc-200"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-6 py-4 space-y-3 shadow-md animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`block w-full text-left py-2 text-sm ${
                activeSection === link.id
                  ? "text-[#991b1b] font-semibold"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => scrollTo("contact")}
            className="w-full mt-2 flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium text-white bg-[#991b1b] hover:bg-[#7f1d1d] rounded-lg transition-colors"
          >
            <span>Hablemos</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  )
}
