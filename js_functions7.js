/*

With the bind() method, an object can borrow a method from another object.

The example below creates 2 objects (person and member).

*/

var person = {
  firstName: "John",
  lastName: "Doe",
  fullname: function () {
    return this.firstName + " " + this.lastName;
  },
};

var person1 = {
  firstName: "Aaditya",
  lastName: "Mittal",
};

var fullname = person.fullname.bind(person1);
console.log(fullname());
