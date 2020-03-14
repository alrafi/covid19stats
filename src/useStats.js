import { useState, useEffect } from 'react';
import Axios from 'axios';

const useStats = id => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    (async () => {
      console.log('fetching data');
      const response = await Axios.get(
        `https://covid19.mathdro.id/api/countries/${id}`
      );
      setStats(response.data);
    })();
  }, [id]);

  return stats;
};

export default useStats;
