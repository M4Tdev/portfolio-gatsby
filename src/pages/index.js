import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import 'normalize.css';
import GlobalStyles from '../utils/global';
import theme from '../utils/theme';

import Hero from '../components/Hero';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700|Pacifico&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Hero />
      </div>
    </ThemeProvider>
  );
};

export default IndexPage;
