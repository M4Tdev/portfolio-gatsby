import React from 'react';
import styled from 'styled-components';
import { Linkedin, Github, Twitter } from 'styled-icons/fa-brands';

import Shape from '../assets/Vector3.svg';

import SectionName from './UI/SectionName';

const StyledContact = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledShape = styled(Shape)`
  position: absolute;
  top: 0;
  left: 0;
  margin-left: -2rem;
  z-index: -1;
`;

const ContactContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: black;
  box-sizing: border-box;
  text-align: center;
`;

const ContactText = styled.p`
  font-size: 1.6rem;
  font-weight: var(--regular);
`;

const ContactEmail = styled.p`
  font-size: 1.8rem;
  font-weight: var(--semiBold);
  margin-top: 4rem;
`;

const ContactSocialAccounts = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 7rem;
`;

const IconWrapper = styled.div`
  color: #181616;
  width: 4rem;
`;

const FooterLogo = styled.h2`
  font-family: 'Pacifico', sans-serif;
  font-size: 2.4rem;
  font-weight: var(--regular);
  color: black;
  display: block;
  margin: 3rem auto 1rem;
  text-align: center;
`;

const Contact = () => (
  <StyledContact>
    <StyledShape />
    <SectionName width="12rem" height="4rem" fontsize="1.6rem" margin="4rem 0 0 2rem" color="white">
      Contact
    </SectionName>
    <ContactContentWrapper>
      <ContactText>Get in touch via email or social media:</ContactText>
      <ContactEmail>hello@mateuszlesiuk.dev</ContactEmail>
      <ContactSocialAccounts>
        <IconWrapper>
          <Linkedin />
        </IconWrapper>
        <IconWrapper>
          <Github />
        </IconWrapper>
        <IconWrapper>
          <Twitter />
        </IconWrapper>
      </ContactSocialAccounts>
    </ContactContentWrapper>
    <FooterLogo>Mateusz Lesiuk</FooterLogo>
  </StyledContact>
);

export default Contact;
