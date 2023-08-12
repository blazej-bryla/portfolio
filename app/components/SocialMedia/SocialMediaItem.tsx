'use client'
import { SocialItemsType } from '@/app/types'
import { Icon } from '@iconify/react'
import { MyTooltip } from '..'

export const SocialMediaItem = ({ item }: { item: SocialItemsType }) => {
  return (
    <MyTooltip content={item.label}>
      <a href={item.href} title={item.label}>
        <Icon icon={item.icon} width={25} height={25} />
      </a>
    </MyTooltip>
  )
}
