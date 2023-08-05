'use client'
import { SocialItemsType } from '@/app/types'
import { Icon } from '@iconify/react/dist/iconify.js'

export const SocialMediaItem = ({ item }: { item: SocialItemsType }) => {
  return (
    <a href={item.href}>
      <Icon icon={item.icon} width={25} height={25} />
    </a>
  )
}
