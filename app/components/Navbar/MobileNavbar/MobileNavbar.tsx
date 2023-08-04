import { MenuItems } from '@/app/constants'
import React from 'react'
import { MobileMenuItem } from '..'

export const MobileNavbar = () => {
  return (
    <div className="fixed bottom-0 z-10 flex h-[60px] w-full items-center justify-center border border-gray bg-white px-2 dark:border-lightDark dark:bg-dark md:sr-only">
      <div className="flex w-full items-center justify-evenly">
        {MenuItems.map((item) => (
          <MobileMenuItem key={`${item.label} - menu`} item={item} />
        ))}
      </div>
    </div>
  )
}
