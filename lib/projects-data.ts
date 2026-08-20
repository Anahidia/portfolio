export interface Project {
  id: string
  title: string
  description: string
  fullDescription: string
  technologies: string[]
  image: string
  gallery: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  category?: "Fullstack" | "Backend" | "Frontend" | "Python / AI"
}

export const projects: Project[] = [
 
  {
    id: "convertidor-markdown-html-regex",
    title: "Convertidor Markdown a HTML con Regex (Python)",
    description:
      "Herramienta web con motor custom en Python (FastAPI) basado exclusivamente en Expresiones Regulares para convertir Markdown a HTML con editor CSS y vista previa en vivo.",
    fullDescription:
      "Sistema completo de conversión de Markdown a HTML desarrollado Fullstack sin librerías externas de Markdown de terceros.\n\n" +
      "Características Técnicas:\n" +
      "• Motor Regex Custom (Python): Parser desarrollado artesanalmente con el módulo 're' de Python para procesar encabezados (H1-H6), negrita/cursiva, tachado, resaltado, código en línea, listas ordenadas/desordenadas, citas, enlaces, imágenes y tablas Markdown. Incluye protección Regex para evitar alteración de sintaxis dentro de bloques de código ```.\n" +
      "• Motor de Plantillas CSS: 5 temas preseteados (Clean Modern, Dark Cyber, Academic Paper, GitHub Style, Warm Sepia) e inyección de CSS personalizado suministrado por el usuario.\n" +
      "• Interfaz Split-Pane (Next.js): Editor Markdown con barra de atajos a la izquierda y vista previa HTML renderizada a la derecha.\n" +
      "• Visor Educativo Regex (Regex Inspector): Modal interactivo que desglosa y explica cada expresión regular utilizada en el parseo.\n" +
      "• Exportación Autónoma: Generación y descarga directa de archivos .html listos con estilos CSS embebidos.",
    technologies: [
      "Python",
      "FastAPI",
      "Regex (re)",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Pytest"
    ],
    image: "/Convertidor Markdown → HTML-principal.png",
    gallery: [
      "/Convertidor Markdown → HTML-principal.png",
      "/Convertidor Markdown → HTML- diferente estilos.png",
      "/Convertidor Markdown → HTML-codigo HTML.png",
      "/Convertidor Markdown → HTML-css personalizado.png",
      "/Convertidor Markdown → HTML-desplegable.png"
    ],
    featured: true,
    githubUrl: "https://github.com/Anahidia/Convertidor-Markdown-HTML",
    category: "Python / AI"
  },
  {
    id: "app-clima-mascota-naranjito",
    title: "App de Clima con Mascota Animada 'Naranjito'",
    description:
      "Aplicación meteorológica interactiva con un personaje gatuno SVG/CSS que reacciona al clima actual, pronóstico expandible de 7 días y score de aptitud para salir a correr.",
    fullDescription:
      "Aplicación de clima interactiva que combina precisión en datos meteorológicos con una experiencia visual dinámica y amigable.\n\n" +
      "Puntos Clave del Proyecto:\n" +
      "• Mascota Dinámica 'Naranjito': Personaje gatuno en SVG/CSS animado que reacciona en tiempo real según el estado del clima (sol con gafas, lluvia con paraguas, nube mullida, nieve con gorro, tormenta con rayos, noche con luna).\n" +
      "• Pronóstico Interactivo de 7 Días: Tarjetas expandibles con animaciones Framer Motion que despliegan detalles de temperatura por hora, precipitación, viento, índice UV y recomendación para salir a entrenar (Running Fitness Score).\n" +
      "• Integración Decoupled: Backend en Python (FastAPI) para consumir APIs meteorológicas y calcular aptitud deportiva + Frontend en Next.js con Tailwind CSS y Lucide Icons.",
    technologies: [
      "Next.js",
      "React",
      "Python",
      "FastAPI",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide Icons"
    ],
    image: "/ClimaSync-dialluvia.png",
    gallery: [
      "/ClimaSync-dialluvia.png",
      "/ClimaSync-lluviaDetalles.png",
      "/ClimaSync-diaSol.png",
      "/ClimaSync-diaSolDetalles.png"
    ],
    githubUrl:"https://github.com/Anahidia/climaSync",
    featured: true,
    category: "Fullstack"
  },
  {
    id: "sistema-gestion-ventas",
    title: "FullStore – Sistema de Gestión de Ventas & E-commerce App",
    description:
      "Aplicación de e-commerce y gestión de ventas Fullstack con NestJS, TypeORM, PostgreSQL y Next.js. Incluye roles de usuario/admin, Cloudinary, fichaje de empleados y devoluciones.",
    fullDescription:
      "Sistema de gestión de ventas y e-commerce desarrollado Fullstack con arquitectura robusta en NestJS y PostgreSQL.\n\n" +
      "Funcionalidades Principales:\n" +
      "• Casos de uso de Usuario y Administrador: Registro, autenticación JWT con bcrypt, carrito, creación y cancelación de órdenes, y gestión integral de productos y categorías.\n" +
      "• Manejo de Stock y Variantes: Gestión de imágenes con Cloudinary, seeders con QueryBuilder y filtros por categoría.\n" +
      "• Dashboard Admin Violeta/Neón (#090714): Interfaz con métricas en tiempo real e indicador de tienda.\n" +
      "• Gestión de Empleados & Fichaje de Turnos: Entrada/salida (Check-in/Check-out), asignación de departamentos y módulo de Devoluciones con reembolso de stock.",
    technologies: [
      "NestJS",
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "Cloudinary",
      "JWT",
      "bcrypt",
      "Class Validator",
      "Tailwind CSS"
    ],
    image: "/FullStore-layout.png",
    gallery: [
      "/FullStore-layout.png",
      "/FullStore-layout2.png",
      "/FullStore-login.png",
      "/FullStore-invetario.png",
      "/FullStore-preducts.png",
      "/FullStore-ventas.png",
      "/FullStore-AdminDashboard.png",
      "/FullStore-VentasPage.png",
      "/FullStore-categoria.png",
      "/FullStore-crearCategoria.png",
      "/FullStore-crearProduct.png",
      "/FullStore-crearProduct2.png",
      "/FullStore-crearProduct3.png",
      "/FullStore-productCreado.png",
      "/FullStore-registerAdmin.png",
      "/FullStore-registerAdmin2.png",
      "/FullStore-dashboar2.png",
      "/FullStore-dashboard3.png",
      "/FullStore-empleado.png",
      "/FullStore-empleadoPageVenta.png",
      "/FullStore-empleado-carritoDeCompras.png",
      "/FullStore-empleadoVentaCompleta.png",
      "/FullStore-empleado-ventasyDevolucion.png",
      "/FullStore-empleadoFiltros.png",
      "/FullStore-empleado-encargos.png",
      "/FullStore-empleado-encargosCompletados.png",
      "/FullStore-empleado-encargosPage.png",
      "/FullStore-empleadoencargso2.png",
      "/FullStore-empleado-cierreDeCaja.png",
      "/FullStore-empleado-fichaje.png"
    ],
    githubUrl: "https://github.com/Anahidia/gestorDeVentas",
    featured: true,
    category: "Fullstack"
  },
  {
    id: "sistema-gestion-gimnasio",
    title: "Gym JustDoIt App – Sistema de Gestión de Gimnasios",
    description:
      "Sistema backend y frontend para la administración de clases, reservas con manejo de cupos, membresías, entrenadores y pasarela de pagos con Stripe.",
    fullDescription:
      "Sistema de gestión integral para gimnasios desarrollado durante el Bootcamp de Henry con backend en NestJS y PostgreSQL.\n\n" +
      "Funcionalidades:\n" +
      "• Roles de Usuario, Asociado, Entrenador y Administrador para clases, reservas, membresías y métricas financieras.\n" +
      "• Reservas de clases con actualización de cupos en tiempo real al confirmar o cancelar.\n" +
      "• Creación, edición y eliminación de clases vinculando horarios y disponibilidad.\n" +
      "• Perfiles de entrenadores vinculados a usuarios, autenticación JWT con bcrypt, seeders de reseñas y lógica de baneo.",
    technologies: [
      "NestJS",
      "TypeScript",
      "TypeORM",
      "PostgreSQL",
      "Next.js",
      "React",
      "JWT",
      "bcrypt",
      "Stripe",
      "Tailwind CSS"
    ],
    image: "/gimHome.png",
    gallery: [
      "/gimHome.png",
      "/gimLogin.png",
      "/gimRegis.png",
      "/gimClasList.png",
      "/gimClass.png",
      "/gimStripe.png"
    ],
    githubUrl: "https://github.com/abogadatos/JustDoIt-Gym-Management-system",
    featured: false,
    category: "Backend"
  },
  {
    id: "pasantia-nomadride",
    title: "Pasantía Full Stack – Nomad Ride",
    description:
      "Plataforma de alquiler de vehículos desarrollada en Next.js, React, TypeScript y Tailwind CSS con autenticación y almacenamiento en Firebase.",
    fullDescription:
      "Durante mi pasantía en Nomad Ride (Mayo 2025 - Julio 2025) participé activamente en el desarrollo de la plataforma de alquiler de vehículos.\n\n" +
      "Principales Aportes:\n" +
      "• Desarrollo con Next.js, React, TypeScript y Tailwind CSS.\n" +
      "• Implementación de funcionalidades completas de cliente y servidor integrando Firebase para almacenamiento y autenticación.\n" +
      "• Trabajo colaborativo utilizando Git, GitHub y Notion para gestión de tareas y control de versiones.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase", "Git", "GitHub", "Notion"],
    image: "/nomad.jpg",
    gallery: [],
    featured: false,
    category: "Fullstack"
  },
  {
    id: "pasantia-whaber",
    title: "Pasantía Full Stack – Whaber",
    description:
      "Mantenimiento, desarrollo de componentes en React y resolución de bugs en plataforma tecnológica.",
    fullDescription:
      "Durante mi pasantía en Whaber (Agosto 2025 - Noviembre 2025) colaboré como Desarrolladora Full Stack.\n\n" +
      "Principales Aportes:\n" +
      "• Resolución de bugs y mantenimiento activo del proyecto.\n" +
      "• Análisis y comprensión de código existente para mejorar la eficiencia del desarrollo.\n" +
      "• Desarrollo de componentes en React siguiendo buenas prácticas de software.",
    technologies: ["React", "TypeScript", "Next.js", "JavaScript", "Tailwind CSS", "Git", "GitHub"],
    image: "/whaber.png",
    gallery: [],
    featured: false,
    category: "Frontend"
  }
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}
