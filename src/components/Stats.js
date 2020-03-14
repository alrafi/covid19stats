import React from 'react';

const Stats = ({ stats }) => {
  return (
    <div>
      <h3>Confirmed:</h3>
      {stats.confirmed.value}
      <h3>Recovered:</h3>
      {stats.recovered.value}
      <h3>Deaths:</h3>
      {stats.deaths.value}
    </div>
  );
};

export default Stats;
