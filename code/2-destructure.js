// Destructuring allows you to unpack values from arrays or properties from
// objects into distinct variables.

// Task 1: Use destructuring to assign the values "John" and "Doe" from the
// `fullName` array into separate variables `firstName` and `lastName`.
//const fullName = ["John", "Doe"];

// Task 2: Destructure the `user` object below to create variables `name`
// and `age` using object destructuring.
//const user = {
  //name: "Alice",
  //age: 25,
//};

// Task 3: Print `firstName`, `lastName`, `name`, and `age` using console.log.

// Task 4: Write a function called `getFullName` that takes an object with properties
// `firstName` and `lastName`, and returns a string that combines them in the format
// "FirstName LastName". The function has to use destructuring.

// Task 5: Call the `getFullName` function with the `person` object and print
// the result using console.log.
//const person = {
  //firstName: "Jane",
  //lastName: "Smith",
//};


// Task 1: Destructuring fullName array
const fullName = ["John", "Doe"];
const [firstName, lastName] = fullName;

// Task 2: Destructuring user object
const user = {
  name: "Alice",
  age: 25,
};
const { name, age } = user;

// Task 3: Print variables
console.log(firstName, lastName, name, age); 

// Task 4: Function to get full name
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

// Task 5: Call getFullName function
const person = {
  firstName: "Jane",
  lastName: "Smith",
};
const fullNameResult = getFullName(person);
console.log(fullNameResult); 
