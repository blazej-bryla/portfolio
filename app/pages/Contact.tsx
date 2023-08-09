import React from 'react'
import { Container, SectionLabel } from '../components'
import { Form } from './Contact/Form'

export const Contact = () => {
  return (
    <div className="w-full bg-white pt-24 dark:bg-dark" id="contact">
      <Container>
        <SectionLabel label="Contact" />
        <div className=" grid w-full grid-cols-1 md:grid-cols-2 md:gap-4">
          <div className="lg:max-w-[75%]">
            <p className="text-xl font-bold text-dark dark:text-white">
              Ready for New Challenges!
            </p>
            <p className="pb-6 pt-2  text-dark dark:text-white">
              If you&apos;re looking for a passionate developer ready 💻 to dive
              into a project and turn ideas into reality, you&apos;ve come to
              the right place. <br /> Get in touch with me today to discuss how
              I can bring value to your team or project. 📩
            </p>
          </div>
          <Form />
        </div>
      </Container>
    </div>
  )
}
