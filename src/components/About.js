import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Shape from '../assets/Vector1.svg';
import SectionName from './UI/SectionName';

const StyledAbout = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: white;
  position: relative;
  color: black;
  z-index: 1;
  box-sizing: border-box;
  overflow: hidden;
`;

const StyledShape = styled(Shape)`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
`;

const StyledContent = styled.div`
  font-size: 1.5rem;
  font-weight: var(--regular);
  width: 80%;
  margin: 3rem auto 6rem;
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about.md" }) {
        childMarkdownRemark {
          html
        }
      }
    }
  `);

  return (
    <StyledAbout>
      <StyledShape />
      <SectionName width="12rem" height="4rem" fontsize="1.6rem" margin="2rem 0 0 2rem" color="black">
        About me
      </SectionName>
      <StyledContent dangerouslySetInnerHTML={{ __html: data.file.childMarkdownRemark.html }} />
    </StyledAbout>
  );
};

export default About;
