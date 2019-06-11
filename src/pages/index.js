import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import 'normalize.css';
import GlobalStyles from '../utils/global';
import theme from '../utils/theme';

import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
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
          <meta charset="UTF-8" />
          <meta name="author" content={data.site.siteMetadata.author} />
          <meta name="description" content={data.site.siteMetadata.description} />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={data.site.siteMetadata.title} />
          <meta property="og:description" content={data.site.siteMetadata.description} />
        </Helmet>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default IndexPage;
