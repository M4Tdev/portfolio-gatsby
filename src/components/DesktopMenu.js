import React from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.ul`
  list-style-type: none;
  margin: 0 3rem 0 0;
  font-size: 1.8rem;
  font-weight: var(--medium);

  @media ${({ theme }) => theme.mediaQueries.small} {
    margin: 0;
  }
`;

const ListItem = styled.li`
  display: inline-block;
  margin-right: 2.5rem;

  &:last-child {
    margin-right: 0;
  }

  & a {
    color: inherit;
    text-decoration: none;
  }
`;

const DesktopMenu = () => (
  <MenuWrapper>
    <ListItem>
      <a href="#about">About me</a>
    </ListItem>
    <ListItem>
      <a href="#portfolio">Portfolio</a>
    </ListItem>
    <ListItem>
      <a href="#contact">Contact</a>
    </ListItem>
  </MenuWrapper>
);

export default DesktopMenu;
