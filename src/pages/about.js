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
            <p>
              This is me &#8212; Fred Lunjevich from Auckland New Zealand. I'm a
              web developer based in Auckland New Zealand. Most of professional
              career has centred on content creation, writing and publishing.
            </p>
            <p>
              However, in recent years I felt this wasn't enough, so I decided
              to check out this whole "programming" thing. Boy, did I realise
              just what I was missing out on! I knew some rudimentary JavaScript
              but to my astonishment, the lessons I studied in 2016 didn't look
              like what I had learned in 2008. Like HTML and CSS, JavaScript has
              come a long way. My love affair with code was sealed when I
              watched a tutorial on React in 2017. It was love at first render.
            </p>
            <p>
              Prior to this coding realisation I had created a few client
              websites in WordPress. Like many would-be devs, WordPress was a
              great package because you could develop websites with a great
              content management system and hand them off to clients without
              many hassles.
            </p>
            <p>
              Today, I am happy to say that I am "WordPress free" after one
              whole year. With a new understanding of the whole web development
              landscape, my focus is on Jamstack sites and Github workflows
              instead.
            </p>
            <h2>My current journey in code</h2>
            <h6>July 2020</h6>
            <p>
              I find myself seated here in my home office, 3 months
              post-lockdown due to Covid-19. This "pause" allowed me to
              strengthen my Javascript knowledge, especially my React skills.
            </p>
            <p>So where to next?</p>
            <p>
              I realise my coding journey has really just begun. Therefore, my
              current focus is on attaining fullstack development skills.
            </p>
            <ul>
              <li>Developing APIs with ExpressJS</li>
              <li>
                Storing and interacting with data in{" "}
                <strong>Mongo Databases</strong> using <strong>Mongoose</strong>
              </li>
              <li>
                Improving UI design, with focus on improving my skills with{" "}
                <strong>CSS Grid</strong> and <strong>Flexbox</strong>
              </li>
              <li>
                Using <strong>Redux</strong> to manage React state
              </li>
              <li>Building more apps and websites!</li>
            </ul>
          </div>
          <div className="sidebar text-justify">
            <Img fixed={data.image.childImageSharp.fixed} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
