import React, { useReducer, createContext } from 'react'
import PageContent from './page-content'
import Cart from './cart'

export const StateContext = createContext()

function Layout({ children }) {
  const initialState = { isCartOpen: false }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_CART':
        return { isCartOpen: !state.isCartOpen }
      default:
        return state
    }
  }

  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      <PageContent>{children}</PageContent>
      <Cart />
    </StateContext.Provider>
  )
}

export default Layout
