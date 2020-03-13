import React from 'react';
import useStats from './useStats';

const App = () => {
  const stats = useStats('ID');
  console.log(stats);

  return (
    <ul>
      <li>tes</li>
    </ul>
  );
};

export default App;
