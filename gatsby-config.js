module.exports = {
  siteMetadata: {
    title: `Erin Marchak | Web Developer | Team Lead`,
    description: `Erin has 9 years of experience with both server- and client-side web development, specializing in digital marketing. She's an Agile evangelist that encourages teams to allow their curiosity to drive them and is passionate about creating emotional connections with people through technology. `,
    author: `@emarchak`,
  },
  plugins: [
    `gatsby-plugin-glamor`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/images/favicon-32.png'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-149006221-1',
        head: false,
      }
    }
  ],
}
