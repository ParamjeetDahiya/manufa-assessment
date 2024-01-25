import wineData from "./data/wine.json";

export type WineItemType = (typeof wineData)[0];

export interface IStatisticsResult {
  mean: number;
  mode: number[];
  median: number;
}

export interface IStatisticsTableProps {
  data: WineItemType[];
  title: string;
  calculateStatistics: (
    data: WineItemType[],
    groupName: number
  ) => IStatisticsResult;
}
