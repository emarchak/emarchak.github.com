/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
import "../styles/layout.css"

import styleVariables from "../styles/variables"

const {
  maxWidth,
  padding: {basePadding},
} = styleVariables;

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth,
          padding: `0px 1.0875rem ${basePadding}`,
          paddingTop: 0,
          minHeight: `calc(100vh - 4rem)`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
        
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
