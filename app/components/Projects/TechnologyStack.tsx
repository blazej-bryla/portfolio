import React from 'react'
import { TechnologiesItem } from '../TechnologiesItem'
import { TechnologiesProps } from '@/app/types/Projects'

export const TechnologyStack = ({ technologies }: TechnologiesProps) => {
  return (
    <div className="flex flex-col gap-y-2">
      <p>Technology Stack:</p>
      <div className="flex w-fit flex-wrap gap-2 rounded-lg bg-lightDark p-4">
        {technologies.map((item, i) => (
          <TechnologiesItem item={item} key={i} />
        ))}
      </div>
    </div>
  )
}
