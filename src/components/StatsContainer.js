import React, { useState } from "react";
import Stats from "./Stats";
import CountrySelector from "./CuntrySelector";
import Footer from "./Footer";
import styled from "styled-components";
import useStats from "../utils/useStats";

const StatsWrapper = styled.div`
  padding: 20px 15px;
  background: linear-gradient(180deg, #ffffff 0%, #edffff 100%);
  height: 80vh;
`;

const StatsUpdate = styled.div`
  text-align: left;
  margin-top: 20px;

  h3 {
    font-size: 100%;
  }

  p {
    font-size: 60%;
  }
`;

const StatsContainer = () => {
  const [selectedCountry, setSelectedCountry] = useState("ID");
  const stats = useStats();

  if (!stats) return <p>Loading...</p>;

  const onCountrySelect = (selectedCountry) => {
    setSelectedCountry(selectedCountry);
  };

  return (
    <StatsWrapper>
      <CountrySelector onSelect={onCountrySelect}></CountrySelector>
      <StatsUpdate>
        <h3>COVID-19 Cases Update</h3>
        <p>Last Update: {stats.lastUpdate.substring(0, 10)}</p>
        <Stats url={`countries/${selectedCountry}`}></Stats>
      </StatsUpdate>
      <Footer></Footer>
    </StatsWrapper>
  );
};

export default StatsContainer;
