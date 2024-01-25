import React from "react";
import { IStatisticsTableProps } from "../../types";
import "./statisticsTable.css";

// Functional component representing a statistics table
const StatisticsTable = (props: IStatisticsTableProps) => {
  const { data, calculateStatistics, title } = props;

  // Creating a Set to obtain unique values of the 'Alcohol' property
  const setData = new Set(data.map((entry) => entry.Alcohol));
  const uniqueAlcoholValues = [...setData];

  return (
    <div className="statistics-table-container">
      {/* Displaying the title of the statistics table */}
      <h3>{title}</h3>
      <table className="statistics-table">
        <tbody>
          <tr>
            <th>Measures</th>
            {uniqueAlcoholValues.map((group) => (
              <th key={group}>Class {group}</th>
            ))}
          </tr>
          <tr>
            <td>{title} Mean</td>
            {uniqueAlcoholValues.map((group) => (
              <td key={group}>
                {/* Calculating and displaying Mean values */}
                {calculateStatistics(data, group).mean.toFixed(2)}
              </td>
            ))}
          </tr>
          <tr>
            <td>{title} Median</td>
            {uniqueAlcoholValues.map((group) => (
              <td key={group}>
                {/* Calculating and displaying Median values */}
                {calculateStatistics(data, group).median.toFixed(2)}
              </td>
            ))}
          </tr>
          <tr>
            <td>{title} Mode</td>
            {uniqueAlcoholValues.map((group) => (
              <td key={group}>
                {/* Calculating and displaying Mode values */}
                {calculateStatistics(data, group).mode.join(", ")}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatisticsTable;
