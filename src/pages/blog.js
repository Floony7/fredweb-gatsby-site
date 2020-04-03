import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          html
          excerpt
        }
      }
    }
  }
  `)

  console.log(data)
  return (
  <Layout>
    <SEO title="Blog" />
    <h1>Hi from the Blog</h1>
    <p>Welcome to the blog. Here are jsut some of the amazing stories I have written.</p>
    <ol>
      {data.allMarkdownRemark.edges.map(edge => {
        return (
          <li>
            <h2>{edge.node.frontmatter.title}</h2>
        <p>Posted on: {edge.node.frontmatter.date}</p>
        <p>{edge.node.excerpt}</p>
          </li>
        )
      })
    }
    </ol>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
    )
}
export default BlogPage
