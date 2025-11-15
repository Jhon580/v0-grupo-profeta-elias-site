export type StudyCategorySlug =
  | "teologia-reformada"
  | "tradicao-crista"
  | "historia-da-igreja"
  | "revolucao-e-contrarrevolucao"

export type StudyCategory = {
  slug: StudyCategorySlug
  name: string
  description: string
  icon: string
}

export type Article = {
  slug: string
  title: string
  categorySlug: StudyCategorySlug
  categoryName: string
  date: string
  excerpt: string
  content: string
  author?: string
}
