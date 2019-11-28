import { Link } from 'gatsby'
import React from 'react'
import { useStore } from '../store/store-context'
import { types } from '../store/types'

export default function ProductPage() {
  const [, dispatch] = useStore()
  return (
    <div className="flex flex-col md:flex-row md:-mx-8">
      <img
        src="https://source.unsplash.com/random/800x600"
        alt={'T-Shirt'}
        className="h-full w-full md:w-1/3 md:mx-8 rounded-lg"
      />
      <div className="mt-4 md:mt-0 md:w-2/3 md:mx-8">
        <Link className="text-gray-700 font-bold text-red-600" to="/">
          ← Back to product list
        </Link>
        <h1 className="font-bold text-4xl text-gray-900">T-Shirt</h1>
        <span className="block font-semibold text-lg text-gray-700">
          €100.00
        </span>
        <button
          className="btn btn-red mt-4"
          onClick={() =>
            dispatch({
              type: types.INCREMENT_QUANTITY,
              payload: {
                slug: 't-shirt',
                name: 'T-Shirt',
                price: '100',
              },
            })
          }
        >
          Add to cart
        </button>
        <div
          className="markdown mt-4"
          dangerouslySetInnerHTML={{
            __html: 'Test product description',
          }}
        />
      </div>
    </div>
  )
}
