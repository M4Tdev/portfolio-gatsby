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

const Wrapper = styled.div`
  width: 80%;
  margin: 3rem auto 6rem;
`;

const StyledContent = styled.div`
  font-size: 1.5rem;
  font-weight: var(--regular);
`;

const CurrentStack = styled.div`
  margin-top: 3rem;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 0 1rem rgba(45, 116, 229, 0.3);
  /* text-align: center; */

  & h2 {
    font-weight: var(--semiBold);
  }

  & p {
    font-size: 1.4rem;
    margin-top: 1rem;
    font-weight: var(--medium);
  }
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about.md" }) {
        childMarkdownRemark {
          frontmatter {
            currentStack
          }
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
      <Wrapper>
        <StyledContent
          dangerouslySetInnerHTML={{
            __html: data.file.childMarkdownRemark.html,
          }}
        />
        <CurrentStack>
          <h2>My current stack of languages/technologies:</h2>
          <p>{data.file.childMarkdownRemark.frontmatter.currentStack}</p>
        </CurrentStack>
      </Wrapper>
    </StyledAbout>
  );
};

export default About;
