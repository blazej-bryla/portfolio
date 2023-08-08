'use client'
import { SocialItemsType } from '@/app/types'
import { Icon } from '@iconify/react'
import { MyTooltip } from '..'

export const SocialMediaItem = ({ item }: { item: SocialItemsType }) => {
  return (
    <a href={item.href} title={item.label}>
      <MyTooltip content={item.label}>
        <Icon icon={item.icon} width={25} height={25} />
      </MyTooltip>
    </a>
  )
}
