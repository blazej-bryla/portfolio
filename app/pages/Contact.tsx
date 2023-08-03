import React from 'react'
import { Container, SectionLabel } from '../components'
import { Form } from './Contact/Form'

export const Contact = () => {
  return (
    <div className="w-full pt-24 dark:bg-dark">
      <Container>
        <SectionLabel label="Contact" />
        <div className="grid w-full grid-cols-1 md:grid-cols-2">
          <div></div>

          <Form />
        </div>
      </Container>
    </div>
  )
}
