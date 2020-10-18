import React from 'react';
import styled from 'styled-components';

interface IProps {
  customMargin?: string;
  colorstyle?: string;
}

const StyledDiv = styled.div<{ colorstyle?: string; customMargin?: string }>`
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
    background-color: ${(props) => (props.colorstyle === 'normal' ? 'var(--primaryLight)' : 'white')};
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

  @media ${({ theme }) => theme.mediaQueries.largest} {
    margin: ${(props) => props.customMargin || '7rem 0 0 8rem'};
  }
`;

const StyledParagraph = styled.p<{ colorstyle?: string }>`
  color: ${(props) => (props.colorstyle === 'normal' ? 'white' : 'var(--customBlack)')};
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

const SectionName: React.FC<IProps> = ({ customMargin, colorstyle, children }) => (
  <StyledDiv customMargin={customMargin} colorstyle={colorstyle}>
    <StyledParagraph colorstyle={colorstyle}>{children}</StyledParagraph>
  </StyledDiv>
);

export default SectionName;
