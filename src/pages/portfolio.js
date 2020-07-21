import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const ProjectLabel = styled.span`
  padding: 6px 20px;
  /* clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%); */
  margin-right: 2px;
  background-color: ${props => props.bgColor};
  text-shadow: -1px 1px 1px #333;
  text-align: center;
  color: #fff;
`

const Portfolio = () => (
  <Layout>
    <SEO title="Page two" />
    <section className="outer outer--hero">
      <div className="container">
        <h1>Web Development projects in 2020</h1>
      </div>
      <div className="container container--grid">
        <div className="flex-col">
          <h2>This website</h2>
          <p>
            <ProjectLabel bgColor="rebeccapurple">Gatsby</ProjectLabel>
            <ProjectLabel bgColor="#ff6a80">SASS</ProjectLabel>
            <ProjectLabel bgColor="#61dbfb">React</ProjectLabel>
            <ProjectLabel bgColor="#ff7ab6">GraphQL</ProjectLabel>
          </p>
          <p>
            This site is a refresh from my previous WordPress portfolio site. It
            is my first site produced with the static site generator Gatsby.
          </p>
          <p>
            Gatsby is built on top of React and it uses GraphQL for sourcing
            data. That means it is possible to make full featured, dynamic
            websites that are statically rendered, thus increasing the site
            speed and improving user experience.
          </p>
          <h2>Fantasy Premier League Captain Picker</h2>
          <p>
            <ProjectLabel bgColor="gold">Javascript</ProjectLabel>
          </p>
          <p>
            <a href="https://elated-shaw-b31750.netlify.app/" target="_blank">
              This fun little app
            </a>{" "}
            was my attempt at creating something with nothing but vanilla
            JavaScript. It was fun to make and utilises local storage to persist
            user data.
          </p>
          <p>
            The design could use some love, but my major concern with the app
            was making something that a user could coneivably use. The project
            may serve as a more extensive project later this year.
          </p>
        </div>
        <div className="flex-col">
          <h2>React Periodic Table lookup</h2>
          <p>
            <ProjectLabel bgColor="#61dbfb">React</ProjectLabel>
            <ProjectLabel bgColor="#ff6a80">Styled Components</ProjectLabel>
          </p>
          <p>
            <a
              href="https://objective-franklin-4f675c.netlify.app/"
              target="_blank"
            >
              This simple app
            </a>{" "}
            that queries a periodic table api and filters based on element
            groupings. My objective with this app was to learn the React Context
            API so I could lift state to the app level.
          </p>
          <h2>Country reference app (in development)</h2>
          <p>
            <ProjectLabel bgColor="#61dbfb">React</ProjectLabel>
            <ProjectLabel bgColor="#d0021b">Router</ProjectLabel>
            <ProjectLabel bgColor="#ff6a80">Styled Components</ProjectLabel>
          </p>
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
  </Layout>
)

export default Portfolio
