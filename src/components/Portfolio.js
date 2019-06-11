import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import SectionName from './UI/SectionName';
import PortfolioProject from '../templates/PortfolioProject';

const StyledPortfolio = styled.div`
  position: relative;
  width: 100vw;
  height: auto;
  background: linear-gradient(150.64deg, #119cf5 0%, #2d74e5 27%);
  z-index: 2;
`;

const PortfolioSection = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const PortfolioSectionProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
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
