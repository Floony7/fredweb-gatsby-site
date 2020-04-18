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
        <div className="container">
        <h1>Hi people</h1>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et condimentum est, vel sagittis neque.</p>
        <p>Vivamus dignissim venenatis interdum. Curabitur a vehicula sapien, in egestas odio. Vivamus dapibus viverra dolor ut rhoncus. Fusce id ultricies urna. Donec sagittis sapien vel purus malesuada, sed placerat lorem fermentum. Aenean aliquam efficitur leo, eget blandit ex auctor a. Maecenas odio lacus, tristique nec libero ut, porttitor tincidunt enim.</p>
        <p>Suspendisse blandit urna in faucibus aliquet. Aliquam fermentum mollis efficitur. Duis iaculis ullamcorper justo vel vulputate. Nullam pellentesque, dolor imperdiet congue tempus, libero metus vulputate sem, mattis feugiat lacus leo nec massa. Integer nec nibh quis nulla suscipit blandit.</p>
        <h2>Class aptent taciti sociosqu ad litora</h2>
        <p>Torquent per conubia nostra, per inceptos himenaeos. Etiam tincidunt interdum sodales. Mauris consectetur ac lorem vitae suscipit. Suspendisse id dignissim odio. Vivamus maximus, mi non ultricies vehicula, mi arcu vehicula felis, a feugiat ipsum velit non erat. Maecenas eu maximus purus. Curabitur eleifend vehicula leo, sagittis iaculis eros. Donec ultrices pulvinar elit a maximus. Sed rutrum dapibus neque eu tincidunt.</p>
        </div>
      </section>
      <Section classes="outer outer--skills">
        <p>My skills are many and varied. Just ask me via the contact form on this page.</p>
      </Section>
    </div>
  </Layout>
)

export default IndexPage
