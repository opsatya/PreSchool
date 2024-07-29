import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; // Ensure the page takes the full height of the viewport
`;

const ContentWrapper = styled.div`
  flex: 1; // This allows the content area to grow and take up available space
`;

const FooterWrapper = styled.footer`
  background-color: #000;
  color: #fff;
  height:auto;
  padding: 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    margin-bottom: 10px;
    color: #fff;
  }
`;

const FooterNav = styled.nav`
  margin-bottom: 20px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 15px;

    li {
      display: inline;
    }

    a {
      color: #fff;
      text-decoration: none;
      font-size: 18px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const FooterSocial = styled.div`
  margin-bottom: 20px;

  a {
    color: #fff;
    font-size: 24px;
    margin: 0 10px;
    text-decoration: none;

    &:hover {
      color: #ddd;
    }
  }
`;

const FooterContact = styled.div`
  font-size: 14px;

  p {
    margin: 5px 0;
    color: #fff;
  }
`;

const Reserved = styled.div`
  font-size: 14px;

  p {
    margin: 5px 0;
    color: #fff;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterNav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/class">Classes</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </FooterNav>
        <FooterSocial>
          <a href="https://www.facebook.com/profile.php?id=100092115633987" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.youtube.com/@LondonKidsLohegaonPune" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://wa.me/+919011011320" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </FooterSocial>
        <FooterContact>
          <p>Lohegaon,Pune,Maharashtra,India</p>
          <p>Email: Londonkidspune@gmail.com</p>
          <p>Phone: +91 90110 11320</p>
        </FooterContact>
      </FooterContent>
      <Reserved>
        <p>&copy; {new Date().getFullYear()} London Kids PreSchool. All rights reserved.</p>
      </Reserved>
    </FooterWrapper>
  );
};



export default Footer;

