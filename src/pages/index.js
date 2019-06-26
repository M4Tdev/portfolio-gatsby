import React from 'react';

import Layout from '../components/UI/Layout';
import SEO from '../components/SEO';

import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const IndexPage = () => (
  <Layout>
    <>
      <SEO />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </>
  </Layout>
);

export default IndexPage;
