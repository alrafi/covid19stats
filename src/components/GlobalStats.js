import React from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';

const GlobalStats = () => {
  const stats = useStats();
  console.log(stats);

  if (!stats) return <p>Loading...</p>;

  return (
    <div>
      <Stats stats={stats} />
    </div>
  );
};

export default GlobalStats;
