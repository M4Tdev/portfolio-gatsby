import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Times } from 'styled-icons/fa-solid';

const StyledMobileMenu = styled.div`
  position: fixed;
  min-width: 60vw;
  width: 60%;
  min-height: 100vh;
  height: 100%;
  background-color: var(--customBlack);
  top: 0;
  right: -60%;
  z-index: 1;
  transition: transform 0.1s ease;

  &.open {
    transform: translateX(-100%);
  }
`;

const CloseMenuButton = styled.button`
  position: absolute;
  top: 3rem;
  right: 3rem;
  height: 3rem;
  width: 3rem;
  background: none;
  border: none;
`;

const CloseMenuIcon = styled(Times)`
  height: 100%;
  width: 100%;
  color: white;
  fill: currentColor;
`;

const MenuInnerWrapper = styled.ul`
  width: 100%;
  margin: 10rem 0 0 0;
  padding: 0;
  text-align: center;
  list-style-type: none;
`;

const MenuItem = styled.li`
  font-size: 2.4rem;
  font-weight: var(--medium);
  margin-bottom: 4rem;

  & a {
    text-decoration: none;
    color: inherit;
  }
`;

const MobileMenu = props => (
  <StyledMobileMenu className={props.isMenuOpen ? 'open' : ''} isMenuOpen={props.isMenuOpen}>
    <CloseMenuButton onClick={() => props.toggleMenu(false)}>
      <CloseMenuIcon />
    </CloseMenuButton>
    <MenuInnerWrapper>
      <MenuItem>
        <Link to="/#about">About me</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/#portfolio">Portfolio</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/#contact">Contact</Link>
      </MenuItem>
    </MenuInnerWrapper>
  </StyledMobileMenu>
);

export default MobileMenu;
