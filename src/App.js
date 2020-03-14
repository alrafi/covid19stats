import React from 'react';
import GlobalStats from './components/GlobalStats';
import CountrySelector from './components/CuntrySelector';
import './assets/style.css';

const App = () => {
  return (
    <div className="container">
      <h1>COVID-19 Real-Time Stats</h1>
      <h2>Global Stats</h2>
      <GlobalStats></GlobalStats>
      <h2>Country Stats</h2>
      <CountrySelector></CountrySelector>
    </div>
  );
};

export default App;
