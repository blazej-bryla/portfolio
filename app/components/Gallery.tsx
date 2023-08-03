'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import FsLightbox from 'fslightbox-react'
import { GalleryProps } from '../types'
import { galleryArrayToUrls } from '../utils'

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
          <div
            key={i}
            className="w-full cursor-pointer p-2"
            onClick={() => handleImageClick(i)}
          >
            <Image
              src={item.image}
              alt={item.label}
              layout="responsive"
              style={{ objectFit: 'cover' }}
              width={500}
              height={500}
              className="rounded-lg border border-gray dark:border-active"
            />
          </div>
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
