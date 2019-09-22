import { types } from '../types'

export const initialState = {
  products: {},
}

export const reducer = (state, action) => {
  switch (action.type) {
    case types.INCREMENT_QUANTITY: {
      const cartProduct = state.products[action.payload.slug]

      return {
        ...state,
        products: {
          ...state.products,
          [action.payload.slug]: {
            ...action.payload,
            quantity: cartProduct ? cartProduct.quantity + 1 : 1,
          },
        },
      }
    }
    case types.DECREASE_QUANTITY: {
      return {
        ...state,
        products: Object.keys(state.products).reduce((products, slug) => {
          if (slug !== action.payload.slug) {
            return { ...products, [slug]: state.products[slug] }
          }

          if (state.products[slug].quantity === 1) {
            return products
          }

          return {
            ...products,
            [slug]: {
              ...state.products[slug],
              quantity: state.products[slug].quantity - 1,
            },
          }
        }, {}),
      }
    }
    default:
      return state
  }
}
