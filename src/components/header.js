import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from './logo'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
      boxShadow: `0 0 1rem 0.25rem hsla(343, 82%, 76%, 1)`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Logo height={1.75} inversed />
        <Link
          to="/"
          style={{
            marginLeft: `1rem`,
            color: `hsla(343, 82%, 76%, 1)`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
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
