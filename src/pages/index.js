import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/UI/Layout';
import SEO from '../components/SEO';

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
          link
        }
      }
    }
  `);

  return (
    <Layout>
      <>
        <SEO data={data} />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </>
    </Layout>
  );
};

export default IndexPage;
