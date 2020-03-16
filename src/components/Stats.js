import React from 'react';
import useStats from '../utils/useStats';

const Stats = ({ url }) => {
  const stats = useStats(url);

  if (!stats) return <p>Loading...</p>;

  return (
    <div className="stats__container">
      <div className="box confirmed">
        <p>Confirmed</p>
        <h3>{stats !== 'N/A' ? stats.confirmed.value : 'N/A'}</h3>
      </div>
      <div className="box recovered">
        <p>Recovered</p>
        <h3>{stats !== 'N/A' ? stats.recovered.value : 'N/A'}</h3>
      </div>
      <div className="box deaths">
        <p>Deaths</p>
        <h3>{stats !== 'N/A' ? stats.deaths.value : 'N/A'}</h3>
      </div>
    </div>
  );
};

export default Stats;
