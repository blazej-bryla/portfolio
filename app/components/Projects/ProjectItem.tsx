import { ProjectItem as ProjectItemType } from '@/app/types'
import React from 'react'
import { TechnologiesItem } from '..'

export const ProjectItem = ({ project }: { project: ProjectItemType }) => {
  console.log(project.demo)
  return (
    <div className="flex flex-col gap-y-2 text-white">
      <div className="flex w-full justify-between rounded-lg bg-lightDark p-4 text-xl">
        <p>Title: {project.label}</p>
        <p className="text-sm text-gray">Date: {project.date}</p>
      </div>
      <div className="flex flex-col gap-y-2">
        <p>Technology Stack:</p>
        <div className="flex w-fit flex-wrap gap-2 rounded-lg bg-lightDark p-4">
          {project.technologies.map((item, i) => (
            <TechnologiesItem item={item} key={i} />
          ))}
        </div>
      </div>
      <div>
        <p>Description:</p>
        <div className="w-fit rounded-lg bg-lightDark p-4 text-sm tracking-wide">
          <i>{project.description}</i>
        </div>
      </div>
      {project.demo !== undefined ? (
        <div className="flex flex-col gap-2">
          <p>Demo:</p>
          <a
            href={project.demo}
            className="roundded-lg w-fit bg-lightDark text-sm text-active"
          >
            <i>Demo</i>
          </a>
        </div>
      ) : null}
      <div className="flex flex-col gap-2">
        <p>Github Repositorium:</p>
        <a
          href={project.repo}
          className="w-fit rounded-lg bg-lightDark p-4 text-sm text-active"
        >
          <i>{project.label}</i>
        </a>
      </div>
    </div>
  )
}
