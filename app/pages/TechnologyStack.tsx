import React from 'react'
import { SectionLabel } from '../components'
import { TechnologiesList } from '../constants/TechnologiesItems'
import { TechnologiesCategory } from './TechnologyStack/TechnologiesCategory'

export const TechnologyStack = () => {
  return (
    <div className=" bg-dark px-2 pt-4">
      <SectionLabel label="My Technology Stack:" />
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4">
        {TechnologiesList.map((item, i) => (
          <TechnologiesCategory item={item} key={i} />
        ))}
      </div>
    </div>
  )
}
