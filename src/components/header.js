import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.scss"
import "../images/hero-auckland-city.jpg"
import { Helmet } from "react-helmet"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.masthead}>
     <div><h1><Link to="/" className={headerStyles.title}>{siteTitle}</Link></h1></div>
    <nav className={headerStyles.mainNav}>
      <ul className={headerStyles.navList}>
        <li><Link to="/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Home</Link></li>
        <li><Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About</Link></li>
        <li><Link to="/portfolio" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Portfolio</Link></li>
        <li><Link to="/blog" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Blog</Link></li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
