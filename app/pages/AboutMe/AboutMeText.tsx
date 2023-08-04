import React from 'react'
import Link from 'next/link'
export const AboutMeText = () => {
  return (
    <p className="tracking-wider text-dark dark:text-white">
      I&apos;m <i className="font-borel tracking-normal">Blazej</i>, a
      passionate frontend developer 💻 specializing in JavaScript&apos;s
      ecosystem 🍃.
      <br /> I focus on{' '}
      <strong>
        <i>React</i>
      </strong>
      ,{' '}
      <strong>
        <i>Next.js</i>
      </strong>
      , and{' '}
      <strong>
        <i>TailwindCSS</i>
      </strong>{' '}
      to craft interactive and performant 🏎️ websites.
      <br />
      With a keen eye for detail and creativity, I strive for impeccable code
      quality. <br /> Keeping up with the latest trends 📊, I stay ahead in the
      industry.
      <br />
      My work goes beyond <code>coding;</code> I value teamwork and community
      involvement 🧑‍💻.
      <br />
      Always ready for new challenges, I eagerly take part in shaping innovative
      projects. <br />
      <strong>
        <Link href={'#contact'}>
          {' '}
          Let&apos;s collaborate to create unique online experiences! 📩
        </Link>
      </strong>
    </p>
  )
}
