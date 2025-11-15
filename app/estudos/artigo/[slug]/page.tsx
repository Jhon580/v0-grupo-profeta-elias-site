"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { getArticleBySlug } from "@/lib/articles"
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

export default function ArticlePage() {
  const params = useParams()
  const slug = params.slug as string

  const article = getArticleBySlug(slug)

  if (!article) {
    return (
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl font-bold mb-4">Artigo não encontrado</h1>
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
              {/* VOLTAR – mesmo padrão da CategoryPage */}
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
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground text-balance">
                {article.title}
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <Link
                  href={`/estudos/categoria/${article.categorySlug}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  <Tag className="h-4 w-4" />
                  {article.categoryName}
                </Link>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </span>
                {article.author && (
                  <span className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {article.author}
                  </span>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Conteúdo do Artigo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Reveal delay={180}>
              <Card className="p-8 md:p-12 border-2">
                <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                  <div
                    className="leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: article.content
                        .split("\n")
                        .map((line) => {
                          // Simples conversão de Markdown para HTML
                          if (line.startsWith("# ")) {
                            return `<h1 class="font-heading text-4xl font-bold mb-6 mt-8 text-foreground">${line.slice(
                              2
                            )}</h1>`
                          }
                          if (line.startsWith("## ")) {
                            return `<h2 class="font-heading text-3xl font-bold mb-4 mt-8 text-foreground">${line.slice(
                              3
                            )}</h2>`
                          }
                          if (line.startsWith("### ")) {
                            return `<h3 class="font-heading text-2xl font-bold mb-3 mt-6 text-foreground">${line.slice(
                              4
                            )}</h3>`
                          }
                          if (line.startsWith("> ")) {
                            return `<blockquote class="border-l-4 border-primary pl-6 py-2 my-6 italic text-muted-foreground bg-muted/30">${line.slice(
                              2
                            )}</blockquote>`
                          }
                          if (line.startsWith("- ")) {
                            return `<li class="ml-6 mb-2">${line.slice(2)}</li>`
                          }
                          if (line.match(/^\d+\. /)) {
                            return `<li class="ml-6 mb-2">${line.replace(/^\d+\. /, "")}</li>`
                          }
                          if (line.trim() === "") {
                            return "<br />"
                          }
                          return `<p class="mb-4 leading-relaxed text-foreground">${line}</p>`
                        })
                        .join(""),
                    }}
                  />
                </article>
              </Card>
            </Reveal>

            {/* Navegação */}
            <Reveal delay={240}>
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between">
                {/* "Mais de {categoria}" padronizado igual aos outline da Home */}
                <Button
                  asChild
                  variant="outline"
                  className="border-2 font-semibold bg-transparent hover:bg-primary/10"
                >
                  <Link href={`/estudos/categoria/${article.categorySlug}`}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Mais de {article.categoryName}
                  </Link>
                </Button>

                {/* Botão primário padrão do site */}
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/estudos">Ver todos os estudos</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
