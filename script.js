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
