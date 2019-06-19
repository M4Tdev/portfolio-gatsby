import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Bars } from 'styled-icons/fa-solid';
import { useSpring, useTransition, animated } from 'react-spring';
import { Link } from 'gatsby';

import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

const StyledNavbar = styled.nav`
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

  @media ${({ theme }) => theme.mediaQueries.medium} {
    margin-top: 5rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    margin-top: 6rem;
  }

  @media ${({ theme }) => theme.mediaQueries.largest} {
    margin-top: 5rem;
    width: 70%;
  }
`;

const AnimatedLogo = styled(animated(Link))`
  color: inherit;
  text-decoration: none;
`;

const StyledLogo = styled.h1`
  font-family: 'Pacifico', sans-serif;
  font-size: 2.2rem;
  font-weight: var(--regular);
  margin: 0 0 0 3rem;

  @media ${({ theme }) => theme.mediaQueries.small} {
    margin: 0;
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    font-size: 3rem;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    font-size: 5rem;
  }

  @media ${({ theme }) => theme.mediaQueries.largest} {
    font-size: 2.4rem;
  }
`;

const StyledMenuToggle = styled(animated.button)`
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

const Navbar = () => {
  const [isMenuOpen, toggleMenu] = useState(false);
  const [isMobile, setMobile] = useState(null);

  /* eslint-disable */
  const changeMobile = () => {
    // check if passed media query matches with window dimensions
    window.matchMedia('(max-width: 37.5em)').matches ? setMobile(true) : setMobile(false);
  };
  /* eslint-enable */

  useEffect(() => {
    changeMobile();
    window.addEventListener('resize', changeMobile);
    return () => window.removeEventListener('resize', changeMobile);
  }, []);

  const slideInFromTop = useSpring({
    // config: config.wobbly,
    from: { transform: 'translateY(-100%)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
  });

  const slideInFromRight = useSpring({
    // config: config.wobbly,
    from: { transform: 'translateX(100%)' },
    to: { transform: 'translateX(0)' },
  });

  const menu = useTransition(isMenuOpen, null, {
    config: { duration: 200 },
    from: { transform: 'translateX(-100%)' },
    enter: { transform: 'translateX(0)' },
    leave: { transform: 'translateX(-100%)' },
  });

  const renderMenu = () => {
    if (isMobile === null) {
      return null;
    }

    if (isMobile) {
      return (
        <>
          <StyledMenuToggle onClick={() => toggleMenu(!isMenuOpen)} style={slideInFromRight}>
            <StyledBurger />
          </StyledMenuToggle>
          {menu.map(
            ({ item, key, props }) =>
              item && <MobileMenu key={key} animate={props} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          )}
        </>
      );
    }
    return <DesktopMenu />;
  };

  return (
    <StyledNavbar>
      <InnerWrapper>
        <AnimatedLogo to="/" style={slideInFromTop}>
          <StyledLogo>Mateusz Lesiuk</StyledLogo>
        </AnimatedLogo>
        {renderMenu()}
      </InnerWrapper>
    </StyledNavbar>
  );
};

export default Navbar;
