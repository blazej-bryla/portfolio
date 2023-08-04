import React from 'react'
import { Container, Gallery, SectionLabel } from '../components'
import { CertificateList } from '../constants'

export const Certificates = () => {
  return (
    <div className="w-full pt-24 dark:bg-dark" id="certificates">
      <Container>
        <SectionLabel label="Certificates:" />
        <Gallery imageList={CertificateList} />
      </Container>
    </div>
  )
}
