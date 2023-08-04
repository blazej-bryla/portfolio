'use client'
import { MenuItemsType } from '@/app/types'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

export const MobileMenuItem = ({ item }: { item: MenuItemsType }) => {
  return (
    <Link
      href={item.href}
      className="flex flex-col items-center justify-center bg-white text-xs dark:bg-dark"
    >
      <Icon
        icon={item.icon}
        width={16}
        height={16}
        className="text-dark dark:text-gray"
      />
      <p className="text-dark dark:text-gray">{item.label}</p>
    </Link>
  )
}
