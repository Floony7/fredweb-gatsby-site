/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"
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
          <Header siteTitle={data.site.siteMetadata.title} />
      </div>
    </div>
    <div className={sectionStyles.container}>
          <main>{children}</main>
    </div>
        <Footer author={data.site.siteMetadata.author} 
        data={data.site.siteMetadata}
        />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
