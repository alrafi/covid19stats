import React from 'react';
import useStats from '../utils/useStats';

const Stats = ({ url }) => {
  const stats = useStats(url);
  console.log(stats);

  if (!stats) return <p>Loading...</p>;

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
