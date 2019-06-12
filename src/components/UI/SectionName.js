import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 12rem;
  height: 4rem;
  background-color: transparent;
  border: 2px solid var(--customBlack);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  margin: 2rem 0 0 2rem;

  &::after {
    content: '';
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    z-index: -1;
    width: inherit;
    height: inherit;
    background-color: var(--primaryLight);
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    width: 18rem;
    height: 5rem;
    margin: 6rem 0 0 6rem;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    width: 23rem;
    height: 6.5rem;
    margin: 8rem 0 0 8rem;
  }
`;

const StyledParagraph = styled.p`
  color: white;
  font-size: 1.6rem;
  font-weight: var(--bold);
  position: relative;

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    font-size: 2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 2.6rem;
  }
`;

const SectionName = props => (
  <StyledDiv>
    <StyledParagraph>{props.children}</StyledParagraph>
  </StyledDiv>
);

export default SectionName;
