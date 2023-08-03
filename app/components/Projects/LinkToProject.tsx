import { LinkToProjectProps } from '@/app/types/Projects'
import React from 'react'

export const LinkToProject = ({ demo, repo, label }: LinkToProjectProps) => {
  return (
    <div className="flex flex-col gap-2">
      {demo && (
        <>
          <p className="text-dark dark:text-white">Demo:</p>
          <a
            href={demo}
            className="w-fit rounded-lg border border-dark p-4 text-sm text-active  dark:border-0 dark:bg-lightDark"
          >
            <i>{label}</i>
          </a>
        </>
      )}
      {repo && (
        <>
          <p className="text-dark dark:text-white">Github repository:</p>
          <a
            href={repo}
            className="w-fit rounded-lg border border-dark p-4 text-sm text-active  dark:border-0 dark:bg-lightDark"
          >
            <i>{label}</i>
          </a>
        </>
      )}
    </div>
  )
}
