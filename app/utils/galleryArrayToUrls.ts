import { GalleryProps } from '../types'

export const galleryArrayToUrls = (galleryArray: GalleryProps) => {
  return galleryArray.map((item) => item.image)
}
