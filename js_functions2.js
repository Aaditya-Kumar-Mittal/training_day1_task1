// Function expressions can be made "self-invoking".

// A self-invoking expression is invoked (started) automatically, without being called.

// Function expressions will execute automatically if the expression is followed by ().

// You cannot self-invoke a function declaration.

// An anonymous immediately invoking function / self executing anonymous functions
(function () {
  console.log("Hello from Aaditya Kumar Mittal!");
})();

function helloFunction(name) {
  console.log("Hello " + name);
}

console.log(typeof helloFunction);

// JS functions have both properties and methods. Hence, they are similar to objects.

function myFunction(a, b, c, d, e, f) {
  console.log(arguments.length);
}

myFunction(1, 2, 3, 4, 5, 6);

// A function defined as the property of an object, is called a method to the object.

// A function designed to create new objects, is called an object constructor.
