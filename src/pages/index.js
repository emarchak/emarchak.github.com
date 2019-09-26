import React from "react"

import Layout from "../components/layout"
import Language from "../components/language"
import SEO from "../components/seo"

const articleStyle = {
  backgroundColor: `white`,
  padding: `2rem 2.5rem`,
};

const IndexPage = () => (
  <Layout>
    <SEO title="Bonne route et bon courage, or 5 rules to accomplish the impossible" />
    <article style={articleStyle}>
    
    <h1><Language>Bonne route et bon courage</Language></h1><h2>or, 5 rules to accomplish the impossible</h2>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    </article>
  </Layout>
)

export default IndexPage
