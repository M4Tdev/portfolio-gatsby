import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import SectionName from './UI/SectionName';
import PortfolioProject from '../templates/PortfolioProject';

const StyledPortfolio = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-color: #2d74e5;
  z-index: 2;
`;

const InnerWrapper = styled.div`
  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    width: 85%;
    margin: 0 auto;
  }
`;

const PortfolioSection = styled.div`
  width: 90%;
  margin: 0 auto;

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    width: 80%;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    width: 90%;
  }

  @media ${({ theme }) => theme.mediaQueries.largest} {
    width: 70%;
  }
`;

const PortfolioSectionProjects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/portfolio/" } }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              stack
              liveLink
              sourceLink
              img {
                childImageSharp {
                  fluid(maxWidth: 1080) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            html
          }
        }
      }
    }
  `);

  return (
    <StyledPortfolio id="portfolio">
      <InnerWrapper>
        <SectionName colorstyle="opposed">Portfolio</SectionName>
        <PortfolioSection>
          <PortfolioSectionProjects>
            {data.allMarkdownRemark.edges.map(project => (
              <PortfolioProject key={project.node.frontmatter.title} project={project} />
            ))}
          </PortfolioSectionProjects>
        </PortfolioSection>
      </InnerWrapper>
    </StyledPortfolio>
  );
};

export default Portfolio;
