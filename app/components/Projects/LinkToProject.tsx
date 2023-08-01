import { LinkToProjectProps } from '@/app/types/Projects'
import React from 'react'

export const LinkToProject = ({ demo, repo, label }: LinkToProjectProps) => {
  return (
    <div className="flex flex-col gap-2">
      {demo && (
        <>
          <p>Demo:</p>
          <a
            href={demo}
            className="w-fit rounded-lg bg-lightDark p-4 text-sm text-active"
          >
            <i>{label}</i>
          </a>
        </>
      )}
      {repo && (
        <>
          <p>Github repository:</p>
          <a
            href={repo}
            className="w-fit rounded-lg bg-lightDark p-4 text-sm text-active"
          >
            <i>{label}</i>
          </a>
        </>
      )}
    </div>
  )
}
