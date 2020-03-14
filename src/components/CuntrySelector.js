import React, { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';

const CountrySelector = () => {
  const listCountries = useStats('countries');
  const [selectedCountry, setSelectedCountry] = useState('ID');

  if (!listCountries) return <p>Loading...</p>;

  return (
    <div>
      <select
        onChange={e => {
          console.log(e.target.value);
          setSelectedCountry(e.target.value);
        }}
        value={selectedCountry}
      >
        {Object.entries(listCountries.countries).map(([country, code]) => (
          <option key={code} value={code}>
            {country}
          </option>
        ))}
      </select>
      <Stats url={`countries/${selectedCountry}`} />
    </div>
  );
};

export default CountrySelector;
