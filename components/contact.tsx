"use client"

import { useState } from "react"
import { Mail, Send, Github, MapPin, CheckCircle2, Sparkles, Phone, MessageSquare, Linkedin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 4000)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Contacto Directo</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Ponte en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
              Contacto
            </span>
          </h2>

          <div className="w-20 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full" />

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            ¿Buscas una desarrolladora Full Stack con foco en Backend? ¡Escríbeme para colaborar o integrar tu equipo!
          </p>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid md:grid-cols-12 gap-10">
          {/* Contact Details (Col 5) */}
          <div className="md:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-card/60 backdrop-blur-md border border-border/80 space-y-6 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Información de Contacto
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Anahí Mailén Díaz — Concordia, Entre Ríos, Argentina.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Email</p>
                    <a
                      href="mailto:anahimailendiaz@gmail.com"
                      className="text-sm font-bold text-foreground hover:text-primary transition-colors"
                    >
                      anahimailendiaz@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Teléfono / WhatsApp</p>
                    <a
                      href="https://wa.me/543454044839"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-foreground hover:text-primary transition-colors"
                    >
                      +54 3454044839
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50">
                  <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Ubicación</p>
                    <p className="text-sm font-bold text-foreground">Concordia, Entre Ríos, Argentina</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50">
                  <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-500">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Perfiles Profesionales</p>
                    <div className="flex gap-4 pt-1">
                      <a
                        href="https://github.com/Anahidia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-foreground hover:text-primary transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form (Col 7) */}
          <div className="md:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-card/60 backdrop-blur-md border border-border/80 space-y-6 shadow-lg"
            >
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Tu Nombre Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. María García"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground text-sm outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  required
                  placeholder="nombre@empresa.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground text-sm outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Mensaje o Consulta
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Cuéntame sobre tu proyecto o propuesta laboral..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground text-sm outline-none transition-all resize-none"
                />
              </div>

              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-sm font-semibold flex items-center justify-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>¡Mensaje enviado con éxito! Te responderé a la brevedad.</span>
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensaje</span>
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
