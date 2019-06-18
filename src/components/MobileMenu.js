import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Times } from 'styled-icons/fa-solid';
import { animated } from 'react-spring';

const StyledMobileMenu = styled(animated.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: var(--customBlack);
  top: 0;
  left: 0;
  transform: translateX(-100%);
  z-index: 20;
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
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  margin: 0;
  padding: 0;
  text-align: center;
  list-style-type: none;
`;

const MenuItem = styled.li`
  font-size: 2.4rem;
  font-weight: var(--medium);
  margin-bottom: 5rem;

  & a {
    text-decoration: none;
    color: inherit;
  }
`;

const MobileMenu = props => (
  <StyledMobileMenu style={props.animate}>
    <CloseMenuButton onClick={() => props.toggleMenu(false)}>
      <CloseMenuIcon />
    </CloseMenuButton>
    <MenuInnerWrapper>
      <MenuItem>
        <Link to="/#about" onClick={() => props.toggleMenu(false)}>
          About me
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/#portfolio" onClick={() => props.toggleMenu(false)}>
          Portfolio
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/#contact" onClick={() => props.toggleMenu(false)}>
          Contact
        </Link>
      </MenuItem>
    </MenuInnerWrapper>
  </StyledMobileMenu>
);

export default MobileMenu;
