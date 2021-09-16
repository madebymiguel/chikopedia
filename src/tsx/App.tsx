import React from "react";
import "../scss/App.scss";
import PokedexEntry from "./PokedexEntry";
import TestApi from "./TestApi";

const App = () => {
  return (
    <div className="App">
      <div>Chikopedia</div>
      {/* <PokedexEntry /> */}
      <TestApi />
    </div>
  );
};

export default App;
