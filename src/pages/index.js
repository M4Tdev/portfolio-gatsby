import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import 'normalize.css';
import GlobalStyles from '../utils/global';
import theme from '../utils/theme';

import Hero from '../components/Hero';
import About from '../components/About';

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
        </Helmet>
        <Hero />
        <About />
      </div>
    </ThemeProvider>
  );
};

export default IndexPage;
