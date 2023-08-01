import React from 'react'
import { Container, SectionLabel } from '../components'
import { AboutMeText } from './AboutMe/AboutMeText'

export const AboutMe = () => {
  return (
    <div id="about-me" className="bg-dark">
      <Container>
        <SectionLabel label="About Me" />
        <AboutMeText />
      </Container>
    </div>
  )
}
