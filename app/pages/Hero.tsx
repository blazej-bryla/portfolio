import React from 'react'
import { HeroGraphic } from './Hero/HeroGraphic'
import { HeroText } from './Hero/HeroText'
import { Avatar } from '../components/Avatar/Avatar'

export const Hero = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex -translate-y-[100px] flex-col items-center justify-center gap-8">
        <div className="translate-y-[20px]">
          <Avatar size={200} picture="hero" />
        </div>
        <HeroText />
      </div>
      <HeroGraphic />
    </div>
  )
}
