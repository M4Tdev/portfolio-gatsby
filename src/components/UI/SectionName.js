import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: transparent;
  border: 2px solid var(--customBlack);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  margin: ${props => props.margin};

  &::after {
    content: '';
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    z-index: -1;
    width: inherit;
    height: inherit;
    background-color: var(--primaryLight);
  }
`;

const StyledParagraph = styled.p`
  color: white;
  font-size: ${props => props.fontsize};
  font-weight: var(--bold);
  position: relative;
`;

const SectionName = props => (
  <StyledDiv width={props.width} height={props.height} margin={props.margin}>
    <StyledParagraph fontsize={props.fontsize}>{props.children}</StyledParagraph>
  </StyledDiv>
);

export default SectionName;
