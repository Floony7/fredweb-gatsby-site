import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "../styles/index.scss"
import Layout from "../components/layout"
import AboutStyles from "./about.module.scss"
import SEO from "../components/seo"
import Img from "gatsby-image"

const About = () => {
  const data = useStaticQuery(graphql`
    query images {
      image: file(relativePath: { eq: "fred.jpg" }) {
        childImageSharp {
          fixed(width: 278, height: 278) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Page two" />
      <section className="outer outer--hero mb-2">
        <div className="container container--grid-2">
          <div className="content text-justify">
            <h1>About me</h1>
            <Img fixed={data.image.childImageSharp.fixed} />
            <p>
              I'm a web developer based in Auckland New Zealand. Most of
              professional career has centred on content creation, writin and
              publishing. In recent years I felt this wasn't enough, so I
              decided to check out this whole "programming" thing. Boy, do I
              wish I had started earlier. I knew some rudimentary JavaScript but
              to my astonishment, it didn't look like what I had learned. Like
              all HTML and CSS, JavaScript has come a long way. My love affair
              with code was sealed when I watched a tutorial on React in late
              2017. It was love at first render.
            </p>
          </div>
          <div className="sidebar text-justify">
            <h2>Tech I use</h2>
            <div className="display-grid">
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Styled Components</li>
                <li>PostCSS</li>
                <li>Sass</li>
                <li>Gatsby</li>
                <li>Bootstrap, Materialize, Material UI</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
