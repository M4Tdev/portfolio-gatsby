import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import rehypeReact from 'rehype-react';
import { Link } from 'react-scroll';

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

const InnerWrapper = styled.div`
  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    width: 85%;
    margin: 0 auto;
  }
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
  margin: 3rem auto 5rem;
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

  @media ${({ theme }) => theme.mediaQueries.largest} {
    margin-top: 3rem;
    width: 60%;
  }
`;

const StyledContent = styled.div`
  font-size: 1.5rem;
  font-weight: var(--regular);
  line-height: 2.1rem;

  & p {
    margin: 1.6rem 0;
    text-align: center;

    ${({ theme }) => theme.mixins.selection(undefined, 'white')}
  }

  & a {
    font-weight: var(--medium);
    line-height: 2.5rem;
    cursor: pointer;

    ${({ theme }) => theme.mixins.link('rgba(52, 73, 94, 0.4)', 'about')}
    ${({ theme }) => theme.mixins.selection(undefined, 'var(--primaryLight)')}
  }

  @media ${({ theme }) => theme.mediaQueries.smallest} {
    font-size: 1.6rem;
    line-height: 2.3rem;

    & a {
      line-height: 2.6rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    font-size: 2.2rem;
    line-height: 3rem;

    & a {
      line-height: 3.2rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 2.6rem;
    line-height: 3.4rem;

    & a {
      line-height: 4.2rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    & a {
      line-height: 4.5rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.largest} {
    font-size: 2rem;
    line-height: 2.8rem;

    & a {
      line-height: 3rem;
    }
  }
`;

const StyledLink = styled(Link).attrs({
  spy: true,
  smooth: true,
})`
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 2rem 0 0;

  @media ${({ theme }) => theme.mediaQueries.smallest} {
    margin: 2.5rem 0 0;
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    margin: 3rem 0 0;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    margin: 4rem 0 0;
  }
`;

const ResumeButton = styled.a`
  padding: 1rem;
  border-radius: 1.5rem;
  background-color: var(--primaryDark);
  border: none;
  text-decoration: none;
  color: white;
  letter-spacing: 0.2rem;
  font-size: 1rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-0.3rem);
  }

  @media ${({ theme }) => theme.mediaQueries.smallest} {
    padding-left: 1.4rem;
    padding-right: 1.4rem;
    font-size: 1.1rem;
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    padding: 1.3rem 2rem;
    font-size: 1.5rem;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    padding: 1.3rem 2.3rem;
    font-size: 2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    padding: 1.1rem 2rem;
    font-size: 1.4rem;
  }
`;

const CurrentStack = styled.div`
  margin-top: 3rem;
  text-align: center;

  & h2 {
    font-weight: var(--semiBold);
    font-size: 1.5rem;
    margin-top: 0;

    ${({ theme }) => theme.mixins.selection(undefined, 'white')}
  }

  & p {
    font-size: 1.3rem;
    margin-top: 2rem;
    font-weight: var(--medium);
    text-align: center;
    line-height: 2rem;
    color: var(--primaryDark);

    ${({ theme }) => theme.mixins.selection(undefined, 'white')}
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
    & h2 {
      font-size: 2.7rem;
    }

    & p {
      font-size: 2.6rem;
      line-height: 3rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    & h2 {
      font-size: 3.3rem;
    }

    & p {
      margin-bottom: 2rem;
      font-size: 2.8rem;
      line-height: 3.6rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.largest} {
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

const About: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about.md" }) {
        childMarkdownRemark {
          frontmatter {
            currentStack
            resume
          }
          htmlAst
        }
      }
      site {
        siteMetadata {
          link
        }
      }
    }
  `);

  /* eslint-disable */
  // @ts-ignore
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { 'scroll-link': StyledLink },
  }).Compiler;
  /* eslint-enable */

  return (
    <StyledAbout id="about">
      <InnerWrapper>
        <StyledShape />
        <SectionName colorstyle="normal">About me</SectionName>
        <Wrapper>
          <StyledContent>{renderAst(data.file.childMarkdownRemark.htmlAst)}</StyledContent>
          <ButtonWrapper>
            <ResumeButton
              href={`${data.site.siteMetadata.link}/${data.file.childMarkdownRemark.frontmatter.resume}`}
              target="_blank"
              rel="nofollow"
            >
              Resume
            </ResumeButton>
          </ButtonWrapper>
          <CurrentStack>
            <h2>My current stack of technologies:</h2>
            <p>{data.file.childMarkdownRemark.frontmatter.currentStack}</p>
          </CurrentStack>
        </Wrapper>
      </InnerWrapper>
    </StyledAbout>
  );
};

export default About;
