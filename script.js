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

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// vowels a o u i e

const findVowels = (str) => {
  let vowels = /[aeiou]/gi;
  console.log(str.replace(vowels, ""));
};
const findVowels2 = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!"aeiouAEIOU".includes(char)) {
      result += char;
    }
  }
  console.log(result);
};
findVowels("blabla bleeee");
findVowels2("blabla bleee");

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

const getStringFromArr = (arr) => {
  console.log(arr.join(" "));
};
getStringFromArr(["bla", "blue", "blee"]);

// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

const countBy = (a, b) => {
  let lastNumber = a * b;
  let result = [];
  for (let i = a; i <= lastNumber; i++) {
    if (i % a === 0) {
      result.push(i);
    }
  }
  console.log(result);
};
countBy(2, 5);

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const returnMultiply = (arr) => {
  const Array = arr.reduce((acc, curr) => {
    return acc * curr;
  }, 1);
  console.log(Array);
};
returnMultiply([4, 1, 1, 1, 4]);

// dragons slayer

const dragonSlayer = (bullet, dragons) => {
  console.log(bullet >= dragons * 2 ? true : false);
};
dragonSlayer(100, 40);

// Even or Odd ??

const EvenOrOdd = (number) => {
  console.log(number % 2 === 0 ? "Even" : "Odd");
};
EvenOrOdd(10);

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

const seriesSum = (n) => {
  if (n === 0) {
    return "0.00";
  }
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + 3 * i);
  }
  console.log(sum.toFixed(2));
};
seriesSum(1);

// return 2 minimum number from array and sum them

const sumTwoSmallest = (numbers) => {
  numbers.sort((a, b) => a - b);
  console.log(numbers[0] + numbers[1]);
};
sumTwoSmallest([5, 5, 4, 10]);
// You get an array of numbers, return the sum of all of the positives ones.
const sumPositives = (arr) => {
  let result = [];
  arr.forEach((val) => {
    return val > 0 ? result.push(val) : null;
  });
  const sum = result.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);
};
sumPositives([1, -3, 4, -5, 3]);

// calculate BMI = weigth / height2

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

const calculateBMI = (weight, height) => {
  const BMI = weight / Math.pow(height, 2);
  if (BMI <= 18.5) {
    return "Underweight";
  } else if (BMI <= 25) {
    return "Normal";
  } else if (BMI <= 30) {
    return "Overweight";
  } else if (BMI > 30) {
    return "Obese";
  }
};

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

const squareSum = (arr) => {
  const sum = arr.reduce((acc, curr) => acc + Math.pow(curr, 2), 0);
  console.log(sum);
};
squareSum([1, 2, 2]);

// all first letter toupperCase
const firstWordConverter = (str) => {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
  }
  return words.join(" ");
};
