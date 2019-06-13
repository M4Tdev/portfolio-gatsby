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
    background-color: ${props => (props.colorstyle === 'normal' ? 'var(--primaryLight)' : 'white')};
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    width: 18rem;
    height: 5rem;
    margin: 6rem 0 0 6rem;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    width: 18rem;
    height: 5rem;
    margin: 7rem 0 0 8rem;
  }
`;

const StyledParagraph = styled.p`
  color: ${props => (props.colorstyle === 'normal' ? 'white' : 'var(--customBlack)')};
  font-size: 1.6rem;
  font-weight: var(--bold);
  position: relative;

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    font-size: 2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 2rem;
  }
`;

const SectionName = props => (
  <StyledDiv colorstyle={props.colorstyle}>
    <StyledParagraph colorstyle={props.colorstyle}>{props.children}</StyledParagraph>
  </StyledDiv>
);

export default SectionName;
