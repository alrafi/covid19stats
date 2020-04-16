import React, { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';
import ReactCountryFlag from 'react-country-flag';

const CountrySelector = () => {
  const listCountries = useStats('countries');
  const [selectedCountry, setSelectedCountry] = useState('ID');

  if (!listCountries) return <p>Loading...</p>;
  console.log(listCountries.countries);

  return (
    // console.loh(listCountries);
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
          onChange={(e) => {
            setSelectedCountry(e.target.value);
          }}
          value={selectedCountry}
          className="country__select"
        >
          {listCountries.countries.map((country) => (
            <option key={country.name} value={country.iso2}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <Stats url={`countries/${selectedCountry}`} />
    </div>
  );
};

export default CountrySelector;
