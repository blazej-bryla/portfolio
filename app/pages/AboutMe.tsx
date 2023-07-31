import React from 'react'
import { SectionLabel } from '../components'
import { AboutMeText } from './AboutMe/AboutMeText'

export const AboutMe = () => {
  return (
    <div className="flex flex-col bg-dark px-2">
      <SectionLabel label="About Me" />
      <AboutMeText />
    </div>
  )
}
