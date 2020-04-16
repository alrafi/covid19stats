import React, { useState } from 'react';
import Stats from './Stats';
import CountrySelector from './CuntrySelector';
import styled from 'styled-components';

const StatsWrapper = styled.div`
  padding: 20px 15px;
  margin-top: -60px;
  background: linear-gradient(180deg, #ffffff 0%, #edffff 100%);
  border-radius: 40px;
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
  const [selectedCountry, setSelectedCountry] = useState('ID');

  const onCountrySelect = (selectedCountry) => {
    console.log(selectedCountry);
    setSelectedCountry(selectedCountry);
  };

  return (
    <StatsWrapper>
      <CountrySelector onSelect={onCountrySelect}></CountrySelector>
      <StatsUpdate>
        <h3>COVID-19 Cases Update</h3>
        <p>Last Update: 2020-03-26</p>
        <Stats url={`countries/${selectedCountry}`}></Stats>
      </StatsUpdate>
    </StatsWrapper>
  );
};

export default StatsContainer;
