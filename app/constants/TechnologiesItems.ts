import { TechnologiesCategory } from '../types'
import {
  JavaScript,
  TypeScript,
  HTML,
  CSS,
  React,
  ReactRouter,
  NextJS,
  StyledComponents,
  Sass,
  TailwindCSS,
  NodeJS,
  ExpressJS,
  GraphQL,
  JWT,
  PostgreSQL,
  Prisma,
  Supabase,
  tRPC,
  Docker,
  Postman,
  Eslint,
  Prettier,
  Npm,
  Yarn,
  Pnpm
} from './technologies/Technologies'

export const TechnologiesCategoryList: TechnologiesCategory[] = [
  {
    label: 'Frontend',
    items: [
      JavaScript,
      TypeScript,
      HTML,
      CSS,
      React,
      ReactRouter,
      NextJS,
      StyledComponents,
      Sass,
      TailwindCSS
    ]
  },
  {
    label: 'Backend',
    items: [NodeJS, ExpressJS, GraphQL, JWT]
  },
  {
    label: 'Databases',
    items: [PostgreSQL, Prisma, Supabase, tRPC]
  },
  {
    label: 'Tools',
    items: [Docker, Postman, Eslint, Prettier, Npm, Yarn, Pnpm]
  }
]
