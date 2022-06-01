import { useState, useEffect } from "react";
import Axios from "axios";

// const ROOT_URL = 'https://covid19.mathdro.id/api';
// kwalcorona: https://api.kawalcorona.com/indonesia/provinsi/

const useStats = (url = "", ROOT_URL = "https://covid19.mathdro.id/api") => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        let apiUrl = "";
        if (url) {
          apiUrl = `${ROOT_URL}/${url}`;
        } else {
          apiUrl = ROOT_URL;
        }
        const response = await Axios.get(apiUrl, {
          headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000",
            // "Access-Control-Allow-Credentials": "true",
          },
        });
        console.log("RESPONSE", response);
        setStats(response.data);
      } catch (err) {
        console.log("ERROR", err);
        setStats("N/A");
      }
    })();
  }, [url, ROOT_URL]);

  return stats;
};

export default useStats;
