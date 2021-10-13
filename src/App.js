import "./App.css";
import Header from "./Header";
import GlobalAPI from "./GlobalAPI";
import CountriesAPI from "./CountriesAPI";

function App() {
  return (
    <div className="App">
      <Header />
      <GlobalAPI />
      <CountriesAPI />
    </div>
  );
}

export default App;
