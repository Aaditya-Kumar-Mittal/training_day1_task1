var fun1 = function (a, b) {
  return a + b;
}; // A type of anonymous function as it has no name

var result = fun1(5, 6);

console.log(result);

// Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

// Hoisting is JavaScript's default behaviour of moving declarations to the top of the current scope.
// Hoisting applies to variable declarations and to function declarations.

myFunction(5);

function myFunction(n) {
  var sqaure = n * n;

  console.log(sqaure);
}
