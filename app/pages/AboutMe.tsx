import React from 'react'
import { Container, SectionLabel } from '../components'
import { AboutMeText } from './AboutMe/AboutMeText'

export const AboutMe = () => {
  return (
    <div id="about-me" className="pt-24 dark:bg-dark">
      <Container>
        <SectionLabel label="About Me" />
        <AboutMeText />
      </Container>
    </div>
  )
}
