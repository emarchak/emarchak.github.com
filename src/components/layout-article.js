/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { graphql, useStaticQuery } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "../styles/layout.css"

const LayoutArticle = ({ pageTitle, children }) => {
  const data =  useStaticQuery(graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
 `)

  const siteTitle = pageTitle ? pageTitle : data.site.siteMetadata.title

  return (
    <>
      <Header siteTitle={siteTitle} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        </div>
        <Footer />
    </>
  )
}

LayoutArticle.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string
}

export default LayoutArticle
