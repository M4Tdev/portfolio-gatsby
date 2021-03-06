import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Project = styled.div`
  width: 100%;
  text-align: center;
  margin: 1rem auto 3rem;
  box-sizing: border-box;
`;

const ProjectTitle = styled.h2`
  position: relative;
  font-size: 1.6rem;
  font-weight: var(--semiBold);
  margin: 2rem auto 2rem;

  @media ${({ theme }) => theme.mediaQueries.smallest} {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    font-size: 2.2rem;
    margin-bottom: 3rem;
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    font-size: 2.6rem;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 3rem;
    margin-bottom: 6rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    font-size: 3.2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.largest} {
    font-size: 2.7rem;
  }
`;

const ProjectFlexDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.mediaQueries.large} {
    flex-direction: row;
    align-items: flex-start;
    /* justify-content: space-evenly; */
  }
`;

const ProjectImage = styled(Img)<{ fluid: any }>`
  box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.3);
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries.large} {
    flex: 1 0 50%;
    margin: 0 3rem;
  }
`;

const ProjectContent = styled.div`
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    width: 80%;
    margin: 0 auto;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    flex-basis: 1 1 50%;
    margin: 0 3rem;
    text-align: left;
  }
`;

const ProjectDescription = styled.div`
  font-size: 1.4rem;
  font-weight: var(--regular);
  margin-top: 2rem;

  & a {
    ${({ theme }) => theme.mixins.link('#fff', 'portfolio')}
  }

  @media ${({ theme }) => theme.mediaQueries.smallest} {
    font-size: 1.5rem;
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    font-size: 1.6rem;
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    font-size: 1.8rem;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    margin-top: 2.5rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    font-size: 2rem;
    margin-top: 0;
  }

  @media ${({ theme }) => theme.mediaQueries.largest} {
    font-size: 1.8rem;
    line-height: 2.2rem;
  }
`;

const ProjectStack = styled.div`
  font-size: 1.2rem;
  margin-top: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: var(--regular);

  @media ${({ theme }) => theme.mediaQueries.smallest} {
    font-size: 1.4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    font-size: 1.5rem;
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    font-size: 1.6rem;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    margin-top: 3rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    font-size: 1.7rem;
  }

  @media ${({ theme }) => theme.mediaQueries.largest} {
    font-size: 1.5rem;
  }
`;

const ProjectLinkWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  margin: 2rem auto 0;

  @supports (-ms-flow-from: thingy) {
    /* Edge only */
    justify-content: space-around;
  }

  @media ${({ theme }) => theme.mediaQueries.smallest} {
    margin-top: 2rem;
    width: 75%;
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    width: 80%;
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    width: 70%;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    width: 80%;
    margin-top: 3rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    margin-top: 5rem;
  }

  @media ${({ theme }) => theme.mediaQueries.largest} {
    width: 60%;
  }
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: white;
  background-color: transparent;
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 0.1rem solid white;
  transition: background-color 0.2s ease, color 0.2s ease;
  font-size: 1.3rem;
  font-weight: var(--medium);

  &:hover {
    background-color: white;
    color: var(--customBlack);
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

  @media ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    font-size: 2.2rem;
    letter-spacing: 0.2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.largest} {
    font-size: 1.6rem;
    padding: 1.2rem 2rem;
  }
`;

interface IProps {
  project: any;
}

const PortfolioProject: React.FC<IProps> = ({ project }) => (
  <Project>
    <ProjectTitle>{project.node.frontmatter.title}</ProjectTitle>
    <ProjectFlexDiv>
      <ProjectImage fluid={project.node.frontmatter.img.childImageSharp.fluid} />
      <ProjectContent>
        <ProjectDescription dangerouslySetInnerHTML={{ __html: project.node.html }} />
        <ProjectStack>{project.node.frontmatter.stack}</ProjectStack>
        <ProjectLinkWrapper>
          <ProjectLink href={project.node.frontmatter.liveLink} target="_blank" rel="noopener noreferrer">
            Live
          </ProjectLink>
          <ProjectLink href={project.node.frontmatter.sourceLink} target="_blank" rel="noopener noreferrer">
            Source
          </ProjectLink>
        </ProjectLinkWrapper>
      </ProjectContent>
    </ProjectFlexDiv>
  </Project>
);

export default PortfolioProject;
