import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

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
        #StayAtHome. With{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by hafisalrafi
      </p>
    </FooterWrapper>
  );
};

export default Footer;
