import { TitleProps } from '@/app/types/Projects'
import React from 'react'

export const Title = ({ label, date }: TitleProps) => {
  return (
    <div className="flex w-full justify-between rounded-lg border border-dark p-4 text-xl text-dark dark:border-0 dark:bg-lightDark dark:text-white">
      <p className="text-dark dark:text-white">Title: {label}</p>
      <p className="text-sm text-gray">Date: {date}</p>
    </div>
  )
}
