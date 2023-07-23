import React from 'react'
import Header from './Default/Header'
import Footer from './Default/Footer'

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default DefaultLayout
