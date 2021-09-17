import React from "react";
import "../scss/App.scss";
import TestApi from "./TestApi";

const App = () => {
  return (
    <div className="App">
      <div>Chikopedia</div>
      <TestApi />
    </div>
  );
};

export default App;
