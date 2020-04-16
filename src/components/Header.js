import React from 'react';
import styled from 'styled-components';
import header from '../assets/header.png';

const HeaderWrapper = styled.div`
  height: 320px;
  background-image: url(${header});
  border-radius: 20px;
  padding-top: 20px;
  /* position: absolute; */
`;

const HeaderText = styled.h1`
  margin: 0;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderText>COVID-19 STATS</HeaderText>
    </HeaderWrapper>
  );
};

export default Header;
