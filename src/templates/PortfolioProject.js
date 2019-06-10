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

const PortfolioProjectShow = styled.div`
  background-color: rgb(0, 0, 0, 0.15);
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.15);
  width: 100%;
`;

const PortfolioProject = props => (
  <StyledPortfolioProject>
    <PortfolioProjectTitle>{props.project.node.frontmatter.title}</PortfolioProjectTitle>
    <PortfolioProjectShow>
      <Img fluid={props.project.node.frontmatter.img.childImageSharp.fluid} />
    </PortfolioProjectShow>
  </StyledPortfolioProject>
);

export default PortfolioProject;
