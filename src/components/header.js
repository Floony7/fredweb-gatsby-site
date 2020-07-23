import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderStyles from "./header.module.scss"
import "../images/hero-auckland-city.jpg"
import { Helmet } from "react-helmet"

const Header = ({ siteTitle, description }) => (
  <header className={HeaderStyles.masthead}>
    <div className={HeaderStyles.inner}>
      <div>
        <h1>
          <Link to="/" className={HeaderStyles.title}>
            {siteTitle}
          </Link>
        </h1>
        <h6>{description}</h6>
      </div>
      <nav className={HeaderStyles.mainNav}>
        <ul className={HeaderStyles.navList}>
          <li>
            <Link
              to="/"
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
