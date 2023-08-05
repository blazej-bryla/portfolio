import { SocialItemsType } from '@/app/types'
import { SocialMediaItem } from '.'

export const SocialMedia = ({
  socialMediaItems
}: {
  socialMediaItems: SocialItemsType[]
}) => {
  return (
    <div className="flex items-center justify-center gap-4">
      {socialMediaItems.map((item, i) => (
        <SocialMediaItem key={i} item={item} />
      ))}
    </div>
  )
}
