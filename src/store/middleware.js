import { types } from './types'
import netlifyIdentity from 'netlify-identity-widget'

export const applyMiddleware = dispatch => action => {
  dispatch(action)

  const fetchData = async () => {
    switch (action.type) {
      case types.CHECKOUT: {
        const user = netlifyIdentity.currentUser()
        const token = await user.jwt()
        const response = await fetch('/.netlify/functions/orders', {
          method: 'post',
          body: JSON.stringify(action.payload),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        const [, order] = await response.json()

        dispatch({
          type: types.CHECKOUT_SUCCESS,
          payload: {
            ...order.data,
            id: order.ref['@ref'].id,
          },
        })
        break
      }
      case types.LOAD_ORDER_HISTORY: {
        const user = netlifyIdentity.currentUser()
        const token = await user.jwt()
        const response = await fetch('/.netlify/functions/orders', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        const orders = await response.json()
        const payload = orders.map(item => ({
          ...item.data,
          id: item.ref['@ref'].id,
        }))
        dispatch({
          type: types.LOAD_ORDER_HISTORY_SUCCESS,
          payload: payload,
        })
        break
      }
      default:
        return
    }
  }
  fetchData()
}
