import { ProjectItem as ProjectItemType } from '@/app/types'
import React from 'react'
import { Title } from './Title'
import { TechnologyStack } from './TechnologyStack'
import { Description } from './Description'
import { LinkToProject } from './LinkToProject'

export const ProjectItem = ({ project }: { project: ProjectItemType }) => {
  return (
    <div className="flex flex-col gap-y-2 text-white">
      <Title label={project.label} date={project.date} />
      <TechnologyStack technologies={project.technologies} />
      <Description description={project.description} />
      {project.demo && <LinkToProject demo={project.demo} label="Demo" />}
      {project.repo && (
        <LinkToProject repo={project.repo} label="Github repository" />
      )}
    </div>
  )
}
