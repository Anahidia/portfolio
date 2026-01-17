export default function About() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Acerca de Mí</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* About Text */}
          <div className="md:col-span-2 space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
            Soy una desarrolladora web apasionada por el diseño limpio y el código ordenado. 
            Disfruto crear aplicaciones dinámicas y escalables, cuidando los detalles y la
            experiencia del usuario en cada proyecto. Me motiva transformar ideas en soluciones 
            funcionales y acompañar a mis clientes durante todo el proceso de desarrollo. 
            </p>

            <p className="text-lg leading-relaxed">
            Mi principal fortaleza está en el desarrollo backend, donde cuento
            con conocimientos sólidos y amplia práctica trabajando con Node.js,
            bases de datos relacionales y lógica de negocio. Al mismo tiempo,
            me desenvuelvo con seguridad en el frontend utilizando React y Next.js,
            lo que me permite entregar productos completos, bien estructurados y
            fáciles de mantener.
            </p>

            <p className="text-lg leading-relaxed">
            Trabajo de manera responsable y organizada,
            priorizando la comunicación clara y el cumplimiento de objetivos. Busco construir relaciones de confianza con cada cliente
            y ofrecer soluciones eficientes, escalables y pensadas para crecer.
            </p>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            {[
              { number: "1", label: "Años Experiencia" },
              { number: "3", label: "Proyectos Completados" },
              { number: "3", label: "Clientes Satisfechos" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
