import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
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
            <Img
              fluid={image.childImageSharp.fluid}
              alt={name}
              style={{ position: 'absolute', width: '100%', height: '100%' }}
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
            image {
              childImageSharp {
                fluid(maxWidth: 610, quality: 80, fit: COVER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            price
            name
          }
        }
      }
    }
  }
`

export default IndexPage
