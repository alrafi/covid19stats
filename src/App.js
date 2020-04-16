import React from 'react';
import StatsContainer from './components/StatsContainer';
import Header from './components/Header';
import styled from 'styled-components';
import './assets/style.css';

const AppContainer = styled.div`
  margin: 20px;
  border-radius: 40px;
  background-color: #f6f6f6;
  /* height: 90vh; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media (min-width: 431px) {
    width: 370px;
    margin: 20px auto;
  }
`;

const MenuBar = styled.div`
  background: #ffffff;
  box-shadow: 0px -10px 20px rgba(62, 79, 96, 0.13);
  height: 70px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  position: fixed;
  bottom: 0;
  left: 20px;
  right: 20px;
  margin: 20px 0;
  z-index: 999;

  @media (min-width: 431px) {
    width: 370px;
    margin: 20px auto;
  }
`;

const BackgroundMenuBar = styled.div`
  background: #eae9e9;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  z-index: 990;
`;

const App = () => {
  return (
    <AppContainer>
      <Header></Header>
      <StatsContainer></StatsContainer>
      <BackgroundMenuBar>
        <MenuBar></MenuBar>
      </BackgroundMenuBar>
    </AppContainer>
  );
};

export default App;
