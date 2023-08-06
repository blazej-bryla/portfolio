import React from 'react'
import { Container } from '.'
import { SocialMedia } from './SocialMedia'
import { SocialItems } from '../constants'

export const Footer = () => {
  return (
    <footer className="bg-white py-8 dark:bg-dark">
      <Container>
        <div className="flex items-center justify-between">
          <p className="font-borel text-dark dark:text-white">blazej-bryla</p>
          <SocialMedia socialMediaItems={SocialItems} />
        </div>
      </Container>
    </footer>
  )
}
