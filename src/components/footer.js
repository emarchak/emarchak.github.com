import React from "react"

const Footer = () => (
  <footer
    style={{
      background: `white`,
      marginTop: `1.45rem`,
      boxShadow: `0 0 1rem 0.25rem hsla(343, 82%, 76%, 1)`,
      fontFamily: `"Share Tech Mono", monospace`,
      letterSpacing: `-.075rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        fontSize: `0.75rem`,
      }}
    >
      <span style={{
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
