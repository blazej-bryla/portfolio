'use client'
import React, { useState } from 'react'
import Image from 'next/legacy/image'
import FsLightbox from 'fslightbox-react'
import { GalleryProps } from '../types'
import { galleryArrayToUrls } from '../utils'
import { MyTooltip } from '.'

export const Gallery = ({
  imageList = [
    { label: 'loaded image', image: '/certificates/example-certificate.webp' }
  ]
}: {
  imageList: Array<GalleryProps>
}) => {
  const imageUrls = galleryArrayToUrls(imageList)
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  })

  const handleImageClick = (index: number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index + 1
    })
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {imageList.map((item, i) => (
          <MyTooltip key={i} content={item.label}>
            <div
              className="w-full cursor-pointer rounded-lg border border-gray dark:border-active"
              onClick={() => handleImageClick(i)}
            >
              <Image
                src={item.image}
                alt={item.label}
                layout="responsive"
                width={750}
                priority
                height={526}
                className="rounded-lg"
              />
            </div>
          </MyTooltip>
        ))}
      </div>

      <FsLightbox
        toggler={lightboxController.toggler}
        sources={imageUrls}
        slide={lightboxController.slide}
        type="image"
      />
    </div>
  )
}
