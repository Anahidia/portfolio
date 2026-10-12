"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, X, ZoomIn, Image as ImageIcon } from "lucide-react"

interface ProjectGalleryLightboxProps {
  title: string
  mainImage: string
  gallery: string[]
}

export default function ProjectGalleryLightbox({
  title,
  mainImage,
  gallery,
}: ProjectGalleryLightboxProps) {
  // Combine main image and gallery without duplicates
  const allImages = Array.from(new Set([mainImage, ...gallery].filter(Boolean)))
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedIndex(index)
  }

  const closeLightbox = () => {
    setSelectedIndex(null)
  }

  const showPrev = useCallback(() => {
    if (selectedIndex === null) return
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : allImages.length - 1))
  }, [selectedIndex, allImages.length])

  const showNext = useCallback(() => {
    if (selectedIndex === null) return
    setSelectedIndex((prev) => (prev! < allImages.length - 1 ? prev! + 1 : 0))
  }, [selectedIndex, allImages.length])

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") showPrev()
      if (e.key === "ArrowRight") showNext()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = "auto"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedIndex, showPrev, showNext])

  return (
    <div className="space-y-12">
      {/* 1. Main Cover Image (Clickable) */}
      <div className="space-y-2">
        <div
          onClick={() => openLightbox(0)}
          className="group relative rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100 shadow-xs cursor-zoom-in"
        >
          <img
            src={mainImage || "/placeholder.svg"}
            alt={title}
            className="w-full max-h-[520px] object-cover transition-transform duration-300 group-hover:scale-[1.01]"
          />

          {/* Hover overlay indicator */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-white/95 text-zinc-900 px-4 py-2 rounded-xl text-xs md:text-sm font-medium shadow-md flex items-center gap-2">
              <ZoomIn className="w-4 h-4 text-[#991b1b]" />
              <span>Clic para ampliar imagen ({allImages.length} disponibles)</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Gallery Grid */}
      {gallery.length > 0 && (
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-zinc-900 font-mono flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-[#991b1b]" />
              <span>Galería de Capturas ({gallery.length})</span>
            </h2>
            <span className="text-xs font-mono text-zinc-400">
              Haz clic en cualquier imagen para verla en pantalla completa
            </span>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((img, idx) => {
              // find actual index in allImages
              const fullIndex = allImages.indexOf(img) !== -1 ? allImages.indexOf(img) : idx

              return (
                <div
                  key={idx}
                  onClick={() => openLightbox(fullIndex)}
                  className="group relative rounded-xl overflow-hidden border border-zinc-200 bg-zinc-50 shadow-2xs aspect-[16/10] cursor-zoom-in transition-all hover:border-[#991b1b] hover:shadow-md"
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`${title} captura ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />

                  {/* Top Badge: number */}
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/60 text-white text-[10px] font-mono">
                    #{String(idx + 1).padStart(2, "0")}
                  </div>

                  {/* Hover overlay icon */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 text-zinc-900 flex items-center justify-center shadow-lg">
                      <ZoomIn className="w-5 h-5 text-[#991b1b]" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* 3. Fullscreen Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-6 select-none animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Lightbox Top Header Bar */}
          <div
            className="flex items-center justify-between text-white pb-3 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-0.5">
              <h3 className="text-sm font-semibold text-white/90 truncate max-w-[280px] md:max-w-md font-mono">
                {title}
              </h3>
              <p className="text-xs font-mono text-zinc-400">
                Imagen {selectedIndex + 1} de {allImages.length} · Usa las flechas para navegar
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={closeLightbox}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
                aria-label="Cerrar visor"
              >
                <X className="w-5 h-5" />
                <span className="hidden sm:inline">Cerrar (Esc)</span>
              </button>
            </div>
          </div>

          {/* Lightbox Main Stage */}
          <div
            className="relative flex-1 flex items-center justify-center my-2 max-h-[75vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={showPrev}
              className="absolute left-2 md:left-4 z-20 p-3 rounded-full bg-black/60 hover:bg-[#991b1b] text-white border border-white/10 hover:border-transparent transition-all shadow-xl"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Current Active Image */}
            <div className="relative max-h-full max-w-full flex items-center justify-center p-2">
              <img
                src={allImages[selectedIndex]}
                alt={`${title} imagen ${selectedIndex + 1}`}
                className="max-h-[70vh] md:max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={showNext}
              className="absolute right-2 md:right-4 z-20 p-3 rounded-full bg-black/60 hover:bg-[#991b1b] text-white border border-white/10 hover:border-transparent transition-all shadow-xl"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

          {/* Lightbox Bottom Thumbnail Strip */}
          <div
            className="pt-2 border-t border-white/10 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 overflow-x-auto py-2 px-1 max-w-4xl mx-auto scrollbar-thin">
              {allImages.map((img, idx) => {
                const isActive = selectedIndex === idx
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedIndex(idx)}
                    className={`shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden transition-all ${
                      isActive
                        ? "ring-2 ring-[#991b1b] ring-offset-2 ring-offset-black scale-105 opacity-100"
                        : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Miniatura ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
