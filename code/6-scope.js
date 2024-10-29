// JavaScript scope determines the accessibility of variables within different parts of the code.

// Task 1: Declare a variable called `globalVar` with the value "I am global".

// Task 2: Create a function called `testScope` that declares a variable called
// `localVar` with the value "I am local".

// Task 3: Inside `testScope`, print both `globalVar` and `localVar`.

// Task 4: Outside of the function, try to print `localVar` and observe the result.


// Task 1: Declare a global variable
const globalVar = "I am global";

// Task 2: Create a function to test scope
function testScope() {
  const localVar = "I am local";

  // Task 3: Print both globalVar and localVar
  console.log(globalVar); 
  console.log(localVar); 
}


testScope(); 

// Task 4: Try to print localVar outside of the function
try {
  console.log(localVar); 
} catch (error) {
  console.log("Error:", error.message); 
}
