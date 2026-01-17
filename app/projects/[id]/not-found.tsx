import Link from "next/link"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-3xl font-bold">Proyecto No Encontrado</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Lo sentimos, el proyecto que buscas no existe o ha sido eliminado.
        </p>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-accent transition-colors"
        >
          <Home className="w-5 h-5" />
          Volver al Portafolio
        </Link>
      </div>
    </div>
  )
}
