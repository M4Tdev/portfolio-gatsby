import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Project = styled.div`
  width: 95%;
  text-align: center;
  margin: 1rem auto 3rem;
  box-sizing: border-box;
`;

const ProjectTitle = styled.h2`
  position: relative;
  font-size: 1.6rem;
  font-weight: var(--semiBold);
  font-style: italic;
  margin: 2rem auto 1rem;

  @media ${({ theme }) => theme.mediaQueries.smallest} {
    font-size: 2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    font-size: 2.2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    font-size: 2.6rem;
  }
`;

const ProjectImage = styled(Img)`
  box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.3);
  width: 100%;
`;

const ProjectStack = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: var(--regular);

  @media ${({ theme }) => theme.mediaQueries.smallest} {
    font-size: 1.4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    font-size: 1.6rem;
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    font-size: 1.8rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.4rem;
  font-weight: var(--medium);
  margin-top: 1rem;

  @media ${({ theme }) => theme.mediaQueries.smallest} {
    font-size: 1.6rem;
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    font-size: 1.8rem;
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    font-size: 2rem;
  }
`;

const ProjectLinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 1rem auto 0;

  @media ${({ theme }) => theme.mediaQueries.smallest} {
    margin-top: 2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    width: 80%;
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    width: 70%;
  }
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

  @media ${({ theme }) => theme.mediaQueries.smallest} {
    padding: 1.4rem 2.6rem;
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    padding: 1.6rem 3rem;
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    padding: 1.8rem 4rem;
    font-size: 1.6rem;
  }
`;

const PortfolioProject = props => (
  <Project>
    <ProjectTitle>{props.project.node.frontmatter.title}</ProjectTitle>
    <ProjectImage fluid={props.project.node.frontmatter.img.childImageSharp.fluid} />
    <ProjectStack>{props.project.node.frontmatter.stack}</ProjectStack>
    <ProjectDescription dangerouslySetInnerHTML={{ __html: props.project.node.html }} />
    <ProjectLinkWrapper>
      <ProjectLink href={props.project.node.frontmatter.liveLink} target="_blank">
        Live
      </ProjectLink>
      <ProjectLink href={props.project.node.frontmatter.sourceLink} target="_blank">
        Source
      </ProjectLink>
    </ProjectLinkWrapper>
  </Project>
);

export default PortfolioProject;
