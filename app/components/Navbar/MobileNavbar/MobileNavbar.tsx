import { MenuItems } from '@/app/constants'
import React from 'react'
import { MobileMenuItem } from '..'

export const MobileNavbar = () => {
  return (
    <div className="fixed bottom-0 flex h-[100px] w-full items-center justify-center bg-dark px-2 md:sr-only">
      <div className="flex w-full items-center justify-evenly">
        {MenuItems.map((item) => (
          <MobileMenuItem key={`${item.label} - menu`} item={item} />
        ))}
      </div>
    </div>
  )
}
