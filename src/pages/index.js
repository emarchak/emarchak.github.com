import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faStrava, faInstagram, faTwitter, faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Logo from '../components/logo'
import Layout from "../components/layout"
import SEO from "../components/seo"

const icon = {
  color: `#F48EAB`,
  backgroundColor: `#FFF`,
  display: `inline-block`,
  height: `2rem`,
  width: `2rem`,
  textAlign: `center`,
  borderRadius: `2rem`,
  borderWidth: 0,
  boxShadow: `0 0 1rem 0.25rem rgba(244, 142, 171, 1)`,
  marginLeft: `1rem`,
  lineHeight: `2rem`,
}

const narrow = {
  letterSpacing: `-0.075em`,
}

const IndexPage = () => (
  <Layout>
    <SEO title="Erin Marchak" />
    <section style={{
      position: `relative`, 
      top: `50vh`,
      transform: `translateY(-50%)`,
      textAlign: `center`,
    }}>
    <Logo/>

    <header>
      <h1 style={{
        color: `#fff`,
        fontSize: `6rem`,
        lineHeight: `5rem`,
        margin: `1rem 0`,
        textTransform: `uppercase`,
        textShadow: `0 0 1rem rgba(244, 142, 171, 1)`,
      }} aria-label="Erin Marchak">E<span style={narrow}>ri</span>n<br/> Ma<span style={narrow}>rc</span>hak</h1>
    </header>
    <p>
        <a style={icon} href="mailto:hello@erin.computer"><FontAwesomeIcon icon={faEnvelope}/>
        </a><a style={icon} href="https://www.linkedin.com/in/emarchak/"><FontAwesomeIcon icon={faLinkedin}/>
        </a><a style={icon} href="https://www.github.com/emarchak/"><FontAwesomeIcon icon={faGithubAlt}/>
        </a><a style={icon} href="https://twitter.com/emarchak"><FontAwesomeIcon icon={faTwitter}/>
        </a><a style={icon} href="https://www.instagram.com/emarchak/"><FontAwesomeIcon icon={faInstagram}/>
        </a><a style={icon} href="https://www.strava.com/athletes/1105447"><FontAwesomeIcon icon={faStrava}/></a>
      </p>
  </section>
  </Layout>
)

export default IndexPage
