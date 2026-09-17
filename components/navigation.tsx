"use client"

import { useEffect, useState, useRef } from "react"
import { Home as HomeIcon, User, Briefcase, FolderGit2, Mail, Menu, X, Sparkles } from "lucide-react"
import JumpText from "./ui/jump-text"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const navItems = [
  { id: "home", label: "Inicio", icon: HomeIcon },
  { id: "about", label: "Sobre mí", icon: User },
  { id: "experience", label: "Experiencia", icon: Briefcase },
  { id: "projects", label: "Proyectos", icon: FolderGit2 },
  { id: "contact", label: "Contacto", icon: Mail },
]

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 })
  const navContainerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Map<string, HTMLButtonElement>>(new Map())

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)

      // Auto update active section based on scroll position
      const sections = navItems.map((item) => item.id)
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

  // Update Electric Nav indicator position when activeSection changes or window resizes
  useEffect(() => {
    const updateIndicator = () => {
      const activeEl = itemRefs.current.get(activeSection)
      const container = navContainerRef.current
      if (activeEl && container) {
        const containerRect = container.getBoundingClientRect()
        const activeRect = activeEl.getBoundingClientRect()
        setIndicatorStyle({
          left: activeRect.left - containerRect.left,
          width: activeRect.width,
        })
      }
    }

    updateIndicator()
    window.addEventListener("resize", updateIndicator)
    return () => window.removeEventListener("resize", updateIndicator)
  }, [activeSection])

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setActiveSection(id)
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick("home")}
          className="group flex items-center gap-2 text-2xl font-black text-foreground hover:text-primary transition-colors focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-accent p-0.5 shadow-md group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <span className="flex items-center">
            <JumpText text="Anahí" />
            <span className="text-primary font-bold ml-1">.Dev</span>
          </span>
        </button>

        {/* Desktop Links with Electric Nav */}
        <div
          ref={navContainerRef}
          className="hidden md:flex relative items-center gap-1 bg-secondary/20 backdrop-blur-sm p-1.5 rounded-full border border-border/50"
        >
          {/* Electric Arc Indicator */}
          {indicatorStyle.width > 0 && (
            <div
              className="electric-arc-indicator"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
              }}
            />
          )}

          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id

            return (
              <button
                key={item.id}
                ref={(el) => {
                  if (el) itemRefs.current.set(item.id, el)
                  else itemRefs.current.delete(item.id)
                }}
                onClick={() => handleNavClick(item.id)}
                className={`group flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative z-10 ${
                  isActive
                    ? "bg-primary/90 text-primary-foreground shadow-md shadow-primary/25 font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`} />
                <JumpText text={item.label} />
              </button>
            )
          })}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 hover:bg-secondary/60 rounded-xl border border-border/50 transition-colors text-foreground"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 py-4 space-y-2 shadow-2xl animate-in slide-in-from-top duration-300">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`group w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
                }`}
              >
                <Icon className="w-5 h-5" />
                <JumpText text={item.label} />
              </button>
            )
          })}
        </div>
      )}
    </nav>
  )
}
