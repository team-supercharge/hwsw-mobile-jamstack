import { graphql, Link } from 'gatsby'
import React from 'react'

const IndexPage = ({ data }) => (
  <div className="product-list">
    {data.allMarkdownRemark.edges.map(
      ({
        node: {
          fields: { slug },
          frontmatter: { name, image, price },
        },
      }) => (
        <Link
          key={slug}
          className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
          to={slug}
        >
          <div className="relative pb-full">
            <img
              src={image}
              alt={name}
              className="absolute h-full w-full object-cover"
            />
          </div>
          <div className="bg-white p-4">
            <div className="font-bold text-2xl text-gray-900">{name}</div>
            <div className="font-semibold text-l text-gray-700">€{price}</div>
          </div>
        </Link>
      ),
    )}
  </div>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "product-page" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            image
            price
            name
          }
        }
      }
    }
  }
`

export default IndexPage
