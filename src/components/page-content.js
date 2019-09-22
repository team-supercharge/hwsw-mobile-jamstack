import React from 'react'
import { useStore } from '../store/store-context'
import classNames from 'classnames'
import Header from './header'

const PageContent = ({ children }) => {
  const [{ layout }] = useStore()

  return (
    <div
      className={classNames(
        'relative',
        'h-screen',
        'page-container',
        layout.isCartOpen && 'page-container-cart-open',
      )}
    >
      <Header />
      <main className="container mx-auto py-16 px-4 md:px-8">{children}</main>
      {layout.isCartOpen && (
        <div className="absolute left-0 top-0 w-full h-full bg-gray-900 opacity-25" />
      )}
    </div>
  )
}

export default PageContent
