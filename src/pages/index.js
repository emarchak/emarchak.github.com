import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faStrava, faInstagram, faTwitter, faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Logo from '../components/logo'
import Layout from "../components/layout"
import SEO from "../components/seo"

import styleVariables from "../styles/variables";

const {
  boxShadow,
  colors: {primary, secondary},
  mediaQueries: {desktopOnly}
} = styleVariables

const icon = {
  color: primary,
  backgroundColor: secondary,
  display: `inline-block`,
  height: `2rem`,
  width: `2rem`,
  textAlign: `center`,
  borderRadius: `2rem`,
  borderWidth: 0,
  boxShadow: boxShadow,
  marginLeft: `1rem`,
  lineHeight: `2rem`,
  ':visited': {
    color: primary,
  }
}

const narrow = {
  letterSpacing: `-0.075em`,
}

const IndexPage = () => (
  <Layout>
    <SEO title="Erin Marchak" />
    <section css={{
      position: `relative`, 
      textAlign: `center`,
      top: `1rem`,
      [desktopOnly]: {
        top: `50vh`,
        transform: `translateY(-50%)`,
      }
    }}>
    <Logo/>

    <header>
      <h1 css={{
        color: secondary,
        fontSize: `5rem`,
        lineHeight: `4.5rem`,
        margin: `1rem 0`,
        textTransform: `uppercase`,
        textShadow: `0 0 1rem rgba(244, 142, 171, 1)`,
        [desktopOnly]: {
          fontSize: `6rem`,
          lineHeight: `5rem`,
        }
      }} aria-label="Erin Marchak">E<span css={narrow}>ri</span>n<br/> Ma<span css={narrow}>rc</span>hak</h1>
    </header>
    <p>
        <a css={icon} href="mailto:hello@erin.computer"><FontAwesomeIcon icon={faEnvelope}/>
        </a><a css={icon} href="https://www.linkedin.com/in/emarchak/"><FontAwesomeIcon icon={faLinkedin}/>
        </a><a css={icon} href="https://www.github.com/emarchak/"><FontAwesomeIcon icon={faGithubAlt}/>
        </a><a css={icon} href="https://twitter.com/emarchak"><FontAwesomeIcon icon={faTwitter}/>
        </a><a css={icon} href="https://www.instagram.com/emarchak/"><FontAwesomeIcon icon={faInstagram}/>
        </a><a css={icon} href="https://www.strava.com/athletes/1105447"><FontAwesomeIcon icon={faStrava}/></a>
      </p>
  </section>
  </Layout>
)

export default IndexPage
