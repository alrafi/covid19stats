import { useState, useEffect } from 'react';
import Axios from 'axios';

// const ROOT_URL = 'https://covid19.mathdro.id/api';
// kwalcorona: https://api.kawalcorona.com/indonesia/provinsi/

const useStats = (url = '', ROOT_URL = 'https://covid19.mathdro.id/api') => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await Axios.get(`${ROOT_URL}/${url}`);
        setStats(response.data);
      } catch (err) {
        setStats('N/A');
      }
    })();
  }, [url, ROOT_URL]);

  return stats;
};

export default useStats;
