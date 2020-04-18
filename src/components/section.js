import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/index.scss"

const Section = ({ classes, children }) => {
    return (
        <div className={classes}>
            <div className="container">
                <div className="content">
                {children}
                </div>
            </div>
        </div>
    )
}

/* import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/index.scss"

import React from 'react'

const Section = ({ children }) => {
    return (
        <div className="outer">
            <div className="container">
                <div className="content">
                {children}
                </div>
            </div>
        </div>
    )
} */

export default Section
