"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
  }

  return (
    <main>
      {/* Hero */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Mail className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground">Contato</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Entre em contato conosco. Estamos prontos para responder suas dúvidas e receber suas sugestões.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Formulário */}
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">Envie uma Mensagem</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Nome *
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
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      Assunto *
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Escreva sua mensagem aqui..."
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </div>

              {/* Informações de Contato */}
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">Informações de Contato</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Você também pode entrar em contato conosco através dos canais abaixo:
                  </p>
                </div>

                <Card className="p-6 border-2">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading text-lg font-bold mb-2 text-foreground">Localização</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Universidade Federal do ABC
                        <br />
                        São Bernardo do Campo/SP
                        <br />
                        Brasil
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading text-lg font-bold mb-2 text-foreground">E-mail</h3>
                      <a
                        href="mailto:contato@profetaelias.org"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contato@profetaelias.org
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading text-lg font-bold mb-2 text-foreground">Telefone</h3>
                      <p className="text-muted-foreground">+55 (11) 98765-4321</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 bg-muted/30">
                  <h3 className="font-heading text-lg font-bold mb-3 text-foreground">Horário de Atendimento</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Segunda a Sexta:</strong> 14h - 18h
                    </p>
                    <p>
                      <strong className="text-foreground">Encontros:</strong> Quintas-feiras às 19h
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* União e Libertação */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-foreground">União e Libertação</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              O Grupo de Estudos Profeta Elias é um braço intelectual do apostolado União e Libertação. Para conhecer
              mais sobre o movimento, visite nosso site principal.
            </p>
            <Button variant="outline" className="border-2 font-semibold bg-transparent hover:bg-primary/10">
              Visitar União e Libertação
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
