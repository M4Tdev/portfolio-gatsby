import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { ChevronDown } from 'styled-icons/fa-solid';
import { Link } from 'react-scroll';
import { useSpring, animated, config } from 'react-spring';

import Navbar from './Navbar';

const StyledHero = styled.div`
  width: 100vw;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  background: linear-gradient(to bottom right, var(--primaryLight), var(--primaryDark));
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: '.' '.' '.';
  position: relative;
`;

const StyledHeader = styled(animated.h1)`
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
    font-size: 3.5rem;
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

const AnimatedSpan = styled(animated.span)`
  display: block;
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
    font-size: 2.1rem;
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

const StyledArrowWrapper = styled(animated.div)`
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
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  animation: ${smoothMovement} 1s infinite;

  @media ${({ theme }) => theme.mediaQueries.smallest} {
    height: 4rem;
    width: 3rem;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    height: 5rem;
    width: 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.largest} {
    height: 3.5rem;
    width: 2.5rem;
  }
`;

const Hero = () => {
  const heroSectionHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    heroSectionHeight();
    window.addEventListener('resize', heroSectionHeight);
    return () => window.removeEventListener('resize', heroSectionHeight);
  }, []);

  const styles = {
    config: config.wobbly,
    from: { display: 'block', transform: 'translateX(-100%)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 },
  };

  const firstSlideInFromLeft = useSpring({
    ...styles,
  });

  const secondSlideInFromLeft = useSpring({
    ...styles,
    delay: 100,
  });

  const thirdSlideInFromLeft = useSpring({
    ...styles,
    delay: 200,
  });

  const slideInFromBottom = useSpring({
    from: { opacity: 0, transform: 'translateX(-50%) translateY(130%)' },
    to: { opacity: 1, transform: 'translateX(-50%) translateY(0)' },
    delay: 500,
  });

  return (
    <StyledHero id="hero">
      <Navbar />
      <StyledHeader>
        <AnimatedSpan style={firstSlideInFromLeft}>
          Hi, <br />
        </AnimatedSpan>
        <AnimatedSpan style={secondSlideInFromLeft}>
          I'm <BoldText>Mateusz Lesiuk</BoldText>
          <br />
        </AnimatedSpan>
        <AnimatedSpan style={thirdSlideInFromLeft}>
          <SmallText>a Front-End Developer</SmallText>
        </AnimatedSpan>
      </StyledHeader>
      <StyledArrowWrapper style={slideInFromBottom}>
        <Link to="about" spy smooth>
          <StyledArrow />
        </Link>
      </StyledArrowWrapper>
    </StyledHero>
  );
};

export default Hero;
