import React from 'react'

export const SectionLabel = ({ label }: { label: string }) => {
  return (
    <p className="pb-4 font-borel text-xl text-dark dark:text-white md:text-2xl xl:text-3xl">
      {label}
    </p>
  )
}
