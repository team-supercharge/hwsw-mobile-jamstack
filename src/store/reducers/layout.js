import { types } from '../types';

export const initialState = {
  isCartOpen: false
};

export const reducer = (state, action) => {
  switch (action.type) {
    case types.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen
      };

    default:
      return state;
  }
};
