import React from 'react';
import styled from 'styled-components';
import { Bars } from 'styled-icons/fa-solid';

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

const StyledMenuToggle = styled(Bars)`
  height: 3rem;
  width: 3rem;
  margin: 3rem 3rem 0 0;
  cursor: pointer;
`;

const Navbar = props => (
  <StyledNavbar>
    <StyledLogo>Mateusz Lesiuk</StyledLogo>
    <StyledMenuToggle />
  </StyledNavbar>
);

export default Navbar;
