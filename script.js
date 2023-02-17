"use strict";

// 17/02/2023
// Write a function that converts input string to uppercase

const makeUpperCase = (input) => {
  console.log(input.toUpperCase());
};
makeUpperCase("blabla");

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.
const findAverage = (arr) => {
  const newMeaning = arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  console.log(arr.length === 0 ? 0 : newMeaning / arr.length);
};
findAverage([]);
