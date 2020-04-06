import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import BlogStyles from "./blog.module.scss"
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
          fields {
            slug
          }
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
    <p>Welcome to the blog. Here are just some of the amazing stories I have written.</p>
    <ol className={BlogStyles.posts}>
      {data.allMarkdownRemark.edges.map(edge => {
        return (
          <li className={BlogStyles.post}>
            <Link to={`/blog/${edge.node.fields.slug}`}><a>
              <h2>{edge.node.frontmatter.title}</h2>
              <small>Posted on: {edge.node.frontmatter.date}</small>
              <p>{edge.node.excerpt}</p>
              </a>
            </Link>
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
