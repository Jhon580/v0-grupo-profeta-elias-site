"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, Library, Scroll } from 'lucide-react'
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import { studyCategories, getRecentArticles, getArticlesByCategory } from "@/lib/articles"

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

/* ---------- Card de Categoria com microinterações (tempos iguais) ---------- */
function CategoryCard({
  Icon,
  title,
  description,
  articles,
  href,
  delay = 0,
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
  articles: number
  href: string
  delay?: number
}) {
  return (
    <Reveal delay={delay}>
      <Link href={href} className="block h-full">
        <Card className="group relative border-2 h-full overflow-hidden transition-colors hover:border-primary/50 cursor-pointer">
          <div className="flex h-full flex-col p-8">
            <div className="pointer-events-none absolute inset-0 rounded-lg" style={sheenStyle} />
            <div className="mb-4">
              <Icon className="h-12 w-12 text-primary transition-transform duration-[715ms] group-hover:-translate-y-0.5" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-3 text-foreground transition-[letter-spacing,transform] duration-[715ms] group-hover:tracking-wide group-hover:translate-x-0.5">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4 transition-transform duration-[715ms] group-hover:translate-x-0.5">
              {description}
            </p>
            <p className="text-sm text-primary font-semibold mt-auto">{articles} artigos disponíveis</p>

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
      </Link>
    </Reveal>
  )
}

/* ---------- Card de Artigo Recente ---------- */
function ArticleCard({
  title,
  category,
  date,
  excerpt,
  href,
  delay = 0,
}: {
  title: string
  category: string
  date: string
  excerpt: string
  href: string
  delay?: number
}) {
  return (
    <Reveal delay={delay}>
      <Link href={href} className="block">
        <Card className="group p-6 md:p-8 border-2 transition-colors hover:border-primary/50 cursor-pointer">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2 transition-transform duration-[715ms] group-hover:translate-x-0.5">
                {title}
              </h3>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="text-primary font-semibold">{category}</span>
                <span>•</span>
                <span>{date}</span>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed transition-transform duration-[715ms] group-hover:translate-x-0.5">
            {excerpt}
          </p>
        </Card>
      </Link>
    </Reveal>
  )
}

export default function EstudosPage() {
  const categories = [
    {
      icon: BookOpen,
      title: "Teologia Reformada",
      description:
        "Estudos sobre as doutrinas da graça, soberania de Deus, e os fundamentos da fé reformada histórica.",
      slug: "teologia-reformada" as const,
    },
    {
      icon: Scroll,
      title: "Tradição Cristã",
      description: "Explorando os pais da igreja, concílios históricos e a continuidade da fé através dos séculos.",
      slug: "tradicao-crista" as const,
    },
    {
      icon: Library,
      title: "História da Igreja",
      description: "Da igreja primitiva à Reforma, compreendendo como Deus preservou Seu povo através da história.",
      slug: "historia-da-igreja" as const,
    },
    {
      icon: FileText,
      title: "Revolução e Contrarrevolução",
      description: "Análise do fenômeno revolucionário moderno e a resposta cristã contrarrevolucionária.",
      slug: "revolucao-e-contrarrevolucao" as const,
    },
  ]

  const recentArticles = getRecentArticles(3)

  return (
    <main>
      {/* Hero */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <BookOpen className="h-16 w-16 text-primary mx-auto mb-6" />
            </Reveal>
            <Reveal delay={60}>
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground">Estudos e Publicações</h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Recursos para formação intelectual cristã sólida e fundamentada na tradição histórica
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
                Áreas de Estudo
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6 auto-rows-fr">
              {categories.map((c, i) => {
                const Icon = c.icon
                const articlesCount = getArticlesByCategory(c.slug).length
                return (
                  <CategoryCard
                    key={c.title}
                    Icon={Icon}
                    title={c.title}
                    description={c.description}
                    articles={articlesCount}
                    href={`/estudos/categoria/${c.slug}`}
                    delay={i * 60}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Artigos Recentes */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
                Publicações Recentes
              </h2>
            </Reveal>

            <div className="space-y-6">
              {recentArticles.map((a, i) => (
                <ArticleCard
                  key={a.title}
                  title={a.title}
                  category={a.categoryName}
                  date={a.date}
                  excerpt={a.excerpt}
                  href={`/estudos/artigo/${a.slug}`}
                  delay={i * 60}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clube do Livro */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <Card className="p-8 md:p-12 border-2 border-primary/30 bg-gradient-to-br from-muted/50 to-background text-center">
                <Library className="h-12 w-12 text-primary mx-auto mb-6" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Clube do Livro Profeta Elias
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Participe de nossas leituras guiadas de obras clássicas cristãs e contrarrevolucionárias. Estudamos
                  juntos os grandes pensadores da tradição cristã.
                </p>
                <p className="text-muted-foreground mb-8">
                  <strong className="text-foreground">Leitura atual:</strong> "Institutas da Religião Cristã" de João
                  Calvino
                </p>
                <div className="flex justify-center">
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/participacao">Participar do Clube</Link>
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
