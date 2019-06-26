import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import 'normalize.css';
import GlobalStyles from '../../utils/global';
import theme from '../../utils/theme';
import GoToTopButton from './GoToTopButton';

const Wrapper = styled.div`
  position: relative;
`;

const Layout = props => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <GlobalStyles />
      {props.children}
      <GoToTopButton />
    </Wrapper>
  </ThemeProvider>
);

export default Layout;
