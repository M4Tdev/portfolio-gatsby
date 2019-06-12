import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import SectionName from './UI/SectionName';
import PortfolioProject from '../templates/PortfolioProject';

const StyledPortfolio = styled.div`
  position: relative;
  width: 100vw;
  height: auto;
  background-color: #2d74e5;
  z-index: 2;
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
`;

const PortfolioSectionProjects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/content/portfolio/" } }) {
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
    <StyledPortfolio>
      <SectionName width="12rem" height="4rem" fontsize="1.6rem" margin="2rem 0 0 2rem" color="white">
        Portfolio
      </SectionName>
      <PortfolioSection>
        <PortfolioSectionProjects>
          {data.allMarkdownRemark.edges.map(project => (
            <PortfolioProject key={project.node.frontmatter.title} project={project} />
          ))}
        </PortfolioSectionProjects>
      </PortfolioSection>
    </StyledPortfolio>
  );
};

export default Portfolio;
