// Loops allow you to execute code repeatedly based on a condition.

// Task 1: Write a for loop to print numbers from 1 to 5.

// Task 2: Create a while loop that prints the numbers 10 to 15.

// Task 3. Write for-loop that loops through the array `numbers`
// compare every number with the variable `lowest`.
// If the number is lower than `lowest` update `lowest` to the current number
// Use console.log to print `lowest`.
//const numbers = [9, 10, 17, 34, 2, 4, 100];
//let lowest = numbers[0];

// Task 4, Write a function `getLowest` that takes an array of numbers as
// input and returns the lowest number.



// Task 1: Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
  
  // Task 2: Print numbers from 10 to 15 using a while loop
  let num = 10;
  while (num <= 15) {
    console.log(num);
    num++;
  }
  
  // Task 3: Find the lowest number in the array
  const numbers = [9, 10, 17, 34, 2, 4, 100];
  let lowest = numbers[0];
  
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < lowest) {
      lowest = numbers[i];
    }
  }
  console.log(lowest); 
  
  // Task 4: Function to get the lowest number
  function getLowest(arr) {
    let lowest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < lowest) {
        lowest = arr[i];
      }
    }
    return lowest;
  }
  
  
  const lowestInNumbers = getLowest(numbers);
  console.log(lowestInNumbers); 
  