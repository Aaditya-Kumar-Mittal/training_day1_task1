/*

*/

function Person(first, last, age, eyeColor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyeColor;
}

var myFather = new Person("John", "Doe", 50, "blue");

console.log(myFather);

// Cannot add a new property to an existing object constructor

Person.nationality = "English";

console.log(myFather);

// One must add it to the object constructor

// Javascript objects inherit their properties and methods from a prototype

Person.prototype.nationality = "English";

Person.prototype.fullName = function () {
  return this.firstName+ " " + this.lastName;
};

var myMother = new Person("Sally","Doe",50, "hazel");

console.log(myMother.fullName());

console.log(myMother.nationality);
