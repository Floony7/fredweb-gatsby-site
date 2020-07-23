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

const StyledUl = styled.ul`
  margin-left: 0;
`

const StyledLi = styled.li`
  list-style-type: none;
  margin: 0 0 4px 0;

  a {
    color: rebeccapurple;
    text-decoration: none;
    font-weight: 600;
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
              Gatsby.
            </p>
            <p>
              The site will be further developed, but for now, it is my home on
              the web.
            </p>
          </div>
          <div className="flex-col">
            <h3 className="mb-0">Contact</h3>
            <StyledUl>
              <StyledLi>
                <a href="https://twitter.com/Floony7">Twitter</a>
              </StyledLi>
              <StyledLi>
                <a href="https://github.com/Floony7">Github</a>
              </StyledLi>
              <StyledLi>
                <a href="https://www.linkedin.com/in/fred-lunjevich-bbb66b43/">
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
