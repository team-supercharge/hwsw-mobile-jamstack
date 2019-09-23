import React, { useEffect } from 'react'
import netlifyIdentity from 'netlify-identity-widget'
import { navigate } from 'gatsby'
import { useStore } from '../store/StoreContext'
import { types } from '../store/types'

function Orders() {
  const [{ orders }, dispatch] = useStore()

  useEffect(() => {
    const user = netlifyIdentity.currentUser()
    if (!user) {
      navigate('/')
    }
    dispatch({ type: types.LOAD_ORDER_HISTORY })
  }, [])

  const items = orders.history.map(order => (
    <div className="mt-4 p-8 shadow-lg rounded-lg" key={order.id}>
      {Object.values(order.products).map(product => (
        <div
          key={product.slug}
          className="flex justify-between items-center mt-1 pb-1 border-b-2 border-gray-200 last:border-b-0"
        >
          <div>
            <div className="font-bold text-xl text-gray-900">
              {product.name}
            </div>
            <div className="font-semibold text-lg text-gray-700 pt-2">
              €{product.price}
            </div>
          </div>
          <div className="font-extrabold text-4xl text-gray-500">
            {product.quantity}
          </div>
        </div>
      ))}
    </div>
  ))

  return (
    <div className="max-w-md m-auto">
      <h1 className="text-2xl font-bold">Your Orders History</h1>
      <div>{items}</div>
    </div>
  )
}

export default Orders
