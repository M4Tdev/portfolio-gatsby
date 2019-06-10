import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledPortfolioProject = styled.div`
  width: 95%;
  text-align: center;
  margin: 1rem auto;
  box-sizing: border-box;
`;

const PortfolioProjectTitle = styled.h2`
  position: relative;
  font-size: 1.6rem;
  font-weight: var(--semiBold);
  font-style: italic;
  margin: 2rem auto 1rem;
`;

const PortfolioProjectImage = styled(Img)`
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.15);
  width: 100%;
`;

const PortfolioProjectStack = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: var(--regular);
`;

const ProjectDescription = styled.p`
  font-size: 1.4rem;
  font-weight: var(--medium);
  margin-top: 1rem;
`;

const ProjectLinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: var(--customBlack);
  background-color: white;
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 0.1rem solid white;
  transition: background-color 0.2s ease, color 0.2s ease;
  font-size: 1.3rem;
  font-weight: var(--medium);

  &:hover {
    background-color: transparent;
    color: white;
  }
`;

const PortfolioProject = props => (
  <StyledPortfolioProject>
    <PortfolioProjectTitle>{props.project.node.frontmatter.title}</PortfolioProjectTitle>
    <PortfolioProjectImage fluid={props.project.node.frontmatter.img.childImageSharp.fluid} />
    <PortfolioProjectStack>{props.project.node.frontmatter.stack}</PortfolioProjectStack>
    <ProjectDescription dangerouslySetInnerHTML={{ __html: props.project.node.html }} />
    <ProjectLinkWrapper>
      <ProjectLink href={props.project.node.frontmatter.liveLink}>Live</ProjectLink>
      <ProjectLink href={props.project.node.frontmatter.sourceLink}>Source</ProjectLink>
    </ProjectLinkWrapper>
  </StyledPortfolioProject>
);

export default PortfolioProject;
