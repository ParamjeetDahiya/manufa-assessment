import { IStatisticsResult, WineItemType } from "../types";

// Function to calculate the mean of an array of numbers
const calculateMean = (values: number[]): number => {
  console.log(
    values,
    values.reduce((sum, value) => sum + value, 0) / values.length
  );

  return values.reduce((sum, value) => sum + value, 0) / values.length;
};

// Function to calculate the median of an array of numbers
const calculateMedian = (values: number[]): number => {
  const sortedValues = values.slice().sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedValues.length / 2);
  return sortedValues.length % 2 === 0
    ? (sortedValues[middleIndex - 1] + sortedValues[middleIndex]) / 2
    : sortedValues[middleIndex];
};

// Function to calculate the mode of an array of numbers
const calculateMode = (values: number[]): number[] => {
  const countMap = new Map<number, number>();
  values.forEach((value) => {
    countMap.set(value, (countMap.get(value) || 0) + 1);
  });

  const maxCount = Math.max(...countMap.values());
  const modeArray = [...countMap.entries()].filter(
    ([_, count]) => count === maxCount
  );

  return modeArray.map(([value]) => value);
};

// Function to calculate statistics related to the "Flavanoids" property
const calculateFlavanoidsStatistics = (
  data: WineItemType[],
  groupName: number
): IStatisticsResult => {
  const groupData = data.filter((entry) => entry.Alcohol === groupName);
  const propertyValues = groupData.map((entry) => Number(entry.Flavanoids));

  if (propertyValues.length === 0) {
    return {
      mean: 0,
      median: 0,
      mode: [],
    };
  }

  return {
    mean: calculateMean(propertyValues),
    median: calculateMedian(propertyValues),
    mode: calculateMode(propertyValues),
  };
};

// Function to calculate statistics related to the "Gamma" property
const calculateGammaStatistics = (
  data: WineItemType[],
  groupName: number
): IStatisticsResult => {
  const groupData = data.filter((entry) => entry.Alcohol === groupName);
  const propertyValues = groupData.map((entry) => {
    // Calculating gamma based on specific formula
    const gamma = (Number(entry.Ash) * Number(entry.Hue)) / entry.Magnesium;
    return Number(gamma.toFixed(3));
  });

  if (propertyValues.length === 0) {
    return {
      mean: 0,
      median: 0,
      mode: [],
    };
  }

  return {
    mean: calculateMean(propertyValues),
    median: calculateMedian(propertyValues),
    mode: calculateMode(propertyValues),
  };
};

export { calculateFlavanoidsStatistics, calculateGammaStatistics };
