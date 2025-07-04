// Range Error

let num = 1;

try {
  console.log(num.toPrecision(500));
} catch (error) {
  console.log("Error Occurred :", error.name);
}

let x = 5;

try {
  x = y + 5;

  console.log(x);
} catch (error) {
  console.log("Error Occurred :", error.name);
}

try {
  eval("alert('Hello)");
} catch (error) {
  console.log("Error Occurred :", error.name);
}
