import React, { useContext } from 'react'
import classNames from 'classnames'
import Header from './header'
import { StateContext } from './layout'

const PageContent = ({ children }) => {
  const [state] = useContext(StateContext)
  return (
    <div
      className={classNames(
        'relative',
        'h-screen',
        'page-container',
        state.isCartOpen && 'page-container-cart-open',
      )}
    >
      <Header />
      <main className="container mx-auto py-16 px-4 md:px-8">{children}</main>
      {state.isCartOpen && (
        <div className="absolute left-0 top-0 w-full h-full bg-gray-900 opacity-25" />
      )}
    </div>
  )
}

export default PageContent
