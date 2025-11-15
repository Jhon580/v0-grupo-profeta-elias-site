"use client"

import { Card } from "@/components/ui/card"
import { Flame, Target, Eye, Cross } from "lucide-react"
import React, { useEffect, useRef, useState } from "react"

/* ---------- Reveal (mesmo timing “30% mais lento”) ---------- */
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
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true)
            io.disconnect()
          }
        })
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

/* ---------- Card com microinterações (mesmos tempos) ---------- */
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

export default function SobrePage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <Flame className="h-16 w-16 text-primary mx-auto mb-6" />
            </Reveal>
            <Reveal delay={60}>
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground">Sobre Nós</h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Uma fraternidade dedicada à restauração do pensamento cristão
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-foreground">Nossa História</h2>
            </Reveal>
            <div className="prose prose-lg max-w-none">
              <Reveal>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  O Grupo de Estudos Profeta Elias nasceu como expressão da missão assumida pela União e Libertação:
                  discernir o avanço do fenômeno revolucionário em nossa cultura e restaurar o testemunho cristão diante
                  do colapso da cristandade moderna.
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Fundado no seio da Universidade Federal do ABC, em São Bernardo do Campo, nosso grupo reúne estudantes e
                  intelectuais comprometidos com a verdade revelada e com a restauração dos fundamentos cristãos da
                  civilização.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-muted-foreground leading-relaxed">
                  Somos um grupo que busca formação intelectual cristã sólida, enraizada na tradição reformada histórica,
                  e ao mesmo tempo aberta à contemplação espiritual e ao combate cultural.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Visão (alturas idênticas) */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 auto-rows-fr">
              <KCard
                Icon={Target}
                title="Nossa Missão"
                text="Restaurar o pensamento cristão, resistindo ao espírito revolucionário e reafirmando os fundamentos da verdade revelada. Oferecemos formação intelectual cristã profunda, resgatando as tradições da fé protestante histórica e reafirmando a centralidade de Cristo como fundamento da ordem justa, bela e verdadeira."
              />
              <KCard
                Icon={Eye}
                title="Nossa Visão"
                text="Formar jovens intelectualmente sólidos e espiritualmente firmes, capazes de reconhecer e combater os erros da modernidade. Queremos formar jovens que compreendam as raízes espirituais do fenômeno revolucionário e resistam a seus impulsos dissolventes, restaurando em cada esfera da vida uma visão teocêntrica, hierárquica e ordenada do mundo."
                delay={80}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Profeta Elias */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Reveal>
                <Cross className="h-12 w-12 text-primary mx-auto mb-6" />
              </Reveal>
              <Reveal delay={60}>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Por Que Profeta Elias?
                </h2>
              </Reveal>
            </div>

            <Reveal>
              <Card className="p-8 md:p-12 border-2 bg-muted/30">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  O profeta Elias foi escolhido como patrono de nosso grupo por simbolizar a fidelidade à verdade de Deus
                  diante da apostasia, o zelo pela adoração verdadeira e a coragem diante da corrupção moral e espiritual.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Em tempos de confusão generalizada, quando o rei Acab e a rainha Jezabel promoviam a idolatria em
                  Israel, Elias permaneceu firme na verdade. Ele confrontou os profetas de Baal, restaurou o altar do
                  Senhor que estava em ruínas, e chamou o povo de volta à adoração verdadeira.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Assim como Elias, buscamos ser fiéis em meio à apostasia moderna, corajosos diante do erro prevalecente,
                  e zelosos pela glória de Deus em todas as esferas da vida.
                </p>

                <div className="border-t border-border/40 pt-8">
                  <p className="font-heading text-xl text-primary text-center mb-3">♱</p>
                  <p className="text-center text-foreground italic text-lg leading-relaxed">
                    "Erguei de novo o altar do Senhor que estava em ruínas."
                  </p>
                  <p className="text-center text-sm text-muted-foreground mt-3">— 1 Reis 18:30</p>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Citação */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <Card className="p-8 md:p-12 border-2 border-primary/30 bg-card">
                <blockquote className="text-center">
                  <p className="text-xl md:text-2xl text-foreground italic leading-relaxed mb-6 text-balance">
                    "Athanasius contra mundum — Atanásio contra o mundo. Que possamos ter a mesma coragem de permanecer
                    firmes na verdade, mesmo quando todo o mundo se volta contra ela."
                  </p>
                  <footer className="text-muted-foreground">— Inspiração de Santo Atanásio de Alexandria</footer>
                </blockquote>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
