import React, { ReactNode } from 'react'

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto w-full max-w-base px-2 base:px-0">{children}</div>
  )
}
