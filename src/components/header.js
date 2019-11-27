import { Link } from 'gatsby'
import React, { useState } from 'react'

function Header() {
  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <nav className="bg-black text-white">
      <div className="flex flex-wrap container justify-between mx-auto p-4 md:p-8 ">
        <Link to="/" className="flex items-center no-underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 54 54"
            className="w-10"
          >
            <path
              fill="currentColor"
              d="M17.516 47.585a22.533 22.533 0 0 0 9.475 2.077c12.5 0 22.67-10.168 22.67-22.666 0-6.34-2.617-12.078-6.827-16.196l2.616-3.499C50.708 12.231 54 19.236 54 26.996 54 41.886 41.884 54 26.99 54c-4.852 0-9.409-1.288-13.349-3.537l-3.823 2.84 22.015-29.274 7.44 7.394-21.757 16.162zM38.21 7.292a22.566 22.566 0 0 0-11.214-2.968c-12.494 0-22.66 10.136-22.66 22.594 0 6.911 3.13 13.107 8.05 17.255l-2.6 3.468C3.812 42.7 0 35.244 0 26.918 0 12.075 12.11 0 26.996 0a26.896 26.896 0 0 1 14.95 4.516l3.288-2.442-22.015 29.274-7.44-7.395L38.21 7.292z"
            />
          </svg>

          <span className="ml-2 font-bold text-md leading-tight">
            SUPERCHARGE
            <br />
            SHOP
          </span>
        </Link>
        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto ml-auto`}
        >
          <div className="text-lg font-bold mt-3 md:m-0">
            <Link
              to="/"
              activeClassName="text-red-600"
              className="block p-1 md:px-4 md:inline-block no-underline"
            >
              home
            </Link>

            <Link
              to="/posts"
              partiallyActive
              activeClassName="text-red-600"
              className="block p-1 md:px-4 md:inline-block no-underline"
            >
              blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
