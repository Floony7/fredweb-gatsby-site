import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.scss"
import IndexStyles from "./index.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={IndexStyles.indexContainer}>
      <section className={IndexStyles.sectionHero}>
        <h1>Hi people</h1>
        <p>Welcome to the home of Kiwi web developer Fred Lunjevich.</p>
        <p>Hi</p>
      </section>
    </div>
  </Layout>
)

export default IndexPage
