import React from 'react'
import { BackgroundHero } from '@/app/assets'
import Image from 'next/image'

export const HeroGraphic = () => {
  return (
    <div className="absolute -z-10 flex h-screen w-screen items-center justify-center bg-dark">
      <Image
        alt="Background Image"
        src={BackgroundHero}
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}
