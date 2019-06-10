import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import SectionName from './UI/SectionName';
import PortfolioProject from '../templates/PortfolioProject';

const StyledPortfolio = styled.div`
  position: relative;
  width: 100vw;
  height: auto;
  background: linear-gradient(150.64deg, #119cf5 0%, #2d74e5 15%);
  z-index: 2;
`;

const PortfolioSection = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const PortfolioSectionTitle = styled.h1`
  text-align: center;
  margin: 4rem auto 0.1rem;
  font-size: 2rem;
  font-weight: var(--bold);
`;

const StyledLine = styled.hr`
  width: ${props => props.width};
  background-color: white;
  margin: 0 auto 1rem;
`;

const PortfolioSectionContent = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: var(--medium);
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
        <PortfolioSectionTitle>Skills</PortfolioSectionTitle>
        <StyledLine width="8rem" />
        <PortfolioSectionContent>HTML - CSS - SASS - JAVASCRIPT</PortfolioSectionContent>
      </PortfolioSection>
      <PortfolioSection>
        <PortfolioSectionTitle>Technologies</PortfolioSectionTitle>
        <StyledLine width="16rem" />
        <PortfolioSectionContent>
          REACT - REDUX - NODEJS - EXPRESS - MONGODB - STYLED COMPONENTS - GRAPHQL - GATSBY
        </PortfolioSectionContent>
      </PortfolioSection>
      <PortfolioSection>
        <PortfolioSectionTitle>Tools</PortfolioSectionTitle>
        <StyledLine width="8rem" />
        <PortfolioSectionContent>GIT - NPM - WEBPACK - BABEL - FIREBASE</PortfolioSectionContent>
      </PortfolioSection>
      <PortfolioSection>
        <PortfolioSectionTitle>Projects</PortfolioSectionTitle>
        <StyledLine />
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
