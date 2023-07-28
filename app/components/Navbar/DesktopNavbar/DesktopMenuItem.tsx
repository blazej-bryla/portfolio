'use client'
import { MenuItemsType } from '@/app/types'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

export const DesktopMenuItem = ({ item }: { item: MenuItemsType }) => {
  return (
    <Link
      href={item.href}
      className="flex h-10 w-[160px] items-center justify-center gap-2 rounded-lg text-gray transition duration-300 hover:text-active"
    >
      <Icon icon={item.icon} width={20} height={20} />
      <p className="text-sm">{item.label}</p>
    </Link>
  )
}
