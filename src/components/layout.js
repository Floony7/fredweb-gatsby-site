/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.module.scss"
import "../styles/index.scss"
import "typeface-open-sans"
import sectionStyles from "./section.module.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (      
    <>
    <div className={sectionStyles.outer}>
      <div className={sectionStyles.container}>
        <div className={sectionStyles.content}>
          <Header siteTitle={data.site.siteMetadata.title} />
        </div>
      </div>
    </div>
    <div className={sectionStyles.container}>
    <div className={sectionStyles.content}>
          <main>{children}</main>
    </div>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> by {data.site.siteMetadata.author}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
