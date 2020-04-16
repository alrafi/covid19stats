import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 70px;

  p {
    text-align: center;
    font-size: 60%;
  }

  a {
    text-decoration: none;
    color: #000000;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        #StayAtHome. With{' '}
        <span role="img" aria-label="love">
          ❤️
        </span>{' '}
        by hafisalrafi
      </p>
      <p>
        Assets from <a href="https://www.freepik.com/">Freepik</a> &{' '}
        <a href="https://www.flaticon.com/">Flaticon</a>
      </p>
      <p>Data from API @mathdroid</p>
    </FooterWrapper>
  );
};

export default Footer;
