import React from 'react';
import useStats from '../utils/useStats';

const DailyStats = () => {
  const date = new Date().toISOString().substring(0, 10);
  console.log(date);

  const stats = useStats('daily');

  if (!stats) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>total confirmed:</h3>
      {stats[stats.length - 1].totalConfirmed}
    </div>
  );
};

export default DailyStats;
