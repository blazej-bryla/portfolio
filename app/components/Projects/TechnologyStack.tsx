import React from 'react'
import { TechnologiesItem } from '../TechnologiesItem'
import { TechnologiesProps } from '@/app/types/Projects'

export const TechnologyStack = ({ technologies }: TechnologiesProps) => {
  return (
    <div className="flex flex-col gap-y-2">
      <p className="text-dark dark:text-white">Technology Stack:</p>
      <div className="flex w-fit justify-between gap-2 rounded-lg border border-dark bg-white p-4 text-xl text-dark transition duration-300 dark:border-active dark:bg-dark dark:text-white md:border-lightDark  md:hover:bg-darkerWhite dark:md:hover:bg-lightDark">
        {technologies.map((item, i) => (
          <TechnologiesItem item={item} key={i} />
        ))}
      </div>
    </div>
  )
}
