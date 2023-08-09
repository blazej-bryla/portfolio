import React from 'react'
import { HeroGraphic } from './Hero/HeroGraphic'
import { HeroText } from './Hero/HeroText'
import { ThemeSwitcher } from '../components/Navbar'
import Image from 'next/image'
import { MemojiLaptop } from '../assets'

export const Hero = () => {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center">
      <div className="absolute right-4 top-4 rounded-lg border border-gray bg-white p-2 dark:border-active dark:bg-lightDark md:sr-only">
        <ThemeSwitcher />
      </div>
      <div className=" flex -translate-y-[100px] flex-col items-center justify-center gap-8">
        <div className="-translate-y-[20px]">
          <Image
            width={300}
            height={300}
            alt="blazej-bryla-hero-photo"
            src={MemojiLaptop}
            priority
          />
        </div>
        <HeroText />
      </div>
      <HeroGraphic />
    </div>
  )
}
