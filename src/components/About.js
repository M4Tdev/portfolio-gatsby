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

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    width: 70%;
    margin: 5rem auto 5rem;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    margin-top: 8rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    margin-top: 12rem;
  }

  @media ${({ theme }) => theme.mediaQueries.largest} {
    margin-top: 5rem;
    width: 60%;
  }
`;

const StyledContent = styled.div`
  font-size: 1.5rem;
  font-weight: var(--regular);
  line-height: 2.5rem;

  @media ${({ theme }) => theme.mediaQueries.smallest} {
    font-size: 1.6rem;
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    font-size: 2.2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 3rem;
    line-height: 3.5rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    font-size: 3.5rem;
    line-height: 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.largest} {
    font-size: 2rem;
    line-height: 2.5rem;
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

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    & h2 {
      font-size: 2rem;
    }

    & p {
      font-size: 1.9rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    margin-top: 8rem;

    & h2 {
      font-size: 2.7rem;
    }

    & p {
      font-size: 2.6rem;
      line-height: 3rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    margin-top: 10rem;

    & h2 {
      font-size: 3.3rem;
    }

    & p {
      margin-top: 4rem;
      font-size: 2.8rem;
      line-height: 3.6rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.largest} {
    margin-top: 6rem;
    width: 80%;
    margin-left: auto;
    margin-right: auto;

    & h2 {
      font-size: 2.3rem;
      text-align: center;
    }

    & p {
      font-size: 2rem;
      line-height: 2.6rem;
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
    <StyledAbout id="about">
      <StyledShape />
      <SectionName>About me</SectionName>
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
