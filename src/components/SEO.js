import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';

const SEO = () => {
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
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta charset="UTF-8" />
      <meta name="author" content={data.site.siteMetadata.author} />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta property="og:title" content={data.site.siteMetadata.title} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={data.site.siteMetadata.title} />
      <meta property="og:description" content={data.site.siteMetadata.description} />
      <meta property="og:image:secure_url" content={`${data.site.siteMetadata.link}/favicon.ico`} />
      <meta property="og:url" content={data.site.siteMetadata.link} />
    </Helmet>
  );
};

export default SEO;
