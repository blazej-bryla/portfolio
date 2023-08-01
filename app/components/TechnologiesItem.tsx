'use client'
import { TechnologiesItem as TechnologiesItemType } from '@/app/types'
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

export const TechnologiesItem = ({ item }: { item: TechnologiesItemType }) => {
  return (
    <a href={item.href}>
      <Icon icon={item.icon} width={40} height={40} />
    </a>
  )
}
