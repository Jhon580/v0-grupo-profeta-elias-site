import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Hammer, BookOpen, MessageCircle, Users } from "lucide-react"

export default function ApostoladoPage() {
  const projects = [
    {
      icon: Heart,
      name: "Aprisco",
      description:
        "Apoio e doações para orfanatos e comunidades carentes. Levamos o amor prático de Cristo àqueles que mais precisam, cuidando dos órfãos e viúvas conforme o mandamento bíblico.",
      image: "/children-in-orphanage-care-and-love.jpg",
    },
    {
      icon: Hammer,
      name: "Ferro Afia o Ferro",
      description:
        "Trabalhos manuais, reconstrução, eventos missionários e ajuda humanitária. Como ferro afia ferro, assim um homem afia o outro através do serviço prático e da edificação mútua.",
      image: "/volunteers-doing-construction-work-helping-communi.jpg",
    },
    {
      icon: BookOpen,
      name: "Clube do Livro Profeta Elias",
      description:
        "Leituras guiadas de obras clássicas cristãs e contrarrevolucionárias. Estudamos os grandes pensadores da tradição cristã para formar mentes sólidas e corações devotos.",
      image: "/classic-christian-books-study-group.jpg",
    },
    {
      icon: MessageCircle,
      name: "Emaús",
      description:
        "Espaço de debate e reflexão teológica profunda. Como os discípulos no caminho de Emaús, buscamos compreender as Escrituras e ter nossos corações aquecidos pela verdade.",
      image: "/theological-discussion-group-studying-bible.jpg",
    },
    {
      icon: Users,
      name: "Areópago",
      description:
        "Debates filosóficos e culturais à luz da cosmovisão cristã. Como Paulo no Areópago de Atenas, levamos o Evangelho ao encontro da cultura contemporânea.",
      image: "/philosophical-debate-classical-setting.jpg",
    },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground">Apostolado e Projetos</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Nossa fé se manifesta em ação. Através de projetos sociais, intelectuais e evangelísticos, levamos o amor
              de Cristo ao mundo.
            </p>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-center">
              O Grupo de Estudos Profeta Elias não se limita à formação intelectual. Compreendemos que a fé verdadeira
              se manifesta em obras, e que o amor de Cristo nos compele a servir ao próximo e a transformar a cultura.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Nossos projetos abrangem desde o cuidado prático com os necessitados até a formação intelectual e o debate
              cultural, sempre fundamentados na verdade bíblica e na tradição cristã histórica.
            </p>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              Nossos Projetos
            </h2>

            <div className="space-y-16">
              {projects.map((project, index) => {
                const Icon = project.icon
                const isEven = index % 2 === 0

                return (
                  <div
                    key={project.name}
                    className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className={isEven ? "md:order-1" : "md:order-2"}>
                      <Card className="p-8 border-2 hover:border-primary/50 transition-colors h-full">
                        <Icon className="h-12 w-12 text-primary mb-4" />
                        <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">{project.name}</h3>
                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      </Card>
                    </div>

                    <div className={isEven ? "md:order-2" : "md:order-1"}>
                      <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-border">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 border-2 border-primary/30 bg-gradient-to-br from-muted/50 to-background text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">Apoie Esta Causa</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Ao sustentar a verdade, você ajuda a manter viva a chama do testemunho cristão. Suas doações permitem
                que continuemos nossos projetos sociais e evangelísticos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/doacoes">Fazer uma Doação</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 font-semibold bg-transparent hover:bg-primary/10">
                  <Link href="/participacao">Participar como Voluntário</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
