"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Users, Heart, Flame } from "lucide-react"
import React, { useEffect, useRef, useState } from "react"

/* ---------- Reveal suave, sem libs (30% mais lento) ---------- */
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
    if (!el) return
    if (shown) return

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
    // tempos 30% mais lentos
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

/* ---------- Keyframes util ---------- */
const floatStyle: React.CSSProperties = {
  animation: "pe-float 18.2s ease-in-out infinite",
}
const sheenStyle: React.CSSProperties = {
  background:
    "radial-gradient(80% 80% at 50% 0%, color-mix(in oklab, var(--primary) 20%, transparent) 0%, transparent 60%)",
  opacity: 0,
  transition: "opacity 1.235s ease",
}

/* Injetamos keyframes mínimos (uma vez) */
let KF_ADDED = false
if (typeof document !== "undefined" && !KF_ADDED) {
  const style = document.createElement("style")
  style.innerHTML = `
@keyframes pe-float { 0%{transform:translateY(0)} 50%{transform:translateY(-3px)} 100%{transform:translateY(0)} }
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important }
}
  `
  document.head.appendChild(style)
  KF_ADDED = true
}

/* ---------- Card elegante, alturas idênticas ---------- */
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
      <Card
        className="
          group relative border-2 h-full
          transition-colors hover:border-primary/50
          overflow-hidden
        "
      >
        {/* layout interno: alturas iguais */}
        <div className="flex h-full flex-col p-8">
          {/* brilho sutil no topo ao hover */}
          <div
            className="pointer-events-none absolute inset-0 rounded-lg"
            style={sheenStyle as any}
          />
          <div className="mb-4">
            <Icon className="h-12 w-12 text-primary transition-transform duration-[715ms] group-hover:-translate-y-0.5" />
          </div>

          <h3
            className="
              font-heading text-xl font-bold text-foreground
              transition-[letter-spacing,transform] duration-[715ms]
              group-hover:tracking-wide group-hover:translate-x-0.5
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-3 text-muted-foreground leading-relaxed
              transition-transform duration-[715ms] group-hover:translate-x-0.5
            "
          >
            {text}
          </p>

          {/* empurra CTA invisível para baixo (caso futuramente exista), garantindo altura igual */}
          <div className="mt-auto pt-2" />

          {/* revelar brilho só no hover */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{ transition: "opacity 1.235s ease" } as any}
            aria-hidden
          />
        </div>

        {/* borda viva discretíssima no hover */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            transition: "opacity 1.235s ease",
            background:
              "linear-gradient(to bottom, color-mix(in oklab, var(--primary) 18%, transparent), transparent 40%)",
          }}
          aria-hidden
        />
      </Card>
    </Reveal>
  )
}

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen grid place-items-center overflow-hidden pt-[72px]">
        {/* Fundo */}
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.93_0.02_65)] via-[oklch(0.91_0.02_62)] to-background" />
        <div className="absolute inset-0 parchment-texture opacity-5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center -mt-[50px]">
            {/* Logo com flutuação sutil */}
            <Reveal>
              <div className="mb-5 md:mb-6 relative hero-badge">
                <div className="absolute inset-0 -inset-8 md:-inset-12 lg:-inset-16 pointer-events-none">
                  <div
                    className="w-full h-full rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, oklch(0.52 0.12 75 / 0.12) 0%, oklch(0.52 0.12 75 / 0.06) 34%, transparent 60%)",
                    }}
                  />
                </div>

                <div style={floatStyle}>
                  <Image
                    src="/images/design-mode/Logo%20Profeta%20Elias%20PNG.png"
                    alt="Brasão Profeta Elias"
                    width={240}
                    height={240}
                    className="mx-auto relative z-10 will-change-transform"
                    style={{
                      imageRendering: "auto",
                      height: "clamp(96px, 16vw, 220px)",
                      width: "auto",
                    }}
                    priority
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <div className="h-[2px] w-[88px] bg-primary mx-auto mb-4 md:mb-[18px] opacity-90" />
            </Reveal>

            <Reveal delay={120}>
              <h1 className="font-heading text-[2.4rem] md:text-[2.5rem] font-bold text-foreground mb-4 md:mb-[18px] text-balance leading-tight">
                Em tempos de confusão,
                <br />
                permanecemos firmes na verdade
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <div className="h-[2px] w-[88px] bg-primary mx-auto mb-5 md:mb-[22px] opacity-90" />
            </Reveal>

            <Reveal delay={220}>
              <p className="font-subtitle text-lg md:text-xl text-muted-foreground leading-relaxed w-[85%] md:w-[70%] lg:w-[65%] mx-auto text-pretty mb-8 md:mb-9">
                O Grupo de Estudos Profeta Elias é uma fraternidade estudantil cristã dedicada à formação intelectual,
                espiritual e moral à luz da tradição cristã histórica.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  <Link href="/participacao">Participe do Grupo</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 font-semibold bg-transparent hover:bg-primary/10"
                >
                  <Link href="/doacoes">Contribua com Nossa Missão</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="border-t border-b border-border/40 py-6 max-w-2xl mx-auto">
                <p className="font-heading text-lg text-primary mb-2">♱</p>
                <p className="text-foreground/90 italic leading-relaxed font-subtitle">
                  "Erguei de novo o altar do Senhor que estava em ruínas."
                </p>
                <p className="text-sm text-muted-foreground mt-2">— 1 Reis 18:30</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission Cards — alturas idênticas e movimento clássico (30% mais lento) */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
                Nossa Vocação
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-6 auto-rows-fr">
              <KCard
                Icon={BookOpen}
                title="Formação Intelectual"
                text="Resgatamos as tradições da fé protestante histórica, oferecendo formação cristã profunda enraizada na Palavra de Deus."
              />
              <KCard
                Icon={Flame}
                title="Zelo pela Verdade"
                text="Como o profeta Elias, mantemos fidelidade em meio à apostasia e coragem diante do erro, zelando pela glória de Deus."
                delay={80}
              />
              <KCard
                Icon={Users}
                title="Combate Cultural"
                text="Discernimos o avanço do fenômeno revolucionário em nossa cultura e restauramos o testemunho cristão autêntico."
                delay={160}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Reveal y={20}>
                <div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">Quem Somos</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    O Grupo de Estudos Profeta Elias nasceu como expressão da missão assumida pela União e Libertação:
                    discernir o avanço do fenômeno revolucionário em nossa cultura e restaurar o testemunho cristão
                    diante do colapso da cristandade moderna.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Buscamos formação intelectual cristã sólida, enraizada na tradição reformada histórica, e ao mesmo
                    tempo aberta à contemplação espiritual e ao combate cultural.
                  </p>
                  <Button asChild variant="outline" className="border-2 font-semibold bg-transparent hover:bg-primary/10">
                    <Link href="/sobre">Conheça Nossa História</Link>
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={80} y={20}>
                <div className="relative">
                  <div className="aspect-square rounded-lg overflow-hidden border-2 border-border">
                    <img
                      src="/ancient-books-and-candle-on-wooden-desk-classical-.jpg"
                      alt="Livros antigos e vela sobre mesa de estudos"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-lg -z-10" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Reveal>
              <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
            </Reveal>
            <Reveal delay={60}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">Apostolado e Projetos</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Nossa missão se estende além dos estudos. Através de projetos sociais e evangelísticos, levamos o amor de
                Cristo às comunidades carentes.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/apostolado">Conheça Nossos Projetos</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">Junte-se a Nós</h2>
            </Reveal>
            <Reveal delay={60}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Seja parte desta fraternidade dedicada à verdade, à virtude e à restauração da ordem cristã.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/participacao">Inscreva-se</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 font-semibold bg-transparent hover:bg-primary/10"
                >
                  <Link href="/contato">Entre em Contato</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
