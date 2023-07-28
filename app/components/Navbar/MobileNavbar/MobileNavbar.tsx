import { MenuItems } from '@/app/constants'
import React from 'react'
import { MobileMenuItem } from '..'

export const MobileNavbar = () => {
  return (
    <div className="absolute bottom-0 flex h-[100px] w-full items-center justify-center bg-dark px-2 md:sr-only">
      <div className="flex w-full items-center justify-between">
        {MenuItems.map((item) => (
          <MobileMenuItem key={`${item.label} - menu`} item={item} />
        ))}
      </div>
    </div>
  )
}
