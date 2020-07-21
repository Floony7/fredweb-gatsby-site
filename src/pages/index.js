import React from "react"

import Layout from "../components/layout"
import Section from "../components/section"
import SEO from "../components/seo"
import "typeface-open-sans"
import "typeface-source-sans-pro"
import "typeface-libre-baskerville"
import "typeface-fira-sans"
import "../styles/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <div className={IndexStyles.indexContainer}> */}
    <div className="wrapper">
      {/* <section className={IndexStyles.sectionHero}> */}
      <section className="outer outer--hero">
        <div className="container">
          <h1>Web Development projects in 2020</h1>
        </div>
        <div className="container container--grid">
          <div className="flex-col">
            <h2>This website</h2>

            <p>
              This site is a refresh from my previous WordPress portfolio site.
              It is my first site produced with the static site generator
              Gatsby.
            </p>
          </div>
          <div className="flex-col">
            <h2>React Periodic Table lookup</h2>

            <p>
              <a
                href="https://objective-franklin-4f675c.netlify.app/"
                target="_blank"
              >
                This simple app
              </a>{" "}
              that queries a periodic table api and filters based on element
              groupings. My objective with this app was to learn the React
              Context API so I could lift state to the app level.
            </p>
            <h2>Country reference app (in development)</h2>

            <p>
              <a
                href="https://vibrant-almeida-61fe32.netlify.app/"
                target="_blank"
              >
                The Country Reference app
              </a>{" "}
              is another React application wthat uses the Context API to handle
              data and state. This app uses React Router to serve up pages for
              each individual country/territory.
            </p>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
