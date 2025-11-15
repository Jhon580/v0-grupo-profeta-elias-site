"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { getCategoryBySlug, getArticlesByCategory } from "@/lib/articles"
import { StudyCategorySlug } from "@/lib/types/article"
import React, { useEffect, useRef, useState } from "react"

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

export default function CategoryPage() {
  const params = useParams()
  const slug = params.slug as StudyCategorySlug

  const category = getCategoryBySlug(slug)
  const articles = getArticlesByCategory(slug)

  if (!category) {
    return (
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl font-bold mb-4">Categoria não encontrada</h1>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/estudos">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para Estudos
              </Link>
            </Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main>
      {/* Hero */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <Button
                asChild
                variant="ghost"
                className="mb-6 px-0 bg-transparent text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Link href="/estudos">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar para Estudos
                </Link>
              </Button>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground">
                {category.name}
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {category.description}
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="text-sm text-primary font-semibold mt-6">
                {articles.length} artigos nesta categoria
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Lista de Artigos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {articles.length > 0 ? (
              <div className="space-y-6">
                {articles.map((article, i) => (
                  <Reveal key={article.slug} delay={i * 60}>
                    <Link href={`/estudos/artigo/${article.slug}`} className="block">
                      <Card className="group p-6 md:p-8 border-2 transition-colors hover:border-primary/50 cursor-pointer">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2 transition-transform duration-[715ms] group-hover:translate-x-0.5">
                              {article.title}
                            </h2>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                              <span>{article.date}</span>
                              {article.author && (
                                <>
                                  <span>•</span>
                                  <span>{article.author}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed transition-transform duration-[715ms] group-hover:translate-x-0.5">
                          {article.excerpt}
                        </p>
                        <div className="mt-4 text-primary font-semibold text-sm transition-transform duration-[715ms] group-hover:translate-x-1">
                          Ler artigo →
                        </div>
                      </Card>
                    </Link>
                  </Reveal>
                ))}
              </div>
            ) : (
              <Reveal>
                <Card className="p-12 text-center border-2">
                  <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h2 className="font-heading text-2xl font-bold mb-2 text-foreground">
                    Nenhum artigo ainda
                  </h2>
                  <p className="text-muted-foreground">
                    Novos artigos desta categoria serão publicados em breve.
                  </p>
                </Card>
              </Reveal>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
