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
let lowercase = firstname.toLowerCase();
let fisrtLetter = lastname[0];
let username = lowercase + fisrtLetter.toLowerCase();
console.log(username);

// Swap Without a Third Variable
let a = 5;
let b = 10;
a = a + b; //15
b = a - b; // 5
a = a - b; // 10

// Odd One Out
console.log(1 + "1" + 1); // 111
console.log(1 + 1 + "1"); // 21
console.log(true + true); // 2
console.log("5" * "2"); // 10
console.log([] + []); // ""
console.log([] + {}); // "[object Object]"

// Tip Calculator
let bill = 47.856;
let tip = bill * 0.15;
let total = bill + tip;
let roundedbill = total.toFixed(2);
console.log(Number(roundedbill));

// Palindromes
let num = 121;
let string = num.toString()
let reversed = string.split("").reverse().join("");
let isPalindrome = string === reversed;
console.log(isPalindrome)
