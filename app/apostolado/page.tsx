"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Hammer, BookOpen, MessageCircle, Users } from "lucide-react"
import React, { useEffect, useRef, useState } from "react"

/* ---------- Reveal (30% mais lento, igual às outras páginas) ---------- */
function Reveal({
  children,
  delay = 0,
  y = 16,
}: {
  children: React.ReactNode
  delay?: number
  y?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || shown) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true)
            io.disconnect()
          }
        }
      },
      { threshold: 0.2 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [shown])

  const style: React.CSSProperties = {
    transform: shown ? "translateY(0)" : `translateY(${y}px)`,
    opacity: shown ? 1 : 0,
    transitionProperty: "transform, opacity",
    transitionDuration: "1.43s, 1.43s",
    transitionTimingFunction: "cubic-bezier(.2,.65,.2,1), cubic-bezier(.2,.65,.2,1)",
    transitionDelay: `${delay}ms, ${delay}ms`,
  }

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  )
}

/* ---------- Efeito de brilho sutil (mesmos tempos) ---------- */
const sheenStyle: React.CSSProperties = {
  background:
    "radial-gradient(80% 80% at 50% 0%, color-mix(in oklab, var(--primary) 20%, transparent) 0%, transparent 60%)",
  opacity: 0,
  transition: "opacity 1.235s ease",
}

/* ---------- Card com microinterações (mesmos tempos das outras abas) ---------- */
function KCard({
  Icon,
  title,
  text,
  delay = 0,
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  text: string
  delay?: number
}) {
  return (
    <Reveal delay={delay}>
      <Card className="group relative border-2 h-full overflow-hidden transition-colors hover:border-primary/50">
        <div className="flex h-full flex-col p-8">
          <div className="pointer-events-none absolute inset-0 rounded-lg" style={sheenStyle} />
          <div className="mb-4">
            <Icon className="h-12 w-12 text-primary transition-transform duration-[715ms] group-hover:-translate-y-0.5" />
          </div>
          <h3 className="font-heading text-2xl font-bold mb-4 text-foreground transition-[letter-spacing,transform] duration-[715ms] group-hover:tracking-wide group-hover:translate-x-0.5">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed transition-transform duration-[715ms] group-hover:translate-x-0.5">
            {text}
          </p>
          <div className="mt-auto pt-2" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
            style={{
              transition: "opacity 1.235s ease",
              background:
                "linear-gradient(to bottom, color-mix(in oklab, var(--primary) 18%, transparent), transparent 40%)",
            }}
          />
        </div>
      </Card>
    </Reveal>
  )
}

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
            <Reveal>
              <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
            </Reveal>
            <Reveal delay={60}>
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground">Apostolado e Projetos</h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nossa fé se manifesta em ação. Através de projetos sociais, intelectuais e evangelísticos, levamos o amor
                de Cristo ao mundo.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-center">
                O Grupo de Estudos Profeta Elias não se limita à formação intelectual. Compreendemos que a fé verdadeira
                se manifesta em obras, e que o amor de Cristo nos compele a servir ao próximo e a transformar a cultura.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Nossos projetos abrangem desde o cuidado prático com os necessitados até a formação intelectual e o debate
                cultural, sempre fundamentados na verdade bíblica e na tradição cristã histórica.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
                Nossos Projetos
              </h2>
            </Reveal>

            <div className="space-y-16">
              {projects.map((project, index) => {
                const Icon = project.icon
                const isEven = index % 2 === 0

                return (
                  <Reveal key={project.name} delay={index * 60}>
                    <div className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? "md:flex-row-reverse" : ""}`}>
                      {/* Card de texto com alturas idênticas e microinterações */}
                      <div className={isEven ? "md:order-1" : "md:order-2"}>
                        <KCard Icon={Icon} title={project.name} text={project.description} />
                      </div>

                      {/* Imagem com borda e transições suaves */}
                      <div className={isEven ? "md:order-2" : "md:order-1"}>
                        <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-border">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.name}
                            className="w-full h-full object-cover transition-transform duration-[715ms] will-change-transform hover:scale-[1.02]"
                          />
                          <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100"
                            style={{
                              transition: "opacity 1.235s ease",
                              background:
                                "linear-gradient(to bottom, color-mix(in oklab, var(--primary) 14%, transparent), transparent 50%)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Reveal>
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
            <Reveal>
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
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 font-semibold bg-transparent hover:bg-primary/10"
                  >
                    <Link href="/participacao">Participar como Voluntário</Link>
                  </Button>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
