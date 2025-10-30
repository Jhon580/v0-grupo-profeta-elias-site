"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, DollarSign, CreditCard, Smartphone } from "lucide-react"

export default function DoaçõesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground">Doações</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ao sustentar a verdade, você ajuda a manter viva a chama do testemunho cristão
            </p>
          </div>
        </div>
      </section>

      {/* Propósito */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
              Por Que Doar?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                Suas contribuições permitem que o Grupo de Estudos Profeta Elias continue sua missão de formação
                intelectual cristã e ação social transformadora. Cada doação é um investimento na restauração do
                testemunho cristão em nossa cultura.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="p-6 border-2 text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2 text-foreground">Projetos Sociais</h3>
                <p className="text-sm text-muted-foreground">
                  Apoio a orfanatos, trabalhos missionários e ajuda humanitária
                </p>
              </Card>

              <Card className="p-6 border-2 text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2 text-foreground">Materiais de Estudo</h3>
                <p className="text-sm text-muted-foreground">
                  Livros, recursos e infraestrutura para formação intelectual
                </p>
              </Card>

              <Card className="p-6 border-2 text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2 text-foreground">Eventos e Encontros</h3>
                <p className="text-sm text-muted-foreground">
                  Conferências, retiros espirituais e atividades formativas
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Formas de Doar */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">Como Doar</h2>

            <div className="space-y-6">
              <Card className="p-8 border-2">
                <div className="flex items-start gap-4">
                  <Smartphone className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold mb-3 text-foreground">PIX</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      A forma mais rápida e prática de contribuir. Use a chave PIX abaixo:
                    </p>
                    <div className="bg-muted/50 p-4 rounded border border-border">
                      <p className="font-mono text-sm text-foreground">doacoes@profetaelias.org</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2">
                <div className="flex items-start gap-4">
                  <CreditCard className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold mb-3 text-foreground">Transferência Bancária</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Para doações via transferência bancária:
                    </p>
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
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2">
                <div className="flex items-start gap-4">
                  <DollarSign className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold mb-3 text-foreground">Doação Recorrente</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Torne-se um apoiador mensal e ajude a sustentar nossos projetos de forma contínua.
                    </p>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Configurar Doação Mensal
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Transparência */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 border-2 border-primary/30 bg-gradient-to-br from-muted/50 to-background">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-center text-foreground">
                Compromisso com a Transparência
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                Todas as doações são utilizadas com responsabilidade e prestação de contas. Publicamos relatórios
                periódicos sobre a aplicação dos recursos em nossos projetos sociais e atividades formativas.
              </p>
              <p className="text-center text-sm text-muted-foreground italic">
                "Cada um contribua segundo propôs no seu coração, não com tristeza ou por necessidade; porque Deus ama
                ao que dá com alegria." — 2 Coríntios 9:7
              </p>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
