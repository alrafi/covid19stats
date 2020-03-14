import React from 'react';
import GlobalStats from './components/GlobalStats';
import CountrySelector from './components/CuntrySelector';
import './assets/style.css';

const App = () => {
  return (
    <div className="container">
      <GlobalStats></GlobalStats>
      <CountrySelector></CountrySelector>
    </div>
  );
};

export default App;
