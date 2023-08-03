import { GalleryProps } from '../types'

export const galleryArrayToUrls = (galleryArray: GalleryProps[]): string[] => {
  return galleryArray.map((item) => item.image)
}
