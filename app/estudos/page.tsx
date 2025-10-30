import { Card } from "@/components/ui/card"
import { BookOpen, FileText, Library, Scroll } from "lucide-react"
import Link from "next/link"

export default function EstudosPage() {
  const categories = [
    {
      icon: BookOpen,
      title: "Teologia Reformada",
      description:
        "Estudos sobre as doutrinas da graça, soberania de Deus, e os fundamentos da fé reformada histórica.",
      articles: 3,
    },
    {
      icon: Scroll,
      title: "Tradição Cristã",
      description: "Explorando os pais da igreja, concílios históricos e a continuidade da fé através dos séculos.",
      articles: 5,
    },
    {
      icon: Library,
      title: "História da Igreja",
      description: "Da igreja primitiva à Reforma, compreendendo como Deus preservou Seu povo através da história.",
      articles: 4,
    },
    {
      icon: FileText,
      title: "Revolução e Contrarrevolução",
      description: "Análise do fenômeno revolucionário moderno e a resposta cristã contrarrevolucionária.",
      articles: 6,
    },
  ]

  const recentArticles = [
    {
      title: "A Soberania de Deus na Salvação",
      category: "Teologia Reformada",
      date: "15 de Janeiro, 2025",
      excerpt: "Uma análise profunda das doutrinas da graça e como elas glorificam a Deus em nossa salvação.",
    },
    {
      title: "Atanásio e a Defesa da Ortodoxia",
      category: "Tradição Cristã",
      date: "10 de Janeiro, 2025",
      excerpt: "Como Atanásio permaneceu firme contra o arianismo, defendendo a divindade de Cristo.",
    },
    {
      title: "A Reforma Protestante: Contexto e Consequências",
      category: "História da Igreja",
      date: "5 de Janeiro, 2025",
      excerpt: "Compreendendo as causas históricas e teológicas que levaram à Reforma do século XVI.",
    },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground">Estudos e Publicações</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Recursos para formação intelectual cristã sólida e fundamentada na tradição histórica
            </p>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              Áreas de Estudo
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <Card
                    key={category.title}
                    className="p-8 border-2 hover:border-primary/50 transition-colors cursor-pointer group"
                  >
                    <Icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-heading text-2xl font-bold mb-3 text-foreground">{category.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{category.description}</p>
                    <p className="text-sm text-primary font-semibold">{category.articles} artigos disponíveis</p>
                  </Card>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              Publicações Recentes
            </h2>

            <div className="space-y-6">
              {recentArticles.map((article) => (
                <Card
                  key={article.title}
                  className="p-6 md:p-8 border-2 hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="text-primary font-semibold">{article.category}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{article.excerpt}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clube do Livro */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border-2 border-primary/30 bg-gradient-to-br from-muted/50 to-background">
              <div className="text-center">
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
                <Link
                  href="/participacao"
                  className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-colors"
                >
                  Participar do Clube
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
