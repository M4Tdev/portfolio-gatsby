import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Times } from 'styled-icons/fa-solid';
import { useSpring, animated, config } from 'react-spring';

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

const MenuItem = styled(animated.li)`
  font-size: 2.4rem;
  font-weight: var(--medium);
  margin-bottom: 5rem;

  & a {
    text-decoration: none;
    color: inherit;
  }
`;

const Copyright = styled(animated.div)`
  position: absolute;
  width: 100%;
  bottom: 2rem;
  left: 0;
  text-align: center;
  font-size: 1.2rem;
  opacity: 0.5;

  @media ${({ theme }) => theme.mediaQueries.smallest} {
    font-size: 1.4rem;
    bottom: 2.5rem;
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    font-size: 1.6rem;
    bottom: 3.5rem;
  }
`;

const MobileMenu = props => {
  const styles = {
    config: config.stiff,
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0)' },
  };

  const firstMenuItem = useSpring({
    ...styles,
  });

  const secondMenuItem = useSpring({
    ...styles,
    delay: 50,
  });

  const thirdMenuItem = useSpring({
    ...styles,
    delay: 100,
  });

  const copyrightSpring = useSpring({
    config: config.wobbly,
    from: { transform: 'translateY(300%)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    delay: 1000,
  });

  return (
    <StyledMobileMenu style={props.animate}>
      <CloseMenuButton onClick={() => props.toggleMenu(false)}>
        <CloseMenuIcon />
      </CloseMenuButton>
      <MenuInnerWrapper>
        <MenuItem style={firstMenuItem}>
          <Link to="/#about" onClick={() => props.toggleMenu(false)}>
            About me
          </Link>
        </MenuItem>
        <MenuItem style={secondMenuItem}>
          <Link to="/#portfolio" onClick={() => props.toggleMenu(false)}>
            Portfolio
          </Link>
        </MenuItem>
        <MenuItem style={thirdMenuItem}>
          <Link to="/#contact" onClick={() => props.toggleMenu(false)}>
            Contact
          </Link>
        </MenuItem>
      </MenuInnerWrapper>
      <Copyright style={copyrightSpring}>Copyright © 2019, Mateusz Lesiuk</Copyright>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
