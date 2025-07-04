/*

With the apply() method, you can write a method that can be used on different objects.

The call() method takes arguments separately.

The apply() method takes arguments as an array.

In JavaScript strict mode, if the first argument of the apply() method is not an object, it becomes the owner (object) of the invoked function. In "non-strict" mode, it becomes the global object.

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

var log1 = person.fullname.apply(person1);
console.log(log1);

var person2 = {
  fullname: function (city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  },
};

var log2 = person2.fullname.apply(person1, ["Ambala", "India"]);

console.log(log2);

// Use of apply

console.log(Math.max.apply(" ", [1, 2, 3, 4, 5, 6]));
console.log(Math.max.apply(null, [1, 2, 3, 4, 5, 6]));
