import React from "react"
import FooterStyles from "./footer.module.scss"
// import "../styles/index.scss"

const Footer = ({ data }) => {
  return (
    <footer className={FooterStyles.colophon}>
      <div className={FooterStyles.container}>
        <p>{data.title}</p>
        <small className={FooterStyles.credits}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a className={FooterStyles.link} href="https://www.gatsbyjs.org">
            Gatsby
          </a>{" "}
          by {data.author}
        </small>
      </div>
    </footer>
  )
}

export default Footer
