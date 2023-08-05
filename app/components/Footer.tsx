import React from 'react'
import { Container } from '.'
import { SocialMedia } from './SocialMedia'
import { SocialItems } from '../constants'

export const Footer = () => {
  return (
    <footer className="bg-white py-8 dark:bg-dark">
      <Container>
        <SocialMedia socialMediaItems={SocialItems} />
      </Container>
    </footer>
  )
}
