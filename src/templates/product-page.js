import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

export default function ProductPage({
  data: {
    markdownRemark: { frontmatter, html, fields },
  },
}) {
  return (
    <div className="flex flex-col md:flex-row md:-mx-8">
      <Img
        fluid={frontmatter.image.childImageSharp.fluid}
        className="h-full w-full md:w-1/3 md:mx-8 rounded-lg"
      />
      <div className="mt-4 md:mt-0 md:w-2/3 md:mx-8">
        <Link className="text-gray-700 font-bold text-red-600" to="/">
          ← Back to product list
        </Link>
        <h1 className="font-bold text-4xl text-gray-900">{frontmatter.name}</h1>
        <span className="block font-semibold text-lg text-gray-700">
          €{frontmatter.price}
        </span>
        <button
          className="btn btn-red mt-4"
          onClick={() => alert('Increment clicked')}
        >
          Add to cart
        </button>
        <div
          className="markdown mt-4"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </div>
    </div>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        price
        name
      }
    }
  }
`
