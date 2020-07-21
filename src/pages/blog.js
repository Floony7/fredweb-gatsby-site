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
      <section className="outer outer--hero mb-2">
        <div className="container container--grid-2">
          <div className="content">
            <h1>Hi from the Blog</h1>
            <p>
              Welcome to the blog. Here are just some of the amazing stories I
              have written.
            </p>
            <ol className={BlogStyles.posts}>
              {data.allMarkdownRemark.edges.map(edge => {
                return (
                  <li className={BlogStyles.post}>
                    <Link to={`/blog/${edge.node.fields.slug}`}>
                      <a>
                        <h3 className={BlogStyles.postTitle}>
                          {edge.node.frontmatter.title}
                        </h3>
                        <small>Posted on: {edge.node.frontmatter.date}</small>
                        <p>{edge.node.excerpt}</p>
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ol>
            <Link to="/">Go back to the homepage</Link>
          </div>{" "}
          {/* End content div */}
          <div className="sidebar">
            <h2>Featured posts</h2>
            <p>
              <em>Feature in development.</em>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default BlogPage
