import React from "react"
import PropTypes from "prop-types"

import InstagramEmbed from 'react-instagram-embed'

import styleVariables from '../styles/variables'

const {
  colors: { secondary },
  mediaQueries: { medUp, bigUp },
  padding: { basePadding }
} = styleVariables



const Instagram = ({id, type}) => {
  let medBorderWidth, bigMargin;

  switch (type) {
    case 'right':
        medBorderWidth = `${basePadding} 0 ${basePadding} ${basePadding}`
        bigMargin = `-${basePadding} -5rem 0 0` 
      break;
    case 'left':
        medBorderWidth = `${basePadding} ${basePadding} ${basePadding} 0 `
        bigMargin = `-${basePadding} 0 0 -5rem` 
      break;
    case 'none':
    default:
        medBorderWidth = `${basePadding}`
        bigMargin = `0 auto` 
  }

  const instagramStyle = {
    margin: `${basePadding} 0`,
    background: secondary,
    textAlign: `center`,
    width: `100%`,
    [medUp]: {
      margin: `-${basePadding} 0 ${basePadding}`,
      border: `${basePadding} solid ${secondary}`,
      float: type,
      borderWidth: medBorderWidth,
      width: `auto`
    },
    [bigUp]: {
      margin: bigMargin,
      borderWidth: `${basePadding}`
    }
  }
  
  return ( 
    <div css={instagramStyle}>
      <InstagramEmbed url={`https://instagr.am/p/${id}/`} hideCaption={true} />
    </div>
  ) 
}

Instagram.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['left', 'right', 'none'])
}

Instagram.defaultProps = {
  type: 'none'
}

export default Instagram