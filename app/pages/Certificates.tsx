import React from 'react'
import { Container, Gallery, SectionLabel } from '../components'
import { CertificateList } from '../constants'

export const Certificates = () => {
  return (
    <div className="w-full bg-dark pt-24">
      <Container>
        <SectionLabel label="Certificates:" />
        <Gallery imageList={CertificateList} />
      </Container>
    </div>
  )
}
