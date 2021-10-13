import axios from "axios";
import { useState, useEffect } from "react";
import GlobalSummary from "./GlobalSummary";

const GlobalAPI = () => {
  const [globalStats, setGlobalStats] = useState({
    active: 0,
    confirmed: 0,
    new_confirmed: 0,
    new_deaths: 0,
    deaths: 0,
  });

  useEffect(() => {
    // After the component has been added to the DOM make our API call...
    axios({
      url: "https://corona-api.com/timeline",
    })
      .then((res) => {
        let data = res.data.data[0];
        setGlobalStats({
          active: data.active,
          confirmed: data.confirmed,
          new_confirmed: data.new_confirmed,
          new_deaths: data.new_deaths,
          deaths: data.deaths,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <GlobalSummary globalData={globalStats} />
    </>
  );
};

export default GlobalAPI;
