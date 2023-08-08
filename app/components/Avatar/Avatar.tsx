import React from 'react'
import Image from 'next/legacy/image'
import { HeroPicture, ProfilePicture } from '@/app/assets'
import { Avatar as AvatarType } from '@/app/types'

export const Avatar = ({ size, picture }: AvatarType) => {
  return (
    <Image
      src={picture === 'hero' ? HeroPicture : ProfilePicture}
      alt="blazej-bryla-avaatar"
      width={size}
      height={size}
      priority
      className="rounded-[50%]"
    />
  )
}
