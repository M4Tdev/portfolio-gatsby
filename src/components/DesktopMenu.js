import React from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  font-size: 1.8rem;
  font-weight: var(--medium);

  @media ${({ theme }) => theme.mediaQueries.small} {
    font-size: 1.9rem;
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    font-size: 2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 2.8rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    font-size: 3rem;
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

  @media ${({ theme }) => theme.mediaQueries.small} {
    margin-right: 2.6rem;
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    margin-right: 2.7rem;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    margin-right: 2.8rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    margin-right: 4rem;
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
