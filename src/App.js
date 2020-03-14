import React from 'react';
import GlobalStats from './components/GlobalStats';
import CountrySelector from './components/CuntrySelector';
import Footer from './components/Footer';
import './assets/style.css';

const App = () => {
  return (
    <div className="container">
      <div className="main">
        <h1>COVID-19 Real-Time Stats</h1>
        <h2>Global Stats</h2>
        <GlobalStats></GlobalStats>
        <h2>Country Stats</h2>
        <CountrySelector></CountrySelector>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
