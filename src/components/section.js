import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/index.scss"

const Section = ({ classes, children }) => {
    return (
        <div className={classes}>
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default Section
