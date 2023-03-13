require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Title`,
    author: `@nugo`,
    titleTemplate: '%s | Template',
    defaultDescription: '',
    url: 'https://www.nugo.lk', // No trailing slash allowed!
    siteUrl: 'https://www.nugo.lk',
    image: '/seoImage.png', // Path to your image you placed in the 'static' folder
    keywords: 'nugo starter gatsby contentful'
    // twitterUsername: "@nugo",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    'gatsby-plugin-sass',
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`
      }
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: 'XXXXXXXXXXXXXXXX'
      }
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-XXXXXXX',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },

        // Name of the event that is triggered
        // Defaults to gatsby-route-change
        routeChangeEventName: 'WEBSITE_ROUTE_CHANGE'
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
          backgroundColor: `transparent`
        }
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `rgb(2, 155, 172)`,
        // Disable the loading spinner.
        showSpinner: false
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nugo-starter-default`,
        short_name: `nugo-starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': ['X-Frame-Options: sameorigin']
        },
        mergeSecurityHeaders: true
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
