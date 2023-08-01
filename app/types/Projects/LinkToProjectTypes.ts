import { ProjectItem } from '..'

export type LinkToProjectProps = {
  demo?: ProjectItem['demo']
  repo?: ProjectItem['repo']
  label: ProjectItem['label']
}
