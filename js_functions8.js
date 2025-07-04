/*

The local scope or The global scope

Global variables can be made local (private) with closures.

Closures makes it possible for a function to have "private" variables.

A closure is a function that has access to the parent scope, after the parent function has closed.

Closures has historically been used to:

Create private variables
Preserve state between function calls
Simulate block-scoping before let and const existed
Implement certain design patterns like currying and memoization

*/


// Initiate counter
let counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

// Log counter
console.log(counter);