import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ChevronDown } from 'styled-icons/fa-solid';
import { Link } from 'gatsby';

import Navbar from './Navbar';

const StyledHero = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom right, var(--primaryLight), var(--primaryDark));
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: '.' '.' '.';
  position: relative;
`;

const StyledHeader = styled.h1`
  align-self: center;
  margin: 0 auto;
  font-weight: var(--regular);
  font-size: 2.4rem;

  @media ${({ theme }) => theme.mediaQueries.smallest} {
    font-size: 2.6rem;
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    font-size: 2.8rem;
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    font-size: 3rem;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 4.5rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    font-size: 6rem;
  }

  @media ${({ theme }) => theme.mediaQueries.largest} {
    font-size: 4.8rem;
  }
`;

const BoldText = styled.span`
  font-weight: var(--bold);
`;

const SmallText = styled.span`
  font-size: 1.4rem;
  display: block;

  @media ${({ theme }) => theme.mediaQueries.smallest} {
    font-size: 1.6rem;
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    font-size: 1.8rem;
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    font-size: 2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 2.8rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    font-size: 3.2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.largest} {
    font-size: 2rem;
  }
`;

const StyledArrowWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  padding: 1rem;
  transform: translateX(-50%);
`;

const smoothMovement = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-1rem);
  }

  100% {
    transform: translateY(0);
  }
`;

const StyledArrow = styled(ChevronDown)`
  color: white;
  display: block;
  min-height: 3rem;
  min-width: 2rem;
  cursor: pointer;
  animation: ${smoothMovement} 1s infinite;

  @media ${({ theme }) => theme.mediaQueries.smallest} {
    min-height: 4rem;
    min-width: 3rem;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    min-height: 5rem;
    min-width: 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.largest} {
    min-height: 3.5rem;
    min-width: 2.5rem;
  }
`;

const Hero = props => (
  <StyledHero>
    <Navbar isMobile={props.isMobile} />
    <StyledHeader>
      Hi, <br />
      I'm <BoldText>Mateusz Lesiuk</BoldText>
      <br />
      <SmallText>a Front-End Developer</SmallText>
    </StyledHeader>
    <StyledArrowWrapper>
      <Link to="/#about">
        <StyledArrow />
      </Link>
    </StyledArrowWrapper>
  </StyledHero>
);

export default Hero;
