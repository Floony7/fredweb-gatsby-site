import React from 'react'
import Layout from '../components/layout'
import BlogStyles from './blog.module.scss'
import { Link, graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = (props) => {
    return (
        <Layout>
            <h3>{props.data.markdownRemark.frontmatter.title}</h3>
            <small className={BlogStyles.byline}>Posted on: {props.data.markdownRemark.frontmatter.date}</small>
            <section dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}>
            </section>
        </Layout>
    )
}

export default Blog