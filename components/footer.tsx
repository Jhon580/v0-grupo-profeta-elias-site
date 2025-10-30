import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-gradient-to-b from-muted/40 to-muted/60">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-profeta-elias.png"
                alt="Logo Profeta Elias"
                width={42}
                height={42}
                className="h-[42px] w-[42px] object-contain mx-[-5px]"
              />
              <span className="font-heading text-lg font-bold mx-[-5px]">Profeta Elias</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Grupo de Estudos dedicado à formação intelectual cristã e à restauração da ordem espiritual.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading text-sm font-bold mb-4 text-foreground">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/apostolado" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Apostolado
                </Link>
              </li>
              <li>
                <Link href="/estudos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Estudos
                </Link>
              </li>
              <li>
                <Link
                  href="/participacao"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Participação
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-bold mb-4 text-foreground">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>
                  Universidade Federal do ABC
                  <br />
                  São Bernardo do Campo/SP
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="mailto:contato@profetaelias.org" className="hover:text-primary transition-colors">
                  contato@profetaelias.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/20">
          <div className="text-center mb-4">
            <p className="font-heading text-sm text-primary/90 italic tracking-wide">
              ♱ "Erguei de novo o altar do Senhor que estava em ruínas." ♱
            </p>
            <p className="text-xs text-muted-foreground mt-1">(1 Reis 18:30)</p>
          </div>
          <p className="text-center text-xs text-muted-foreground font-heading tracking-wider">
            Grupo de Estudos Profeta Elias — União e Libertação
          </p>
          <p className="text-center text-xs text-muted-foreground/70 mt-2">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
