import React from 'react';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.15);
`;

const Backdrop = props => <StyledBackdrop onClick={() => props.toggleMenu(false)} />;

export default Backdrop;
