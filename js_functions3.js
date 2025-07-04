// About Arrow Functions

/*
1. Arrow functions donot have their own this. They are not well suited for defining object methods.
2. Arrow functions are not hoisted. They must be defined before they are used.
3. Arrow functions are not supported in IE11 or earlier.
*/

/*
1. Javascript function no check on parameter values.
2. Parameters are the names listed in the function definition.
3. Arguements are the real values passed to (and received by) the function.
4. No data types need to be specified for function parameters.
5. No type checks, no checks on number of arguments received.
6. If a function is called with missing arguments (less than declared), the missing values are set to undefined.
7. In ES5, default parameter values are not natively supported.
*/

// How to use default parameters in for ES5

function greet(name) {
  name = typeof name !== "undefined" ? name : "Guest";
  console.log(`Hello ${name}`);
}

greet();

greet("Aaditya Kumar Mittal!");

// Rest Parameters

// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array

function sum(...args) {
  let sum = 0;

  for (var arg of args) sum += arg;

  return sum;
}

var totalSum = sum(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(totalSum);

// Argument Object of Function

// The argument object contains an array of the arguments used when the function was called (invoked).

function findMax() {
  var maxValue = -Infinity;

  for (var index = 0; index < arguments.length; index++) {
    if (arguments[index] > maxValue) maxValue = arguments[index];
  }

  return maxValue;
}

var forMax = findMax(1, 2, 3, 4, 5, 56, 7, 8);

console.log(forMax);

/*
The parameters, in a function call, are the function's arguments.

JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.

If a function changes an argument's value, it does not change the parameter's original value.

Changes to arguments are not visible (reflected) outside the function.

In JavaScript, object references are values.

Because of this, objects will behave like they are passed by reference:

If a function changes an object property, it changes the original value.

Changes to object properties are visible (reflected) outside the function.
*/

