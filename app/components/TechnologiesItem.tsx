'use client'
import { TechnologiesItem as TechnologiesItemType } from '@/app/types'
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { MyTooltip } from '.'

export const TechnologiesItem = ({ item }: { item: TechnologiesItemType }) => {
  return (
    <MyTooltip content={item.label}>
      <a href={item.href} title={item.label}>
        <Icon icon={item.icon} width={40} height={40} />
      </a>
    </MyTooltip>
  )
}
