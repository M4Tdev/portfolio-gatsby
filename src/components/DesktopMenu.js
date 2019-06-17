import React from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  font-size: 1.8rem;
  font-weight: var(--medium);
  z-index: 1;

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

  @media ${({ theme }) => theme.mediaQueries.largest} {
    font-size: 2.4rem;
  }
`;

const ListItem = styled.li`
  display: inline-block;
  margin-right: 2.5rem;
  position: relative;
  overflow: hidden;

  &:last-child {
    margin-right: 0;
  }

  & a {
    color: inherit;
    text-decoration: none;
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: color 0.3s ease;
    z-index: 1;
  }

  &:hover {
    color: var(--customBlack);
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    top: -100%;
    left: 0;
    z-index: -1;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: translateY(100%);
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

  @media ${({ theme }) => theme.mediaQueries.largest} {
    margin-right: 5rem;
  }
`;

const DesktopMenu = () => (
  <MenuWrapper>
    <ListItem>
      <a href="/#about">About me</a>
    </ListItem>
    <ListItem>
      <a href="/#portfolio">Portfolio</a>
    </ListItem>
    <ListItem>
      <a href="/#contact">Contact</a>
    </ListItem>
  </MenuWrapper>
);

export default DesktopMenu;
