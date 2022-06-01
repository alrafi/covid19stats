import React from "react";
import StatsContainer from "./components/StatsContainer";
import Header from "./components/Header";
import styled from "styled-components";
import "./assets/style.css";

const AppContainer = styled.div`
  background-color: #f6f6f6;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: 431px) {
    width: 500px;
    margin: 0 auto;
  }
`;

const App = () => {
  return (
    <AppContainer>
      <Header></Header>
      <StatsContainer></StatsContainer>
    </AppContainer>
  );
};

export default App;
