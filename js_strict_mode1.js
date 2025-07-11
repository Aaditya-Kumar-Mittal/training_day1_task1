/*

"use strict"; Defines that JavaScript code should be executed in "strict mode".

The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

With strict mode, you can not, for example, use undeclared variables.

You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.

Strict mode makes it easier to write "secure" JavaScript.

Strict mode changes previously accepted "bad syntax" into real errors.

As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.

In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

The "use strict" directive is only recognized at the beginning of a script or a function.
*/

"use strict";

// x = 3.14;

// console.log(x);

// myFunction();

// function myFunction() {
//   y = 3.14;   // This will also cause an error because y is not declared
// }
