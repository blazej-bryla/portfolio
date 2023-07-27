import React from 'react'
import Image from 'next/image'
import Test from '../../assets/pictures/profile-picture.webp'
export const Avatar = () => {
  return (
    <Image
      src={Test}
      alt="blazej-bryla-avaatar"
      width={40}
      height={40}
      className="rounded-[50%]"
    />
  )
}
