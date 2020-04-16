import React, { useState } from 'react';
import useStats from '../utils/useStats';
import ReactCountryFlag from 'react-country-flag';
import styled from 'styled-components';

const CountryShowing = styled.div`
  border: 1px solid #99a6c0;
  border-radius: 100px;
  padding: 0 10px;
`;

const CountryWrapper = styled.div`
  display: flex;
  margin: 10px;
`;

const CountryInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;

  img {
    border-radius: 50%;
    margin-right: 5px;
  }
`;

const CountrySelect = styled.select`
  width: 100%;
  padding: 5px;
  border: none;
  font-size: 80%;
  background-color: transparent;
  outline: none;
`;

const CountrySelector = (props) => {
  const listCountries = useStats('countries');
  const [selectedCountry, setSelectedCountry] = useState('ID');

  if (!listCountries) return <p>Loading...</p>;
  // console.log(listCountries.countries);

  return (
    <CountryShowing>
      <CountryWrapper>
        <CountryInfo>
          <ReactCountryFlag
            countryCode={selectedCountry}
            svg
            cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
            cdnSuffix="svg"
            title="US"
          />
          <p>{selectedCountry}</p>
        </CountryInfo>
        <CountrySelect
          onChange={(e) => {
            setSelectedCountry(e.target.value);
            props.onSelect(e.target.value);
          }}
          value={selectedCountry}
          className="country__select"
        >
          {listCountries.countries.map((country) => (
            <option key={country.name} value={country.iso2}>
              {country.name}
            </option>
          ))}
        </CountrySelect>
      </CountryWrapper>
    </CountryShowing>
  );
};

export default CountrySelector;
