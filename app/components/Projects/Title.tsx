import { TitleProps } from '@/app/types/Projects'
import React from 'react'

export const Title = ({ label, date }: TitleProps) => {
  return (
    <div className="flex w-full justify-between rounded-lg border border-dark bg-white p-4 text-xl text-dark transition duration-300 dark:border-active dark:bg-dark dark:text-white md:border-lightDark  md:hover:bg-darkerWhite dark:md:hover:bg-lightDark">
      <p className="text-dark dark:text-white">Title: {label}</p>
      <p className="text-sm text-gray">Date: {date}</p>
    </div>
  )
}
