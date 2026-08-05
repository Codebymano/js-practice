// Day 4 Challenges Objects and Destructuring
// Challenge 1 = User Profile Card


let user = { name: "Manoo", email: "mano@example.com", age: 22 };
let { name , email} = user;
console.log(`Name : ${name}, Email : ${email}`);

// Challenge 2 — Update a Product Price (without mutating the original)
let product = { name: "Shoes", price: 100, inStock: true };
let updated = { ...product, price : 80 ,};
console.log(updated);

// Challenge 3 - Nested Address Extraction
let user = {
  name: "Ali",
  address: { city: "Karachi", country: "Pakistan", zip: "75500" }
};
let {address : {city, country}} = user;
console.log(city);
console.log(country);

//  Challenge 4 — Destructuring with a default value
let settings = { theme: "dark" };
let { theme , fontSize= 16} = settings;
console.log(fontSize);
console.log(theme);

//Challenge 5 (function parameter destructuring)
function showProduct({name, product}){
 console.log(`Name : ${name}, Product : ${product}`)
};
showProduct({name : "Shoes", product = "100"});

//Challenge 6 = Rest Operator Destructing
let product = { name: "Shoes", price: 100, color: "black", size: 9 };
let { name , ...rest} = product;
console.log(name);
console.log(rest);
