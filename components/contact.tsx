"use client"

import { useState } from "react"
import { ArrowRight, Mail, Phone, MapPin, Github, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setIsSubmitting(true)
    setErrorMsg("")
    setSubmitted(false)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => {
          setSubmitted(false)
        }, 6000)
      } else {
        setErrorMsg(data.error || "Hubo un problema al enviar el mensaje.")
      }
    } catch (err) {
      console.error(err)
      setErrorMsg("Error de conexión al enviar el mensaje.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="pt-20 md:pt-28 pb-12 px-6 bg-white border-t border-zinc-100">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-xs font-mono tracking-wider">
          <span className="text-[#991b1b] font-semibold">04 / CONTACTO</span>
        </div>

        {/* Contact Grid: Heading & Info on Left, Clean Form on Right */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Col 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 font-mono leading-tight">
                ¿Construimos algo juntos?
              </h2>

              <p className="text-zinc-600 text-base md:text-lg">
                Abierta a roles Backend / Full Stack y nuevos proyectos.
              </p>
            </div>

            {/* Quick Contact Information */}
            <div className="space-y-3.5 pt-2 font-mono text-xs">
              <a
                href="mailto:anahimailendiaz@gmail.com"
                className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200/80 bg-zinc-50/60 hover:bg-zinc-100/80 hover:border-zinc-300 text-zinc-700 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#991b1b] shrink-0" />
                <span className="truncate">anahimailendiaz@gmail.com</span>
              </a>

              <a
                href="https://wa.me/543454044839"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200/80 bg-zinc-50/60 hover:bg-zinc-100/80 hover:border-zinc-300 text-zinc-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#991b1b] shrink-0" />
                <span>+54 3454044839 (WhatsApp)</span>
              </a>

              <a
                href="https://github.com/Anahidia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200/80 bg-zinc-50/60 hover:bg-zinc-100/80 hover:border-zinc-300 text-zinc-700 transition-colors"
              >
                <Github className="w-4 h-4 text-[#991b1b] shrink-0" />
                <span>github.com/Anahidia</span>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200/80 bg-zinc-50/60 text-zinc-600">
                <MapPin className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>Concordia, Entre Ríos, Argentina</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form (Col 7) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-2xl border border-zinc-200/90 bg-zinc-50/60 shadow-2xs space-y-5"
            >
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-medium">
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-zinc-200 focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b] text-zinc-900 text-sm outline-none transition-all placeholder:text-zinc-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-zinc-200 focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b] text-zinc-900 text-sm outline-none transition-all placeholder:text-zinc-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-medium">
                  Mensaje
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Cuéntame sobre tu proyecto o propuesta laboral..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-zinc-200 focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b] text-zinc-900 text-sm outline-none transition-all placeholder:text-zinc-400 resize-none"
                />
              </div>

              {submitted && (
                <div className="p-3.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs md:text-sm font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>¡Mensaje enviado con éxito! Me comunicaré contigo a la brevedad.</span>
                </div>
              )}

              {errorMsg && (
                <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs md:text-sm font-medium flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-medium text-sm transition-all shadow-xs flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Enviando mensaje...</span>
                  </>
                ) : (
                  <>
                    <span>Escribime</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer (Screenshot 5) */}
        <footer className="border-t border-zinc-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <p>© 2026 Anahí Mailén Díaz</p>
          <p>Hecho con intención, no con magia.</p>
        </footer>
      </div>
    </section>
  )
}
