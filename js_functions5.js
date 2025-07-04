/*

With the call() method, you can write a method that can be used on different objects.

The call() method is a predefined JavaScript method.

It can be used to invoke (call) a method with an object as an argument (parameter).

*/

var person = {
  fullname: function () {
    return this.firstName + " " + this.lastName;
  },
};

var person1 = {
  firstName: "Aaditya",
  lastName: "Mittal",
};

var log1 = person.fullname.call(person1);
console.log(log1);

// call method can also accept arguments

var person2 = {
  fullname: function (city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  },
};

var log2 = person2.fullname.call(person1, "Ambala", "India");

console.log(log2);
