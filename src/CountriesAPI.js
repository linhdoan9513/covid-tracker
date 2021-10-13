import axios from "axios";
import { useState, useEffect } from "react";
import CountryGraph from "./CountryGraph";

const CountriesAPI = () => {
  const [countriesStats, setCountriesStats] = useState([]);
  useEffect(() => {
    // After the component has been added to the DOM make our API call...
    axios({
      url: "https://corona-api.com/countries?include=timeline",
    })
      .then((res) => {
        setCountriesStats(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <CountryGraph countriesData={countriesStats} />
    </div>
  );
};

export default CountriesAPI;
