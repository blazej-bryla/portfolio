import { TechnologiesItem } from '.'

export type ProjectItem = {
  label: string
  date: string
  technologies: TechnologiesItem[]
  description: string
  demo?: string
  repo: string
}
