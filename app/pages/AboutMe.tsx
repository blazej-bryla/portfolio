import React from 'react'
import { Container, SectionLabel } from '../components'
import { AboutMeText } from './AboutMe/AboutMeText'
import Image from 'next/image'
import { MemojiThink } from '../assets'

export const AboutMe = () => {
  return (
    <div id="about-me" className="bg-white pt-24 dark:bg-dark">
      <Container>
        <SectionLabel label="About Me" />
        <div className="justfy-center flex flex-col items-center md:flex-row-reverse md:justify-between">
          <Image
            src={MemojiThink}
            width={250}
            height={250}
            alt="blazej-bryla-memoji"
            className="pb-4"
          />
          <AboutMeText />
        </div>
      </Container>
    </div>
  )
}
