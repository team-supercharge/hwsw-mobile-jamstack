import { Link } from 'gatsby'
import React from 'react'

const products = [
  { slug: 'product-name-1', price: 879.99, name: 'Product Name 1' },
  { slug: 'product-name-2', price: 79.99, name: 'Product Name 2' },
]

const IndexPage = () => (
  <div className="product-list">
    {products.map(({ slug, name, price }) => (
      <Link
        key={slug}
        className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
        to={slug}
      >
        <div className="relative pb-full">
          <img
            src="https://source.unsplash.com/random/800x600"
            alt={name}
            className="absolute h-full w-full object-cover"
          />
        </div>
        <div className="bg-white p-4">
          <div className="font-bold text-2xl text-gray-900">{name}</div>
          <div className="font-semibold text-l text-gray-700">€{price}</div>
        </div>
      </Link>
    ))}
  </div>
)

export default IndexPage
