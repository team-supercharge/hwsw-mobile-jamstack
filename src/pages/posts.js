import React from "react"
import { Link, graphql } from "gatsby"

const PostsPage = ({ data }) => {
    const posts = data.allMarkdownRemark.edges
      return posts.map(({ node }) => {
        return (
          <article className="mb-8" key={node.frontmatter.path}>
            <header>
              <h3 className="font-bold text-3xl mb-1">
                <Link
                  className="text-red-600 shadow-none no-underline"
                  to={node.frontmatter.path}
                >
                  {node.frontmatter.title}
                </Link>
              </h3>
              <small className="uppercase font-semibold text-gray-600">
                {node.frontmatter.date}
              </small>
            </header>
            <section>
              <p
                className="mt-2 text-gray-900"
                dangerouslySetInnerHTML={{
                  __html: node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })
}

export default PostsPage

export const pageQuery = graphql`
query {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
}
`
