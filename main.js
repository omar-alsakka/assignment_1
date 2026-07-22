// 1 - Convert the string "123" to a number and add 7. (0.5 Grade)
const numberString = "123";
const parsedNumber = numberString * 1;
const finalResult = parsedNumber + 7;
console.log(finalResult);
// or
const numberStr = "123";
const totalSum = 7 + numberStr * 1;
console.log(totalSum);
// 2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
const inputValue = 0;
if (!inputValue) {
  console.log("Invalid");
}
// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
for (let number = 1; number <= 10; number++) {
  if (number % 2 === 0) {
    continue;
  }
  console.log(number);
}
// 4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);
// 5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray);
// 6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday). (0.5 Grade)
function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid day number";
  }
}
console.log(getDayOfWeek(3));
// 7. Create an array of strings and return their lengths using map method (0.5 Grade)
const strings = ["apple", "banana", "cherry"];
const lengths = strings.map((str) => str.length);
console.log(lengths);
// 8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
function isDivisibleBy3And5(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Divisible by both";
  }
  return "Not divisible by both";
}
console.log(isDivisibleBy3And5(15));
// 9. Write a function using arrow syntax to return the square of a number (0.5 Grade)
const square = (num) => num * num;
console.log(square(5));

// 10.Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
function formatPerson({ name, age }) {
  return `${name} is ${age} years old`;
}
const person = { name: "John", age: 25 };
console.log(formatPerson(person));
// 11.Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5));
// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
function delayedSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}

// 13. Write a function to find the largest number in an array. (0.5 Grade)
function findLargestNumber(arr) {
  return Math.max(...arr);
}
// 14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
function getObjectKeys(obj) {
  return Object.keys(obj);
}
// 15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
function splitWords(text) {
  return text.split(" ");
}
let myString = "syria is the best country in the world";
let result = splitWords(myString);
console.log(result);

// Essay Questions

// 1. What is the difference between forEach and for...of? When would you use each? (0.5 Grade)
// forEach: An array method that executes a provided callback function once for each array element. It cannot be stopped or broken out of using break or continue

// for...of: A loop statement that iterates over iterable objects (Arrays, Strings, Maps, Sets, etc.). It supports control flow statements like break, continue, and handles async/await smoothly

// When to use: Use forEach for simple array iterations when you don't need to break early. Use for...of when working with any iterable object, when you need to use break/continue, or when working with asynchronous code

// 2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples. (0.5 Grade)
// Hoisting: JavaScript's default behavior of moving function and variable declarations to the top of their containing scope before code execution.

// Temporal Dead Zone (TDZ): The period between entering a scope and the actual declaration of a let or const variable. Accessing the variable during this time throws a ReferenceError.

console.log(a); // Output: undefined
var a = 5;

console.log(b); // Throws ReferenceError (TDZ)
let b = 10;

// 3. What are the main differences between == and ===? (0.5 Grade)
// == take type and === take value and type both.

// 4. Explain how try-catch works and why it is important in async operations. (0.5 Grade)

// The try block runs the code that might have an error.
// If an error happens, it stops the try block and goes to the catch block to handle it so the app doesn't crash.

// Importance in async operations:
// Async actions (like fetching data) can fail if there is a connection problem or bad data.
// Using try-catch helps us catch those errors safely and show a message to the user instead of breaking the code.

async function loadData() {
  try {
    let result = await checkUser(0); // If this fails, catch will handle it
    console.log(result);
  } catch (error) {
    console.log("Something went wrong:", error.message);
  }
}

// 5. What’s the difference between type conversion and coercion? Provide examples of each. (0.5 Grade)

// the difference between type conversion and coercion is : conversion change the type variable or value into a number
// coercion same conversion but doing automatic by js engine

// example for conversion :
// let x = '123';
// let y = Number(x)

// example for coercion :
// let a = ('9' + '3') // = 93
// or
// let z = ('3'-'2') // = 1
