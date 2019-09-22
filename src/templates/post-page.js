import React from 'react'
import { graphql } from 'gatsby'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <article>
      <header>
        <h1 className="font-bold text-3xl mb-2">{frontmatter.title}</h1>
        <p className="block mb-5">{frontmatter.date}</p>
      </header>
      <section
        className="markdown"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
