// The spread operator allows you to expand elements of an array or object into another array or object.
// Example: `const newArray = [...oldArray]` creates a copy of oldArray.

//const fruits = ["Apple", "Banana", "Orange"];

// Task 1: Use the spread operator to create a new array called `moreFruits` and add "Mango"
// and "Pineapple" to the end of the `fruits` array.

// Task 2: Use the spread operator to create a new array called `totalFruits` that starts with
// the `startingFruits` array and ends with the `moreFruits` array. Use console.log to print `totalFruits`.
//const startingFruits = ["Pear", "Melon", "Kiwi"];

// Task 3: Use the spread operator to create a new object called `updatedCar` and change the year to 2022.
// Use console.log to print `updatedCar`.
//const car = {
 // make: "Toyota",
  //model: "Corolla",
  //year: 2020,
//};

// Task 4: Use the spread operator to create a new object called `coloredCar`
// add a new property `color` with the value "Red" to the `updatedCar` object.
// Use console.log to print `coloredCar`.

// Task 5: Create a function called `updateCarModel` that takes an object and a new model as arguments
// and returns a new object with the updated model using the spread operator.

// Task 6: Use the `updateCarModel` function to update the model of `coloredCar` to "Camry" and store
// it in a variable called `newModelCar`. Use console.log to print `newModelCar`.


// Original fruits array
const fruits = ["Apple", "Banana", "Orange"];

// Task 1: Create moreFruits array
const moreFruits = [...fruits, "Mango", "Pineapple"];

// Task 2: Create totalFruits array
const startingFruits = ["Pear", "Melon", "Kiwi"];
const totalFruits = [...startingFruits, ...moreFruits];
console.log(totalFruits); // Print totalFruits

// Task 3: Create updatedCar object
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
const updatedCar = { ...car, year: 2022 };
console.log(updatedCar); 

// Task 4: Create coloredCar object
const coloredCar = { ...updatedCar, color: "Red" };
console.log(coloredCar); 

// Task 5: Function to update car model
function updateCarModel(car, newModel) {
  return { ...car, model: newModel };
}

// Task 6: Update model of coloredCar
const newModelCar = updateCarModel(coloredCar, "Camry");
console.log(newModelCar); 
