/**
 * Layouts for text articless
 */

import React from "react"
import PropTypes from "prop-types"

import { graphql, useStaticQuery } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "../styles/layout.css"

import styleVariables from "../styles/variables"

const {
  mediaQueries: {sml},
  maxWidth, 
  padding: {basePadding}
} = styleVariables;

const articleStyle = {
  margin: `0 auto`,
  maxWidth,
  padding: `0 1.0875rem ${basePadding}`,
  paddingTop: 0,
  [sml]: {
    padding: `0 0 ${basePadding}`,
  }
}

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
      <div css={articleStyle}>
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
