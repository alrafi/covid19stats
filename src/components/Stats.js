import React from 'react';
import useStats from '../utils/useStats';

const Stats = ({ url }) => {
  const stats = useStats(url);
  console.log(stats);

  if (!stats) return <p>Loading...</p>;

  return (
    <div className="stats__container">
      <div className="box">
        <p>Confirmed</p>
        <h3>{stats.confirmed.value}</h3>
      </div>
      <div className="box">
        <p>Recovered</p>
        <h3>{stats.recovered.value}</h3>
      </div>
      <div className="box">
        <p>Deaths</p>
        <h3>{stats.deaths.value}</h3>
      </div>
    </div>
  );
};

export default Stats;
