import React from 'react';
import styled from 'styled-components';
import header from '../assets/header.png';

const HeaderWrapper = styled.div`
  height: 320px;
  background-image: url(${header});
  border-radius: 40px;
  padding-top: 70px;
  padding-left: 40px;
  font-size: 80%;
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
