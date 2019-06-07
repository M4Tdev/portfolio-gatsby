/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Mateusz Lesiuk | Front-End Developer',
  },
  plugins: [
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
  ],
};
