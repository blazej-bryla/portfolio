import { TitleProps } from '@/app/types/Projects'
import React from 'react'

export const Title = ({ label, date }: TitleProps) => {
  return (
    <div className="flex w-full justify-between rounded-lg bg-lightDark p-4 text-xl">
      <p>Title: {label}</p>
      <p className="text-sm text-gray">Date: {date}</p>
    </div>
  )
}
