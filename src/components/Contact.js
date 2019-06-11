import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
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

  & a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
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

  & a {
    color: inherit;
  }
`;

const FooterLogo = styled.h2`
  font-family: 'Pacifico', sans-serif;
  font-size: 2.4rem;
  font-weight: var(--regular);
  color: black;
  display: block;
  margin: 0 auto 1rem;
  text-align: center;
`;

const FooterCopyright = styled.span`
  display: block;
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "contact.md" }) {
        childMarkdownRemark {
          frontmatter {
            email
            linkedin
            github
            twitter
          }
        }
      }
    }
  `);

  return (
    <StyledContact>
      <StyledShape />
      <SectionName width="12rem" height="4rem" fontsize="1.6rem" margin="4rem 0 0 2rem" color="white">
        Contact
      </SectionName>
      <ContactContentWrapper>
        <ContactText>Get in touch via email or social media:</ContactText>
        <ContactEmail>
          <a href={`mailto:${data.file.childMarkdownRemark.frontmatter.email}`}>
            {data.file.childMarkdownRemark.frontmatter.email}
          </a>
        </ContactEmail>
        <ContactSocialAccounts>
          <IconWrapper>
            <a href={data.file.childMarkdownRemark.frontmatter.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
          </IconWrapper>
          <IconWrapper>
            <a href={data.file.childMarkdownRemark.frontmatter.github} target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
          </IconWrapper>
          <IconWrapper>
            <a href={data.file.childMarkdownRemark.frontmatter.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>
          </IconWrapper>
        </ContactSocialAccounts>
      </ContactContentWrapper>
      <FooterLogo>
        Mateusz Lesiuk
        <FooterCopyright>Copyright © 2019, Mateusz Lesiuk</FooterCopyright>
      </FooterLogo>
    </StyledContact>
  );
};

export default Contact;
