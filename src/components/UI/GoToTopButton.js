import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ChevronUp } from 'styled-icons/fa-solid';

const GoToTop = styled.button`
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
  display: ${props => (props.show ? 'block' : 'none')};
  opacity: 1;
  cursor: pointer;

  &::before {
    content: 'Go to top';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    min-width: 100%;
    width: 200%;
    margin: 0 auto;
    font-size: 1.4rem;
    font-weight: var(--semiBold);
    transition: opacity 0.1s ease, transform 0.1s ease;
    z-index: -1;
  }

  &:hover::before {
    transform: translateX(-50%) translateY(-200%);
    opacity: 1;
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
    if (window.pageYOffset <= 100) {
      setShowToTop(window.pageYOffset > 0);
    }
  };

  const scrollToTop = () => {
    window.scrollBy({ top: -window.pageYOffset, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    displayButton();
    window.addEventListener('scroll', displayButton);

    return () => window.removeEventListener('scroll', displayButton);
  }, []);

  return (
    <GoToTop show={showToTop} onClick={scrollToTop}>
      <StyledChevron />
    </GoToTop>
  );
};

export default GoToTopButton;
