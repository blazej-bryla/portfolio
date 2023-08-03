import React from 'react'
import { TechnologiesItem } from '../TechnologiesItem'
import { TechnologiesProps } from '@/app/types/Projects'

export const TechnologyStack = ({ technologies }: TechnologiesProps) => {
  return (
    <div className="flex flex-col gap-y-2">
      <p className="text-dark dark:text-white">Technology Stack:</p>
      <div className="flex w-fit flex-wrap gap-2 rounded-lg border border-dark p-4 dark:border-0 dark:bg-lightDark">
        {technologies.map((item, i) => (
          <TechnologiesItem item={item} key={i} />
        ))}
      </div>
    </div>
  )
}
