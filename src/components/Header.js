import React from "react";
import styled from "styled-components";
import header from "../assets/bg-covid.jpg";

const HeaderWrapper = styled.div`
  height: 30vh;
  background-image: url(${header});
  padding: 20px 15px;
  font-size: 60%;
  background-size: cover;

  @media (min-width: 425px) {
    padding: 60px 40px;
    font-size: 80%;
  }
`;

const HeaderText = styled.h1`
  margin: 0;
  width: 160px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderText>COVID-19</HeaderText>
      <HeaderText>Stats</HeaderText>
    </HeaderWrapper>
  );
};

export default Header;
