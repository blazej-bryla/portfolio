import { DescriptionProps } from '@/app/types/Projects'
import React from 'react'

export const Description = ({ description }: DescriptionProps) => {
  return (
    <div>
      <p className="text-dark dark:text-white">Description:</p>
      <div className="w-fit rounded-lg border border-dark p-4 text-sm tracking-wide text-dark dark:border-0 dark:bg-lightDark dark:text-white">
        <i>{description}</i>
      </div>
    </div>
  )
}
