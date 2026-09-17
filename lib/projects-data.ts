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
    id: "uconnect-sistema-gestion-hotelera",
    title: "UConnect – Sistema de Gestión Hotelera & Automatización IA",
    description:
      "Plataforma integral de gestión hotelera (NestJS, MongoDB, Next.js, Redux, Tailwind) con automatización de reservas por WhatsApp mediante n8n e IA, canal ético, fichaje laboral y control de operaciones.",
    fullDescription:
      "Sistema completo de gestión hotelera y automatización de operaciones diarias desarrollado Fullstack.\n\n" +
      "Características Técnicas & Módulos:\n" +
      "• Gestión Operativa & Habitaciones: Control de habitaciones, estado, inventario, productos, pedidos, incidencias y mantenimiento del hotel.\n" +
      "• Recursos Humanos & Fichaje: Módulo de registro laboral, fichaje de personal, gestión de turnos/cuadrantes, horarios, solicitudes de días libres, certificados y legajos documentales.\n" +
      "• Canal Ético & Encuestas: Módulo seguro para recepción y tratamiento de denuncias internas (Canal Ético) y encuestas de satisfacción.\n" +
      "• Automatización WhatsApp con n8n e IA: Integración de flujo inteligente para reservas y atención automatizada de huéspedes interconectado con backend en NestJS y MongoDB.\n" +
      "• Paneles de Control (Admin & Empleados): Dashboards dinámicos e intuitivos para administración estratégica y vistas simplificadas para colaboradores.",
    technologies: [
      "NestJS",
      "TypeScript",
      "MongoDB",
      "n8n",
      "OpenAI / IA",
      "Next.js",
      "React",
      "Redux",
      "Tailwind CSS"
    ],
    image: "/UConnect/panelDeControl.png",
    gallery: [
      "/UConnect/panelDeControl.png",
      "/UConnect/panelDeControl-2.png",
      "/UConnect/inicioEmpleado.png",
      "/UConnect/gestionHabitacion.png",
      "/UConnect/habitacionForm.png",
      "/UConnect/registroLaboral.png",
      "/UConnect/reporteEntrada.png",
      "/UConnect/cuadranteLaboral.png",
      "/UConnect/cuadranteLaboralPersonal.png",
      "/UConnect/horariosForm.png",
      "/UConnect/incidencias.png",
      "/UConnect/incidenciaForm.png",
      "/UConnect/inventario.png",
      "/UConnect/inventarioForm.png",
      "/UConnect/pedidos.png",
      "/UConnect/productoForm.png",
      "/UConnect/canalEtico.png",
      "/UConnect/denunciaForm.png",
      "/UConnect/noticias.png",
      "/UConnect/noticiasForm.png",
      "/UConnect/noticiaPrevisual.png",
      "/UConnect/encuestas.png",
      "/UConnect/encuestaForm.png",
      "/UConnect/certificados.png",
      "/UConnect/certificadosForm.png",
      "/UConnect/documentacion.png",
      "/UConnect/documentacionForm.png",
      "/UConnect/cierreDeCajaForm.png",
      "/UConnect/solicitudDiaLibre.png",
      "/UConnect/diaLibreForm.png",
      "/UConnect/loguin.png",
      "/UConnect/register.png",
      "/UConnect/RegisterAdmin.png",
      "/UConnect/registerEmpleado.png"
    ],
    featured: true,
    category: "Fullstack"
  },
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
    image: "/convertidorMarkdown/Convertidor Markdown → HTML-principal.png",
    gallery: [
      "/convertidorMarkdown/Convertidor Markdown → HTML-principal.png",
      "/convertidorMarkdown/Convertidor Markdown → HTML- diferente estilos.png",
      "/convertidorMarkdown/Convertidor Markdown → HTML-codigo HTML.png",
      "/convertidorMarkdown/Convertidor Markdown → HTML-css personalizado.png",
      "/convertidorMarkdown/Convertidor Markdown → HTML-desplegable.png"
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
    image: "/climaSync/ClimaSync-dialluvia.png",
    gallery: [
      "/climaSync/ClimaSync-dialluvia.png",
      "/climaSync/ClimaSync-lluviaDetalles.png",
      "/climaSync/ClimaSync-diaSol.png",
      "/climaSync/ClimaSync-diaSolDetalles.png"
    ],
    githubUrl: "https://github.com/Anahidia/climaSync",
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
    image: "/fullStore/FullStore-layout.png",
    gallery: [
      "/fullStore/FullStore-layout.png",
      "/fullStore/FullStore-layout2.png",
      "/fullStore/FullStore-login.png",
      "/fullStore/FullStore-invetario.png",
      "/fullStore/FullStore-preducts.png",
      "/fullStore/FullStore-ventas.png",
      "/fullStore/FullStore-AdminDashboard.png",
      "/fullStore/FullStore-VentasPage.png",
      "/fullStore/FullStore-categoria.png",
      "/fullStore/FullStore-crearCategoria.png",
      "/fullStore/FullStore-crearProduct.png",
      "/fullStore/FullStore-crearProduct2.png",
      "/fullStore/FullStore-crearProduct3.png",
      "/fullStore/FullStore-productCreado.png",
      "/fullStore/FullStore-registerAdmin.png",
      "/fullStore/FullStore-registerAdmin2.png",
      "/fullStore/FullStore-dashboar2.png",
      "/fullStore/FullStore-dashboard3.png",
      "/fullStore/FullStore-empleado.png",
      "/fullStore/FullStore-empleadoPageVenta.png",
      "/fullStore/FullStore-empleado-carritoDeCompras.png",
      "/fullStore/FullStore-empleadoVentaCompleta.png",
      "/fullStore/FullStore-empleado-ventasyDevolucion.png",
      "/fullStore/FullStore-empleadoFiltros.png",
      "/fullStore/FullStore-empleado-encargos.png",
      "/fullStore/FullStore-empleado-encargosCompletados.png",
      "/fullStore/FullStore-empleado-encargosPage.png",
      "/fullStore/FullStore-empleadoencargso2.png",
      "/fullStore/FullStore-empleado-cierreDeCaja.png",
      "/fullStore/FullStore-empleado-fichaje.png"
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
    image: "/gym/gimHome.png",
    gallery: [
      "/gym/gimHome.png",
      "/gym/gimLogin.png",
      "/gym/gimRegis.png",
      "/gym/gimClasList.png",
      "/gym/gimClass.png",
      "/gym/gimStripe.png",
      "/gym/gimChat.png"
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
