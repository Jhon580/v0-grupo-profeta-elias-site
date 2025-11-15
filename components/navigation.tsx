"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre Nós" },
    { href: "/apostolado", label: "Apostolado" },
    { href: "/estudos", label: "Estudos" },
    { href: "/participacao", label: "Participação" },
    { href: "/doacoes", label: "Doações" },
    { href: "/contato", label: "Contato" },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-[72px] lg:h-[76px] items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/images/design-mode/Logo%20GEPE%20sem%20fundo.png"
                alt="Brasão Profeta Elias"
                width={68}
                height={68}
                className="transition-transform group-hover:scale-110"
                style={{
                  imageRendering: "auto",
                  height: "clamp(47px, 4vw, 68px)",
                  width: "auto",
                }}
                priority
              />
              <div className="absolute inset-0 bg-primary/20 blur-xl transition-opacity group-hover:opacity-100 opacity-0" />
            </div>
            <div className="flex flex-col">
              <span
                className="font-heading text-base font-semibold text-foreground leading-tight tracking-wider uppercase"
                style={{ fontVariant: "small-caps" }}
              >
                Profeta Elias
              </span>
              <span className="text-xs text-muted-foreground tracking-wide italic font-subtitle">
                União e Libertação
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-3/4" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/40">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-muted/50 rounded transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
