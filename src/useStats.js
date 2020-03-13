import { useState, useEffect } from 'react';
import Axios from 'axios';

const useStats = id => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await Axios.get(
        `https://covid19.mathdro.id/api/countries/${id}`
      );

      console.log(response.data);
      setStats(response.data);
    })();
  }, stats);
};

export default useStats;
