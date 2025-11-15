import { Article, StudyCategory, StudyCategorySlug } from "./types/article"

// Categorias fixas
export const studyCategories: StudyCategory[] = [
  {
    slug: "teologia-reformada",
    name: "Teologia Reformada",
    description:
      "Estudos sobre as doutrinas da graça, soberania de Deus, e os fundamentos da fé reformada histórica.",
    icon: "BookOpen",
  },
  {
    slug: "tradicao-crista",
    name: "Tradição Cristã",
    description: "Explorando os pais da igreja, concílios históricos e a continuidade da fé através dos séculos.",
    icon: "Scroll",
  },
  {
    slug: "historia-da-igreja",
    name: "História da Igreja",
    description: "Da igreja primitiva à Reforma, compreendendo como Deus preservou Seu povo através da história.",
    icon: "Library",
  },
  {
    slug: "revolucao-e-contrarrevolucao",
    name: "Revolução e Contrarrevolução",
    description: "Análise do fenômeno revolucionário moderno e a resposta cristã contrarrevolucionária.",
    icon: "FileText",
  },
]

// Base de artigos (simulando MDX - você pode substituir por leitura de arquivos)
export const articles: Article[] = [
  {
    slug: "soberania-de-deus-na-salvacao",
    title: "A Soberania de Deus na Salvação",
    categorySlug: "teologia-reformada",
    categoryName: "Teologia Reformada",
    date: "15 de Janeiro, 2025",
    excerpt: "Uma análise profunda das doutrinas da graça e como elas glorificam a Deus em nossa salvação.",
    content: `
# A Soberania de Deus na Salvação

## Introdução

A doutrina da soberania de Deus na salvação é um dos pilares fundamentais da teologia reformada. Esta verdade bíblica nos ensina que Deus, em Sua infinita sabedoria e poder, é o autor e consumador da nossa fé.

## A Eleição Divina

Desde antes da fundação do mundo, Deus elegeu um povo para Si mesmo. Esta eleição não é baseada em méritos humanos, mas exclusivamente na graça divina.

> "Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus." - Efésios 2:8

## A Graça Irresistível

Quando Deus chama Seus eleitos, Ele não apenas convida, mas regenera o coração de pedra, transformando-o em coração de carne. Esta obra do Espírito Santo é eficaz e irresistível.

## Conclusão

Compreender a soberania de Deus na salvação nos leva a uma humildade profunda e uma gratidão sem fim. Toda glória pertence a Ele, do início ao fim de nossa redenção.
    `,
    author: "Grupo Profeta Elias",
  },
  {
    slug: "atanasio-defesa-ortodoxia",
    title: "Atanásio e a Defesa da Ortodoxia",
    categorySlug: "tradicao-crista",
    categoryName: "Tradição Cristã",
    date: "10 de Janeiro, 2025",
    excerpt: "Como Atanásio permaneceu firme contra o arianismo, defendendo a divindade de Cristo.",
    content: `
# Atanásio e a Defesa da Ortodoxia

## O Contexto Histórico

No século IV, a Igreja enfrentou uma das suas maiores crises teológicas: o arianismo. Ário, um presbítero de Alexandria, negava a plena divindade de Cristo, afirmando que o Filho era uma criatura, embora a primeira e mais exaltada de todas.

## Atanásio: Contra o Mundo

Atanásio de Alexandria emergiu como o grande defensor da ortodoxia cristã. Durante décadas, ele permaneceu firme na defesa da homoousia (mesma substância) do Pai e do Filho, mesmo quando isso significava estar "contra o mundo inteiro" (Athanasius contra mundum).

## O Concílio de Niceia

Em 325 d.C., o Concílio de Niceia estabeleceu o Credo Niceno, afirmando que Cristo é "Deus verdadeiro de Deus verdadeiro, gerado, não criado, consubstancial ao Pai". Atanásio foi um dos principais articuladores desta formulação.

## Lições para Hoje

A firmeza de Atanásio nos ensina que:
- A verdade não é determinada por consenso popular
- Vale a pena sofrer pela ortodoxia
- Devemos estar dispostos a permanecer firmes mesmo em minoria

## Conclusão

A história de Atanásio nos inspira a manter a sã doutrina em tempos de confusão teológica, confiando que Deus preservará Sua verdade através dos séculos.
    `,
    author: "Grupo Profeta Elias",
  },
  {
    slug: "reforma-protestante-contexto-consequencias",
    title: "A Reforma Protestante: Contexto e Consequências",
    categorySlug: "historia-da-igreja",
    categoryName: "História da Igreja",
    date: "5 de Janeiro, 2025",
    excerpt: "Compreendendo as causas históricas e teológicas que levaram à Reforma do século XVI.",
    content: `
# A Reforma Protestante: Contexto e Consequências

## O Estado da Igreja no Século XVI

No início do século XVI, a Igreja Católica Romana enfrentava uma profunda crise moral e teológica. A venda de indulgências, o nepotismo, e o afastamento das Escrituras haviam criado um vácuo espiritual na cristandade.

## As Causas da Reforma

### Causas Teológicas
- O esquecimento da doutrina da justificação pela fé
- A substituição da autoridade das Escrituras pela tradição humana
- A obscurecimento do sacerdócio universal dos crentes

### Causas Políticas e Sociais
- O crescente nacionalismo europeu
- A invenção da imprensa por Gutenberg
- O Renascimento e seu retorno às fontes clássicas

## Martinho Lutero e as 95 Teses

Em 31 de outubro de 1517, Martinho Lutero pregou suas 95 teses na porta da igreja de Wittenberg, desafiando o sistema de indulgências. Este ato corajoso acendeu a fagulha da Reforma.

## Os Cinco Solas

A Reforma pode ser resumida em cinco princípios fundamentais:
1. **Sola Scriptura** - Somente a Escritura
2. **Sola Gratia** - Somente a Graça
3. **Sola Fide** - Somente a Fé
4. **Solus Christus** - Somente Cristo
5. **Soli Deo Gloria** - Glória Somente a Deus

## As Consequências da Reforma

A Reforma Protestante trouxe consequências profundas:
- Retorno à centralidade das Escrituras
- Renovação da vida eclesiástica
- Tradução da Bíblia para línguas vernáculas
- Educação universal e alfabetização
- Desenvolvimento do conceito de vocação

## Conclusão

A Reforma não foi um evento isolado, mas um movimento do Espírito Santo para restaurar a Igreja à pureza do Evangelho. Seus princípios continuam relevantes hoje, chamando-nos de volta às verdades eternas da Palavra de Deus.
    `,
    author: "Grupo Profeta Elias",
  },
]

// Funções auxiliares
export function getCategoryBySlug(slug: StudyCategorySlug): StudyCategory | undefined {
  return studyCategories.find((c) => c.slug === slug)
}

export function getArticlesByCategory(categorySlug: StudyCategorySlug): Article[] {
  return articles.filter((a) => a.categorySlug === categorySlug)
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getRecentArticles(limit: number = 3): Article[] {
  return articles.slice(0, limit)
}

export function getAllArticleSlugs(): string[] {
  return articles.map((a) => a.slug)
}

export function getAllCategorySlugs(): StudyCategorySlug[] {
  return studyCategories.map((c) => c.slug)
}
