import React from 'react'
import classNames from 'classnames'
import { useStore } from '../store/store-context'
import { types } from '../store/types'

function Cart() {
  const [{ layout, cart }, dispatch] = useStore()

  const products = Object.values(cart.products)

  return (
    <div
      className={classNames(
        'cart-container',
        layout.isCartOpen && 'cart-container-open',
      )}
    >
      <div className="flex justify-between mb-4 mt-4">
        <span className="text-2xl font-bold">Your Cart</span>
        <button className="w-8" onClick={() => alert('Toogle clicked')}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M437.5 386.6L306.9 256l130.6-130.6c14.1-14.1 14.1-36.8 0-50.9-14.1-14.1-36.8-14.1-50.9 0L256 205.1 125.4 74.5c-14.1-14.1-36.8-14.1-50.9 0-14.1 14.1-14.1 36.8 0 50.9L205.1 256 74.5 386.6c-14.1 14.1-14.1 36.8 0 50.9 14.1 14.1 36.8 14.1 50.9 0L256 306.9l130.6 130.6c14.1 14.1 36.8 14.1 50.9 0 14-14.1 14-36.9 0-50.9z" />
          </svg>
        </button>
      </div>
      {products.length ? (
        <div className="flex justify-between border-b-2">
          <div className="uppercase text-xs font-semibold text-gray-600 flex-grow text-left">
            Product
          </div>
          <div className="uppercase text-xs font-semibold text-gray-600 flex-grow-0 w-16 text-center">
            Qty.
          </div>
          <div className="uppercase text-xs font-semibold text-gray-600 flex-grow-0 w-16 text-center">
            Remove
          </div>
        </div>
      ) : (
        <div className="text-center mt-20">Your Cart is sad 😔</div>
      )}
      {products.map(product => (
        <div
          key={product.slug}
          className="flex justify-between items-center py-2 border-b-2 border-gray-200"
        >
          <div className="flex-grow text-left">
            <div className="text-xl">{product.name}</div>
            <div>€{product.price}</div>
          </div>
          <div className="flex-grow-0 w-16 text-center">{product.quantity}</div>

          <div className="flex-grow-0 w-16">
            <button
              className="w-8 block m-auto"
              onClick={() => alert('Decreased clicked')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path fill="none" d="M0 0h48v48H0z" />
                <path d="M14 22v4h20v-4H14zM24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cart
