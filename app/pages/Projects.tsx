import React from 'react'
import { Container, SectionLabel } from '../components'
import { ProjectsItems } from '../constants'
import { ProjectItem } from '../components/Projects'

export const Projects = () => {
  return (
    <div className="bg-dark pt-24">
      <Container>
        <SectionLabel label="My Projects:" />
        {ProjectsItems.map((item, i) => (
          <ProjectItem project={item} key={i} />
        ))}
      </Container>
    </div>
  )
}
