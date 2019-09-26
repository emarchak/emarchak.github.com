module.exports = {
  siteMetadata: {
    title: `Paris-Brest-Paris 2019: Ride Report`,
    description: `Bonne route et bon courage, or 5 rules to accomplish the impossible.`,
    author: `@emarchak`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `share tech mono`,
          `source sans pro`
        ],
        display: 'swap'
      }
    },
  ],
}
