import React from "react";
import "../scss/App.scss";
import TestApi from "./TestApi";

export default function App() {
  return (
    <div id="page">
      <div>Chikopedia</div>
      <TestApi />
    </div>
  );
}