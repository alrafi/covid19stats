import { useState, useEffect } from 'react';
import Axios from 'axios';

const ROOT_URL = 'https://covid19.mathdro.id/api';

const useStats = (url = '') => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await Axios.get(`${ROOT_URL}/${url}`);
      setStats(response.data);
    })();
  }, [url]);

  return stats;
};

export default useStats;
