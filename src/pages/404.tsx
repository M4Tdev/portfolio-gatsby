import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/UI/Layout';
import Navbar from '../components/Navbar';

// import Image from '../assets/undraw_page_not_found_su7k.svg';
import Image from '../assets/undraw_Taken_if77.svg';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom right, var(--primaryLight), var(--primaryDark));
  position: relative;
`;

const Message = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledImage = styled(Image)`
  display: block;
  margin: 0 auto;
  width: 16rem;
  height: auto;

  @media ${({ theme }) => theme.mediaQueries.smallest} {
    width: 20rem;
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    width: 24rem;
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    width: 28rem;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    width: 34rem;
  }
`;

const StyledHeading = styled.h1`
  font-size: 1.6rem;
  font-weight: var(--medium);
  letter-spacing: 0.1rem;
  margin-top: 3rem;

  @media ${({ theme }) => theme.mediaQueries.smallest} {
    font-size: 1.8rem;
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    font-size: 2rem;
    margin-top: 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    font-size: 2.2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 2.4rem;
    margin-top: 6rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    font-size: 2.6rem;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.4rem;
  ${({ theme }) => theme.mixins.link('white')}
  /* text-decoration: none; */
  /* border-bottom: 1px solid white; */
  /* color: #404d5b; */
  font-weight: var(--medium);
  /* padding: 0.2rem 0.1rem;
  transition: border-color 0.3s ease, background-color 0.3s ease; */

  /* &:hover {
    border-bottom: 0.1rem solid rgba(52, 73, 94, 0);
    background-color: rgba(52, 73, 94, 0.1);
  } */

  @media ${({ theme }) => theme.mediaQueries.smallest} {
    font-size: 1.6rem;
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    font-size: 1.8rem;
  }

  @media ${({ theme }) => theme.mediaQueries.smallMedium} {
    font-size: 2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 2.4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    font-size: 2.6rem;
  }
`;

const NotFound = () => (
  <Layout>
    <Wrapper>
      <Navbar />
      <Message>
        <StyledImage />
        <StyledHeading>We could not find the page.</StyledHeading>
        <StyledLink to="/">Go to Home page</StyledLink>
      </Message>
    </Wrapper>
  </Layout>
);

export default NotFound;
