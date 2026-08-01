// Temperature conversion from Celcius to Fahrenheit

let celsius = 30;
let fahrenheit = celsius * 9/5 + 32;
console.log(fahrenheit + "°F");

// Budget Checker
let budget = 1000;
let rent = 350;
let food = 120;
let remaining = budget - rent - food;
console.log(remaining >= 0);

// Challenge 3 - Type Detective
console.log(typeof "42");
console.log(typeof 42);
console.log("5" + 5);
console.log("5" - 5);
console.log(5 === "5");
console.log(5 == "5");

// Challenge 4 - Username Genator
let firstname = "Mano";
let lastname = "Nadeem";
let lowercase = firstname.toLowerCase("");
let fisrtletter = lastname[0];
let username = lowercase + fisrtletter;
console.log(username);

