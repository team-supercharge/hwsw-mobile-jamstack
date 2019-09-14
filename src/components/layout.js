import React from 'react'
import Header from './header'

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="container mx-auto py-16 px-4 md:px-8">{children}</main>
    </>
  )
}

export default Layout
