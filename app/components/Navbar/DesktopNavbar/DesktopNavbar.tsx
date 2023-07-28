import { MenuItems } from '@/app/constants'
import React from 'react'
import { DesktopMenuItem, ThemeSwitcher } from '..'
import { Avatar } from '../../Avatar/Avatar'

export const DesktopNavbar = () => {
  return (
    <div className="hidden h-[72px] w-full items-center justify-between rounded-b-xl bg-dark px-6  md:flex">
      <p className="text-gray">Błażej Bryła</p>
      <div className="flex h-10">
        {MenuItems.map((item) => (
          <DesktopMenuItem key={`${item.label}-menu`} item={item} />
        ))}
      </div>
      <div className="flex">
        <ThemeSwitcher />
        <Avatar />
      </div>
    </div>
  )
}
