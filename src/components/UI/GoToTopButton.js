import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ChevronUp } from 'styled-icons/fa-solid';
import { useSpring, animated } from 'react-spring';
import { animateScroll as scroll } from 'react-scroll';

const GoToTop = styled(animated.button)`
  position: fixed;
  bottom: 3rem;
  right: 2rem;
  background-color: var(--primaryLight);
  border: none;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0.3rem 0.3rem 1rem rgba(0, 0, 0, 0.3);
  opacity: 1;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-0.5rem);
  }

  @media ${({ theme }) => theme.mediaQueries.smallest} {
    height: 5.5rem;
    width: 5.5rem;
    bottom: 3.5rem;
    right: 2.5rem;
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    bottom: 4rem;
    right: 3rem;
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    height: 6.5rem;
    width: 6.5rem;
    bottom: 5rem;
    right: 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    height: 8rem;
    width: 8rem;
    bottom: 8rem;
    right: 6rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    height: 6rem;
    width: 6rem;
    bottom: 6rem;
    right: 5rem;
  }

  @media ${({ theme }) => theme.mediaQueries.largest} {
    height: 5.5rem;
    width: 5.5rem;
    bottom: 6rem;
    right: 6rem;
  }
`;

const StyledChevron = styled(ChevronUp)`
  width: 1.5rem;
  color: white;
  fill: currentColor;
`;

const GoToTopButton = () => {
  const [showToTop, setShowToTop] = useState(false);

  const displayButton = () => {
    setShowToTop(window.pageYOffset > 800);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    displayButton();
    window.addEventListener('scroll', displayButton);

    return () => window.removeEventListener('scroll', displayButton);
  }, []);

  const appear = useSpring({
    display: showToTop ? 'block' : 'none',
    opacity: showToTop ? 1 : 0,
  });

  return (
    <GoToTop style={appear} onClick={scrollToTop}>
      <StyledChevron />
    </GoToTop>
  );
};

export default GoToTopButton;
