import React from 'react';
import { ThemeProvider } from 'styled-components';

import 'normalize.css';
import GlobalStyles from '../../utils/global';
import theme from '../../utils/theme';

const Layout = props => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyles />
      {props.children}
    </div>
  </ThemeProvider>
);

export default Layout;
