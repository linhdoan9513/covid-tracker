const GlobalSummary = ({ globalData }) => {
  const { active, confirmed, new_confirmed, new_deaths, deaths } = globalData;

  return (
    <ul>
      <li>
        Active Cases: <span>{active}</span>
      </li>
      <li>
        Confirmed Case: <span>{confirmed}</span>
      </li>
      <li>
        Total Deaths: <span>{deaths}</span>
      </li>
      <li>
        New Confirmed Cases: <span>{new_confirmed}</span>
      </li>
      <li>
        New Deaths: <span>{new_deaths}</span>
      </li>
    </ul>
  );
};

export default GlobalSummary;
