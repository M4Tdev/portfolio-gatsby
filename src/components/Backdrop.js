import React from 'react';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.15);
  transition: opacity 0.1s ease;
`;

const Backdrop = props => <StyledBackdrop onClick={() => props.toggleMenu(false)} />;

export default Backdrop;
