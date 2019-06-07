import React from 'react';
import styled from 'styled-components';

import Shape from '../assets/Vector1.svg';
import SectionName from './UI/SectionName';

const StyledAbout = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  position: relative;
  color: black;
  z-index: 1;
  box-sizing: border-box;
`;

const StyledShape = styled(Shape)`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
`;

const StyledContent = styled.p`
  font-size: 1.6rem;
  font-weight: var(--regular);
  margin: 3rem 1rem 0 11rem;
`;

const About = () => (
  <StyledAbout>
    <StyledShape />
    <SectionName width="15rem" height="5rem">
      About me
    </SectionName>
    <StyledContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sem eu augue tristique pulvinar quis vitae
      mauris. Nulla varius mi vel nisi congue blandit. Etiam viverra tellus nec maximus rhoncus. Phasellus metus mauris,
      vestibulum eget mi quis, convallis mattis quam. Cras eros ante, condimentum fringilla metus ac, commodo imperdiet
      eros. Duis ut interdum tellus, sed blandit mauris. Donec laoreet congue mi, vitae scelerisque mauris dictum sit
      amet. Praesent congue scelerisque efficitur.
    </StyledContent>
  </StyledAbout>
);

export default About;
