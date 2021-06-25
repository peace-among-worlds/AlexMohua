require('dotenv').config({ path: `.env` });

module.exports = {
  siteMetadata: {
    author: `Alex Mohua`,
    title: `Web Developer - Alex Mohua`,
    description: `A summary of my skills & projects`,
    siteUrl: `https://peace-among-worlds.github.io/AlexMohua/`,
    pathPrefix: "/AlexMohua/",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-emotion#options
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-199807542-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Emotion Tailwind Starter`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/icon/logo.png`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
