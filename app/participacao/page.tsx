"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Users, Calendar, MessageCircle, Mail } from "lucide-react"
import { useState } from "react"

export default function ParticipaçãoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <main>
      {/* Hero */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Participação e Comunidade
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Junte-se a uma fraternidade dedicada à verdade, à virtude e à restauração da ordem cristã
            </p>
          </div>
        </div>
      </section>

      {/* Informações */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="p-6 border-2 text-center">
                <Calendar className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold mb-2 text-foreground">Encontros Semanais</h3>
                <p className="text-sm text-muted-foreground">Toda quinta-feira às 19h</p>
              </Card>

              <Card className="p-6 border-2 text-center">
                <MessageCircle className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold mb-2 text-foreground">Comunidade Online</h3>
                <p className="text-sm text-muted-foreground">Discord e grupos de estudo</p>
              </Card>

              <Card className="p-6 border-2 text-center">
                <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold mb-2 text-foreground">Newsletter Mensal</h3>
                <p className="text-sm text-muted-foreground">Reflexões e atualizações</p>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Formulário */}
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">Inscreva-se</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Preencha o formulário abaixo para se juntar ao Grupo de Estudos Profeta Elias. Entraremos em contato
                  com mais informações sobre nossos encontros e atividades.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="university" className="block text-sm font-semibold text-foreground mb-2">
                      Universidade/Instituição
                    </label>
                    <Input
                      id="university"
                      type="text"
                      value={formData.university}
                      onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte-nos um pouco sobre você e por que deseja participar..."
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Enviar Inscrição
                  </Button>
                </form>
              </div>

              {/* Informações Adicionais */}
              <div className="space-y-6">
                <Card className="p-6 border-2">
                  <h3 className="font-heading text-xl font-bold mb-4 text-foreground">O Que Esperar</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Estudos bíblicos e teológicos aprofundados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Leituras guiadas de clássicos cristãos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Debates sobre cultura e sociedade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Projetos sociais e evangelísticos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Comunhão fraterna e edificação mútua</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 border-2 bg-muted/30">
                  <h3 className="font-heading text-xl font-bold mb-4 text-foreground">Depoimentos</h3>
                  <blockquote className="border-l-2 border-primary pl-4 mb-4">
                    <p className="text-muted-foreground italic mb-2 leading-relaxed">
                      "O Profeta Elias transformou minha compreensão da fé cristã. Aqui encontrei uma comunidade que
                      leva a verdade a sério."
                    </p>
                    <footer className="text-sm text-muted-foreground">— João Silva, Estudante de Filosofia</footer>
                  </blockquote>

                  <blockquote className="border-l-2 border-primary pl-4">
                    <p className="text-muted-foreground italic mb-2 leading-relaxed">
                      "Mais do que um grupo de estudos, é uma fraternidade que me desafia intelectualmente e me edifica
                      espiritualmente."
                    </p>
                    <footer className="text-sm text-muted-foreground">— Maria Santos, Estudante de História</footer>
                  </blockquote>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
