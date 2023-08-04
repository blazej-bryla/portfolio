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
            className="rounded-lg border border-dark p-4 text-xs text-dark transition duration-300 dark:border-active dark:bg-dark dark:text-white  md:border-lightDark dark:md:hover:bg-lightDark"
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
            className="w-fit rounded-lg border border-dark p-4 text-xs text-dark transition duration-300 dark:border-active dark:bg-dark dark:text-white  md:border-lightDark dark:md:hover:bg-lightDark"
          >
            <i>{label}</i>
          </a>
        </>
      )}
    </div>
  )
}
