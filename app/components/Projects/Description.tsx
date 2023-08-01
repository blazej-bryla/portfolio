import { DescriptionProps } from '@/app/types/Projects'
import React from 'react'

export const Description = ({ description }: DescriptionProps) => {
  return (
    <div>
      <p>Description:</p>
      <div className="w-fit rounded-lg bg-lightDark p-4 text-sm tracking-wide">
        <i>{description}</i>
      </div>
    </div>
  )
}
