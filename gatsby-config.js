/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Mateusz Lesiuk | Front-End Developer',
    author: 'Mateusz Lesiuk',
    description: 'Portfolio of Mateusz Lesiuk the Front-End Developer',
    link: 'https://mateuszlesiuk.dev',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-128358609-3',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Pacifico',
            subsets: ['latin'],
          },
          {
            family: 'Montserrat',
            variants: ['400', '500', '600', '700'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Mateusz Lesiuk | Portfolio',
        short_name: 'Mateusz Lesiuk | Portfolio',
        start_url: '/',
        background_color: '#2D74E5',
        theme_color: '#2D74E5',
        display: 'standalone',
        icon: `src/assets/icon.png`,
      },
    },
    'gatsby-plugin-offline',
  ],
};
