import { types } from '../types'

export const initialState = {
  history: [],
}

export const reducer = (state, action) => {
  switch (action.type) {
    case types.LOAD_ORDER_HISTORY_SUCCESS:
      return {
        ...state,
        history: action.payload,
      }
    case types.CHECKOUT_SUCCESS: {
      return {
        ...state,
        history: [...state.history, action.payload],
      }
    }

    default:
      return state
  }
}
