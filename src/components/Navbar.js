import React, { useState } from 'react';
import styled from 'styled-components';
import { Bars } from 'styled-icons/fa-solid';

import MobileMenu from './MobileMenu';
import Backdrop from './Backdrop';

const StyledNavbar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const StyledLogo = styled.h1`
  font-family: 'Pacifico', sans-serif;
  font-size: 2.4rem;
  font-weight: var(--regular);
  margin: 3rem 0 0 3rem;
`;

const StyledMenuToggle = styled.button`
  background-color: white;
  height: 3rem;
  width: 3rem;
  margin: 3rem 3rem 0 0;
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
      <StyledLogo>Mateusz Lesiuk</StyledLogo>
      {props.isMobile ? (
        <>
          <StyledMenuToggle onClick={() => toggleMenu(!isMenuOpen)}>
            <StyledBurger />
          </StyledMenuToggle>
          <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </>
      ) : null}
      {isMenuOpen ? <Backdrop toggleMenu={toggleMenu} /> : null}
    </StyledNavbar>
  );
};

export default Navbar;
