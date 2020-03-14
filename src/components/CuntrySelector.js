import React, { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';
import ReactCountryFlag from 'react-country-flag';

const CountrySelector = () => {
  const listCountries = useStats('countries');
  const [selectedCountry, setSelectedCountry] = useState('ID');

  if (!listCountries) return <p>Loading...</p>;

  return (
    <div className="country__showing">
      <div className="country">
        <div className="country__info">
          <ReactCountryFlag
            countryCode={selectedCountry}
            svg
            cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
            cdnSuffix="svg"
            title="US"
          />
          <p>{selectedCountry}</p>
        </div>
        <select
          onChange={e => {
            console.log(e.target.value);
            setSelectedCountry(e.target.value);
          }}
          value={selectedCountry}
          className="country__select"
        >
          {Object.entries(listCountries.countries).map(([country, code]) => (
            <option key={code} value={code}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <Stats url={`countries/${selectedCountry}`} />
    </div>
  );
};

export default CountrySelector;
