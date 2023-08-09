import { DescriptionProps } from '@/app/types/Projects'
import React from 'react'

export const Description = ({ description }: DescriptionProps) => {
  return (
    <div>
      <p className="text-dark dark:text-white">Description:</p>
      <div className="flex w-full justify-between rounded-lg border border-dark bg-white p-4 text-sm tracking-wide text-dark transition duration-300 dark:border-active dark:bg-dark dark:text-white md:border-lightDark md:hover:bg-darkerWhite dark:md:hover:bg-lightDark">
        <i>{description}</i>
      </div>
    </div>
  )
}
