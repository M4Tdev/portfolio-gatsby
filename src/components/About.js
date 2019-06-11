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
  max-width: 100%;
`;

const Wrapper = styled.div`
  width: 80%;
  margin: 3rem auto 6rem;
  z-index: 1;

  @media ${({ theme }) => theme.mediaQueries.smallest} {
    margin: 4rem auto 6rem;
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    width: 75%;
    margin: 4rem auto 5rem;
  }
`;

const StyledContent = styled.div`
  font-size: 1.5rem;
  font-weight: var(--regular);
  line-height: 2.5rem;

  @media ${({ theme }) => theme.mediaQueries.smallest} {
    font-size: 1.6rem;
  }
`;

const CurrentStack = styled.div`
  margin-top: 3rem;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 1.5rem 1.5rem 3rem rgba(0, 0, 0, 0.3);
  background-color: white;

  & h2 {
    font-weight: var(--semiBold);
    font-size: 1.5rem;
  }

  & p {
    font-size: 1.4rem;
    margin-top: 2rem;
    font-weight: var(--medium);
    text-align: center;
    line-height: 2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.smallest} {
    & h2 {
      font-size: 1.6rem;
    }

    & p {
      font-size: 1.5rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    margin-top: 6rem;
    padding: 3rem;

    & h2 {
      font-size: 1.7rem;
    }

    & p {
      font-size: 1.6rem;
    }
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
          <h2>My current stack of languages / technologies:</h2>
          <p>{data.file.childMarkdownRemark.frontmatter.currentStack}</p>
        </CurrentStack>
      </Wrapper>
    </StyledAbout>
  );
};

export default About;
