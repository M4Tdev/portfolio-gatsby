import React, { useState } from 'react';
import styled from 'styled-components';
import { Bars } from 'styled-icons/fa-solid';

import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

const StyledNavbar = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 3rem auto 0;

  @media ${({ theme }) => theme.mediaQueries.small} {
    width: 90%;
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    width: 85%;
  }
`;

const StyledLogo = styled.h1`
  font-family: 'Pacifico', sans-serif;
  font-size: 2.4rem;
  font-weight: var(--regular);
  margin: 0 0 0 3rem;

  @media ${({ theme }) => theme.mediaQueries.small} {
    margin: 0;
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    font-size: 3rem;
  }
`;

const StyledMenuToggle = styled.button`
  background-color: white;
  height: 3rem;
  width: 3rem;
  margin: 0 3rem 0 0;
  background: none;
  border: none;
`;

const StyledBurger = styled(Bars)`
  height: 100%;
  width: 100%;
  cursor: pointer;
  color: white;
  fill: currentColor;
`;

const Navbar = props => {
  const [isMenuOpen, toggleMenu] = useState(false);

  return (
    <StyledNavbar>
      <InnerWrapper>
        <StyledLogo>Mateusz Lesiuk</StyledLogo>
        {props.isMobile ? (
          <>
            <StyledMenuToggle onClick={() => toggleMenu(!isMenuOpen)}>
              <StyledBurger />
            </StyledMenuToggle>
            <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </>
        ) : (
          <DesktopMenu />
        )}
      </InnerWrapper>
    </StyledNavbar>
  );
};

export default Navbar;
