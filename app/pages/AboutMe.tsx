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
        <div className="flex w-full items-center justify-center pt-4 md:justify-start">
          <a
            href="/pdf/blazej_bryla_cv.pdf"
            download
            className="w-fit cursor-pointer rounded-lg border border-dark p-3 text-dark transition duration-300 dark:border-active dark:text-white md:dark:hover:bg-lightDark"
          >
            Get my CV 💼
          </a>
        </div>
      </Container>
    </div>
  )
}
