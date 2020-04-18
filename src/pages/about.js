import React from "react"
import { Link } from "gatsby"
import "../styles/index.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Page two" />
    <section className="outer outer--hero mb-2">
      <div className="container">
          <h1>Hi from the About page</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et condimentum est, vel sagittis neque. Vivamus dignissim venenatis interdum. Curabitur a vehicula sapien, in egestas odio. Vivamus dapibus viverra dolor ut rhoncus. Fusce id ultricies urna. Donec sagittis sapien vel purus malesuada, sed placerat lorem fermentum. Aenean aliquam efficitur leo, eget blandit ex auctor a. Maecenas odio lacus, tristique nec libero ut, porttitor tincidunt enim.</p>
          <Link to="/">Go back to the homepage</Link>
      </div>
    </section>
  </Layout>
)

export default About
