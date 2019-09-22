import React from 'react'
import Header from './header'
import { StateProvider } from '../store/store-context'
import PageContent from './page-content'
import Cart from './cart'
import {
  reducer as cartReducer,
  initialState as cartInitialState,
} from '../store/reducers/cart'
import {
  reducer as layoutReducer,
  initialState as layoutInitialState,
} from '../store/reducers/layout'

function Layout({ children }) {
  const mainReducer = ({ cart, layout, orders }, action) => {
    return {
      cart: cartReducer(cart, action),
      layout: layoutReducer(layout, action),
    }
  }

  const initialState = {
    cart: cartInitialState,
    layout: layoutInitialState,
  }

  return (
    <StateProvider initialState={initialState} reducer={mainReducer}>
      <PageContent>{children}</PageContent>
      <Cart />
    </StateProvider>
  )
}

export default Layout
