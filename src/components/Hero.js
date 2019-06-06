import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { ChevronDown } from 'styled-icons/fa-solid';

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
`;

const BoldText = styled.span`
  font-weight: var(--bold);
`;

const SmallText = styled.span`
  font-size: 1.4rem;
  display: block;
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

  &:hover {
    animation: ${smoothMovement} 1s infinite;
  }
`;

const Hero = () => {
  const [isMobile, setMobile] = useState(null);

  /* eslint-disable */
  const changeMobile = () => {
    // check if passed media query matches with window dimensions
    window.matchMedia('(max-width: 37.5em)').matches
      ? setMobile(true)
      : setMobile(false);
  };
  /* eslint-enable */

  useEffect(() => {
    changeMobile();
    window.addEventListener('resize', changeMobile);
    return () => window.removeEventListener('resize', changeMobile);
  }, []);

  return (
    <StyledHero>
      <Navbar isMobile={isMobile} />
      <StyledHeader>
        Hi, <br />
        I'm <BoldText>Mateusz Lesiuk</BoldText>
        <br />
        <SmallText>a Front-End Developer</SmallText>
      </StyledHeader>
      <StyledArrowWrapper>
        <StyledArrow />
      </StyledArrowWrapper>
    </StyledHero>
  );
};

export default Hero;
