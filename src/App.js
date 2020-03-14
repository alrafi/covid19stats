import React from 'react';
import GlobalStats from './components/GlobalStats';
// import DailyStats from './components/DailyStats';
import CountrySelector from './components/CuntrySelector';

const App = () => {
  return (
    <div>
      <GlobalStats></GlobalStats>
      <CountrySelector></CountrySelector>
    </div>
  );
};

export default App;
