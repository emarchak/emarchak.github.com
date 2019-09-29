import React from "react"

import styleVariables from "../styles/variables"

const {
  fonts: {heading},
  colors: {secondary},
  maxWidth
} = styleVariables


const Footer = () => (
  <footer
    css={{
      background: secondary,
      marginTop: `1.45rem`,
      boxShadow: `0 0 1rem 0.25rem hsla(343, 82%, 76%, 1)`,
      fontFamily: heading,
      letterSpacing: `-.075rem`,
      minHeight: `3rem`,
    }}
  >
    <div
      css={{
        margin: `0 auto`,
        maxWidth: maxWidth,
        padding: `1.45rem 1.0875rem`,
        fontSize: `0.75rem`,
      }}
    >
      <span css={{
        display: `inline-block`,
        textAlign: `right`,
        margin: `0px`,
        transform: `scaleX(-1)`,
        filter: `FlipH`,
      }}>&copy;</span> {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

export default Footer
