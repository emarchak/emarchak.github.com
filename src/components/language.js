import React from "react"
import PropTypes from "prop-types"

const Language = ({ children, langCode }) => (
  <i lang={langCode}>{children}</i>
)

Language.propTypes = {
  children: PropTypes.node.isRequired,
  langCode: PropTypes.string.isRequired
}

Language.defaultProps = {
  langCode: 'fr'
}

export default Language;