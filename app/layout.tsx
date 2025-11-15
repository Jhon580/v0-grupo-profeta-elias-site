import type React from "react"
import type { Metadata } from "next"
import { Cinzel, Crimson_Text, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
  display: "swap",
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-subtitle",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Grupo de Estudos Profeta Elias | União e Libertação",
  description:
    "Formação intelectual cristã sólida, enraizada na tradição reformada histórica. Restaurando o testemunho cristão diante do colapso da cristandade moderna.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${crimsonText.variable} ${cinzel.variable} ${cormorantGaramond.variable} font-serif antialiased`}
      >
        <ScrollToTop />
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
