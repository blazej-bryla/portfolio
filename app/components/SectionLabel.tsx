import React from 'react'

export const SectionLabel = ({ label }: { label: string }) => {
  return (
    <p className="font-borel text-xl text-white md:text-2xl xl:text-3xl">
      {label}
    </p>
  )
}
