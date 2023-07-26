'use client'
import { MenuItemsType } from '@/app/types'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

export const MobileMenuItem = ({ item }: { item: MenuItemsType }) => {
  return (
    <Link
      href={item.href}
      className="flex flex-col items-center justify-center bg-dark text-sm"
    >
      <Icon icon={item.icon} width={24} height={24} className="text-gray" />
      <p className="text-gray">{item.label}</p>
    </Link>
  )
}
