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
}

export const projects: Project[] = [
  {
    id: "sistema-gestion-gimnasio",
    title: "Sistema de Gestión de Gimnasio",
    description:
      "Sistema backend para la gestión de clases, usuarios, entrenadores y reservas en un gimnasio.",
    fullDescription:
      "Sistema de gestión integral para gimnasios desarrollado en equipo. Implementé la lógica backend para la administración de clases con manejo de cupos, reservas y cancelaciones, notificaciones de reservas, creación, edición y eliminación de clases. También desarrollé la gestión de entrenadores vinculados a usuarios, autenticación con JWT, control de roles y lógica de baneo de usuarios. El sistema está diseñado para ser escalable y mantener la integridad de los datos.",
    technologies: [
    "NestJS","Next.js","NodeJs","Tailwind",
    "TypeScript", "TypeORM", "PostgreSQL", "JWT",
    "bicrypt", "Stripe","nodemailer","git","GitHub"
    ],
    image: "/justDoItGym-logo.png",
    gallery: ["/gimHome.png","/gimLogin.png","/gimRegis.png","/gimClasList.png","/gimClass.png","/gimStripe.png"],
    githubUrl: "https://github.com/abogadatos/JustDoIt-Gym-Management-system",
  },
  {
  id: "sistema-gestion-ventas",
  title: "Sistema de Gestión de Ventas",
  description:
    "Sistema para la gestión de productos, ventas, clientes y stock.",
  fullDescription:
    "Sistema de gestión de ventas desarrollado full stack. Implementé la lógica para la creación, edición y listado de productos con carga de imágenes mediante Cloudinary, manejo de stock y variantes como talles. El sistema permite registrar ventas con múltiples ítems, validaciones de datos, cálculo automático de totales y control de inventario. Incluye filtros y búsqueda de productos, integración frontend-backend, validaciones con DTOs y Class Validator, y una arquitectura pensada para escalar y mantener consistencia en los datos.",
  technologies: [
    "Next.js",
    "NestJS",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "TypeORM",
    "Cloudinary",
    "JWT",
    "Class Validator",
    "Tailwind CSS",
    "Git",
    "GitHub"
  ],
  image: "/7Diaz-carritoDeCompras.png",
  gallery: [
    "/7Diaz-Login.png",
    "/7Diaz-Register.png",
    "/7Diaz-Page-Vendedor.png",
    "/7Diaz-Filtros.png",
    "/7Diaz-carritoDeCompras.png",
    "/7Diaz-crearEncargos.png",
    "/7Diaz-encargosvendedor.png",
    "/7Diaz-adminPage.png",
    "/7Diaz-crearProducto.png",
    "/7Diaz-AdminProducts.png",
    "/7Diaz-adminVentas.png",
    "/7Diaz-categories.png",
    "/7Diaz-adminencargos.png"
  ],
  githubUrl: "https://github.com/tu-usuario/tu-repo-ventas",
},
{
  id: "pasantia-nomadride",
  title: "Pasantía Backend – NomadRide",
  description:
    "Desarrollo backend para plataforma de alquiler de vehículos orientada a nómades digitales.",
  fullDescription:
    "Durante mi pasantía en NomadRide trabajé principalmente en el desarrollo del frontend, participando activamente en la construcción de la interfaz y en toda la lógica que conecta la aplicación con el backend, que en este proyecto estaba basado en Firebase. Mi trabajo no se limitó solo a lo visual, sino que involucró desarrollar componentes funcionales, estructurar vistas y asegurar que los datos se mostraran y actualizaran correctamente en la aplicación.\n\nMe encargué de crear y mantener componentes reutilizables, implementar la lógica necesaria para consumir y enviar datos al backend, manejar estados de la aplicación y validar información. Además, participé en el diseño del esquema de la base de datos, pensando cómo organizar la información de manera clara y escalable para que el frontend pudiera interactuar correctamente con Firebase.\n\nUna parte clave de la experiencia fue trabajar en la conexión entre las vistas y la base de datos, asegurando que la información se reflejara correctamente en tiempo real y que la aplicación respondiera bien ante distintos escenarios, como cargas, errores o datos incompletos. Esto me permitió entender cómo se vinculan realmente el frontend y el backend en una aplicación real.\n\nLa pasantía en NomadRide fue muy importante para mi crecimiento profesional porque me permitió trabajar en un proyecto real, con un stack moderno, enfrentar problemas concretos y mejorar tanto mis habilidades técnicas como mi forma de pensar la arquitectura y la lógica de una aplicación completa.",
  technologies: ["TypeScript", "NestJS", "PostgreSQL", "TypeORM"],
  image: "/nomad.jpg",
  gallery: [],
},

  {
  id: "pasantia-whaber",
  title: "Pasantía  – Whaber",
  description:
    "Experiencia en frontend trabajando sobre una plataforma de pedidos de taxis en un entorno profesional.",
  fullDescription:
    "Durante mi pasantía en Whaber trabajé principalmente en tareas del lado del frontend, integrándome a un proyecto ya existente y aprendiendo a moverme dentro de una base de código real. Gran parte de mi trabajo consistió en entender cómo estaba estructurada la aplicación, cómo se relacionaban los componentes entre sí y cómo se implementaban las distintas vistas.\n\nMe enfoqué mucho en la lectura y análisis del código para comprender la lógica detrás de cada funcionalidad, lo que me permitió realizar ajustes, mejoras y pequeñas implementaciones manteniendo la coherencia del proyecto. Esta experiencia fue clave para adquirir buenas prácticas de desarrollo, como escribir código más ordenado, reutilizar componentes y respetar convenciones ya definidas.\n\nAdemás, el trabajo en equipo y la comunicación con otros desarrolladores fueron fundamentales para entender decisiones previas y coordinar cambios. La pasantía en Whaber me ayudó a ganar confianza trabajando sobre proyectos reales y a entender cómo se desarrolla software en un entorno profesional.",
  technologies: [
    "TypeScript", "Node.js", "NestJS","Next.js"
    , "React native", "Tailwind CSS",
    "git", "GitHub"
  
  ],
  image: "/whaber.png",
  gallery: [],
},

]


export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}
