import { types } from '../types'

export const initialState = {
  history: [],
}

export const reducer = (state, action) => {
  switch (action.type) {
    case types.LOAD_ORDER_HISTORY_SUCCESS:
      return state
    case types.CHECKOUT_SUCCESS:
      return state
    default:
      return state
  }
}
