import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ChevronUp } from 'styled-icons/fa-solid';

const GoToTop = styled.button`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  background-color: white;
  border: none;
  padding: 2rem;
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0.2rem 0.2rem 3rem var(--customBlack);
  display: ${props => (props.show ? 'block' : 'none')};
`;

const StyledChevron = styled(ChevronUp)`
  min-width: 1rem;
  color: var(--customBlack);
`;

const GoToTopButton = () => {
  const [showToTop, setShowToTop] = useState(false);

  const displayButton = () => {
    if (window.pageYOffset <= 100) {
      console.log(window.pageYOffset > 0);
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
