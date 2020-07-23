import React from "react"

import Layout from "../components/layout"
import Section from "../components/section"
import SEO from "../components/seo"
import "typeface-open-sans"
import "typeface-source-sans-pro"
import "typeface-libre-baskerville"
import "typeface-fira-sans"
import "../styles/index.scss"
import styled from "styled-components"
import { FaTwitterSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa"

const StyledUl = styled.ul`
  margin-left: 0;
`

const StyledLi = styled.li`
  list-style-type: none;
  margin: 0 0 4px 0;

  a {
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
    font-weight: 500;
    padding-left: 5px;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <div className={IndexStyles.indexContainer}> */}
    <div className="wrapper">
      {/* <section className={IndexStyles.sectionHero}> */}
      <section className="outer outer--hero">
        <div className="container container--grid-2">
          <div className="flex-col">
            <h2>A bit about me and this site</h2>
            <p>
              This site is a refresh from my previous WordPress portfolio site.
              It is my first site produced with the static site generator
              Gatsby. The site will be further developed, but for now, it is my
              home on the web.
            </p>
            <p>
              I have worked in various roles to do with digital media and web
              development. I have always been drawn to the web development
              industry because not only do I find making websites and apps
              magic, it is the place to be for creative expression in my
              opinion.
            </p>
            <p>
              I work with React and I have started developing websites with
              Gatsby, which uses React under the hood. It is exciting to have
              moved on from WordPress as my platform. WordPress solved a lot of
              issues for developers and website owners but things have move don
              in the web arena.
            </p>
            <p>
              My goal is to have extensive fullstack web knowledge by the end of
              2020, specifically with Mongo databases, ExpressJS and of course,
              React.
            </p>
          </div>
          <div className="flex-col">
            <h3 className="mb-0">Contact</h3>
            <StyledUl>
              <StyledLi>
                <FaGithubSquare />
                <a href="https://github.com/Floony7" target="_blank">
                  Github
                </a>
              </StyledLi>
              <StyledLi>
                <FaLinkedin />
                <a
                  href="https://www.linkedin.com/in/fred-lunjevich-bbb66b43/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </StyledLi>
            </StyledUl>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
