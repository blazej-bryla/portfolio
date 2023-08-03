import { MenuItems } from '@/app/constants'
import React from 'react'
import { DesktopMenuItem, ThemeSwitcher } from '..'
import Link from 'next/link'

export const DesktopNavbar = () => {
  return (
    <div className="mx-auto hidden h-[72px] max-w-base items-center justify-between px-6 dark:bg-dark  md:flex">
      <Link
        href="/"
        className="flex translate-y-1 cursor-pointer items-center justify-center font-borel text-dark transition dark:text-gray"
      >
        blazej-bryla
      </Link>
      <div className="flex h-10">
        {MenuItems.map((item) => (
          <DesktopMenuItem key={`${item.label}-menu`} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <ThemeSwitcher />
      </div>
    </div>
  )
}
