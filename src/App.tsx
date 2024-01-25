import React from "react";

import StatisticsTable from "./components/statistics-table/StatisticsTable";

import wineData from "./data/wine.json";
import {
  calculateFlavanoidsStatistics,
  calculateGammaStatistics,
} from "./utilities/helper";

import "./App.css";

// The main App component
const App = () => {
  return (
    <div className="container">
      {/* First StatisticsTable component for Flavanoids */}
      <StatisticsTable
        calculateStatistics={calculateFlavanoidsStatistics}
        title="Flavanoids"
        data={wineData}
      />
      
      {/* Second StatisticsTable component for Gamma */}
      <StatisticsTable
        calculateStatistics={calculateGammaStatistics}
        title="Gamma"
        data={wineData}
      />
    </div>
  );
};

export default App;
