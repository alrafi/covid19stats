import React from 'react';
import useStats from '../utils/useStats';

const Footer = () => {
  const stats = useStats();

  if (!stats) return <p>Loading...</p>;

  return (
    <footer>
      <p>Last update: {stats.lastUpdate}</p>
      <p>#StayAtHome. With ❤️ by hafisalrafi</p>
      <p>Data from API @mathroid</p>
    </footer>
  );
};

export default Footer;
