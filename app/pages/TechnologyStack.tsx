import React from 'react'
import { Container, SectionLabel } from '../components'
import { TechnologiesCategory } from './TechnologyStack/TechnologiesCategory'
import { TechnologiesCategoryList } from '../constants'

export const TechnologyStack = () => {
  return (
    <div className="bg-dark pt-24">
      <Container>
        <SectionLabel label="My Technology Stack:" />
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4">
          {TechnologiesCategoryList.map((item, i) => (
            <TechnologiesCategory item={item} key={i} />
          ))}
        </div>
      </Container>
    </div>
  )
}
