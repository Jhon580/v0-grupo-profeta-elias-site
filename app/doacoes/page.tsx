"use client"

import React, { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, DollarSign, CreditCard, Smartphone } from "lucide-react"

/* ---------- Reveal (30% mais lento, padrão do site) ---------- */
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

/* ---------- Efeito de brilho sutil usado nos cards ---------- */
const sheenStyle: React.CSSProperties = {
  background:
    "radial-gradient(80% 80% at 50% 0%, color-mix(in oklab, var(--primary) 20%, transparent) 0%, transparent 60%)",
  opacity: 0,
  transition: "opacity 1.235s ease",
}

/* ---------- Card informativo com microinterações ---------- */
function KIconCard({
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
      <Card className="group relative p-6 border-2 text-center overflow-hidden transition-colors hover:border-primary/50 h-full">
        <div className="pointer-events-none absolute inset-0 rounded-lg" style={sheenStyle} />
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Icon className="h-6 w-6 text-primary transition-transform duration-[715ms] group-hover:-translate-y-0.5" />
        </div>
        <h3 className="font-heading text-lg font-bold mb-2 text-foreground transition-[letter-spacing,transform] duration-[715ms] group-hover:tracking-wide group-hover:translate-x-0.5">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground transition-transform duration-[715ms] group-hover:translate-x-0.5">
          {text}
        </p>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            transition: "opacity 1.235s ease",
            background:
              "linear-gradient(to bottom, color-mix(in oklab, var(--primary) 18%, transparent), transparent 40%)",
          }}
        />
      </Card>
    </Reveal>
  )
}

/* ---------- Card de método de doação ---------- */
function KMethodCard({
  Icon,
  title,
  children,
  delay = 0,
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  children: React.ReactNode
  delay?: number
}) {
  return (
    <Reveal delay={delay}>
      <Card className="group p-8 border-2 overflow-hidden relative transition-colors hover:border-primary/50">
        <div className="flex items-start gap-4">
          <Icon className="h-8 w-8 text-primary flex-shrink-0 mt-1 transition-transform duration-[715ms] group-hover:-translate-y-0.5" />
          <div className="flex-1">
            <h3 className="font-heading text-xl font-bold mb-3 text-foreground transition-[letter-spacing,transform] duration-[715ms] group-hover:tracking-wide group-hover:translate-x-0.5">
              {title}
            </h3>
            {children}
          </div>
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            transition: "opacity 1.235s ease",
            background:
              "linear-gradient(to bottom, color-mix(in oklab, var(--primary) 14%, transparent), transparent 50%)",
          }}
        />
      </Card>
    </Reveal>
  )
}

export default function DoaçõesPage() {
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
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground">Doações</h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ao sustentar a verdade, você ajuda a manter viva a chama do testemunho cristão
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Propósito */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
                Por Que Doar?
              </h2>
            </Reveal>
            <Reveal delay={60}>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                  Suas contribuições permitem que o Grupo de Estudos Profeta Elias continue sua missão de formação
                  intelectual cristã e ação social transformadora. Cada doação é um investimento na restauração do
                  testemunho cristão em nossa cultura.
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-6 mt-12 auto-rows-fr">
              <KIconCard
                Icon={Heart}
                title="Projetos Sociais"
                text="Apoio a orfanatos, trabalhos missionários e ajuda humanitária"
              />
              <KIconCard
                Icon={DollarSign}
                title="Materiais de Estudo"
                text="Livros, recursos e infraestrutura para formação intelectual"
                delay={80}
              />
              <KIconCard
                Icon={CreditCard}
                title="Eventos e Encontros"
                text="Conferências, retiros espirituais e atividades formativas"
                delay={160}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Formas de Doar */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
                Como Doar
              </h2>
            </Reveal>

            <div className="space-y-6">
              <KMethodCard Icon={Smartphone} title="PIX">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  A forma mais rápida e prática de contribuir. Use a chave PIX abaixo:
                </p>
                <div className="bg-muted/50 p-4 rounded border border-border">
                  <p className="font-mono text-sm text-foreground">doacoes@profetaelias.org</p>
                </div>
              </KMethodCard>

              <KMethodCard Icon={CreditCard} title="Transferência Bancária" delay={80}>
                <p className="text-muted-foreground mb-4 leading-relaxed">Para doações via transferência bancária:</p>
                <div className="bg-muted/50 p-4 rounded border border-border space-y-2">
                  <p className="text-sm text-foreground">
                    <strong>Banco:</strong> Banco do Brasil
                  </p>
                  <p className="text-sm text-foreground">
                    <strong>Agência:</strong> 1234-5
                  </p>
                  <p className="text-sm text-foreground">
                    <strong>Conta:</strong> 12345-6
                  </p>
                  <p className="text-sm text-foreground">
                    <strong>CNPJ:</strong> 12.345.678/0001-90
                  </p>
                </div>
              </KMethodCard>

              <KMethodCard Icon={DollarSign} title="Doação Recorrente" delay={160}>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Torne-se um apoiador mensal e ajude a sustentar nossos projetos de forma contínua.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Configurar Doação Mensal
                </Button>
              </KMethodCard>
            </div>
          </div>
        </div>
      </section>

      {/* Transparência */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <Card className="p-8 md:p-12 border-2 border-primary/30 bg-gradient-to-br from-muted/50 to-background text-center">
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-foreground">
                  Compromisso com a Transparência
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Todas as doações são utilizadas com responsabilidade e prestação de contas. Publicamos relatórios
                  periódicos sobre a aplicação dos recursos em nossos projetos sociais e atividades formativas.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  "Cada um contribua segundo propôs no seu coração, não com tristeza ou por necessidade; porque Deus ama
                  ao que dá com alegria." — 2 Coríntios 9:7
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
