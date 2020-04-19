import React from "react"

import Layout from "../components/layout"
import Section from "../components/section"
import SEO from "../components/seo"
import "typeface-open-sans"
import "typeface-source-sans-pro"
import "typeface-libre-baskerville"
import "typeface-fira-sans"
import "../styles/index.scss"
import IndexStyles from "./index.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <div className={IndexStyles.indexContainer}> */}
    <div className="wrapper">
      {/* <section className={IndexStyles.sectionHero}> */}
      <section className="outer outer--hero">
        <div className="container container--flex-container">
        <div className="flex-col">
          <h1>Web Development in 2020</h1>
        </div>
          <div className="flex-col">
            <p className="lead">"But that's not how we did it back in my day."</p><p className="lead">Web development in 2020 looks radically different than it did just a few years ago, and that's a good thing.</p>
            <p>In 2000 when I first learned HTML, things were fairly messy. At that time, page elements, presentation and interaction were thrown into the same HTML document. If you needed to make a tweak here and there you had to surgically find what you wanted to change by sifting through a complex page.</p>
            <p>As the decade progressed things improved quite a lot. Presentation could be abstracted into CSS files while JavaScript files took care of the interaction layer.</p>
            <p>Twenty years on we are fortunate to have web standards that make site development easy and faster than ever before.</p>
          </div>
          <div className="flex-col">
            <h2>Beyond Wordpress</h2>
            <p>For most of my web development career I have leaned heavily on <strong>Wordpress</strong> as a platform to build client sites. This worked well for me and my clients &mdash; they got a fully dynamic website and I got to write only the template code I needed to. Plugins served up rest of the functionality.</p>
            <p>Today, however, technology and approaches to site development have changed. The tools of a web developer have come a long way. We now have Nodejs as a runtime server to work with along with a sophisticated pakage manager that provides developers with access to virtually everything we need to build modern applications and sites.</p>
            </div>
          </div>
      </section>
      {/* <Section classes="outer outer--skills">
        <p>My skills are many and varied. Just ask me via the contact form on this page.</p>
      </Section> */}
    </div>
  </Layout>
)

export default IndexPage
