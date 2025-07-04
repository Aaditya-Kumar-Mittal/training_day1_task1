/*

this keyword

- for object, this refers to the current object.
- alone, this refers to global object.
- in strict mode, this is undefined.
- in event, this refers to element that received the event.
- Methods like call(), apply(), and bind() can refer this to any object.
- this is not a variable. It is a keywword. You cannot change the value of this.

*/

function myFunction() {
  return this;
}
var x = myFunction();

// console.log(x);

var myObject = {
  firstName: "Aaditya",
  lastName: "Mittal",

  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(myObject.fullName());

// Here this points to current object i.e. myObject

function myFunction2(arg1, arg2) {
  this.firstName = arg1;

  this.lastName = arg2;
}

var myObject2 = new myFunction2("Aaditya", "Mittal");

console.log(myObject2);

// The this keyword in the constructor does not have a value.
// It points to myObject2 when the constructor is called a new object is created.
