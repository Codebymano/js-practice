// Day 3 Challenges
// Arrays methods

let prices = [20,30,40,50,60];
prices.map(p =>  p*2);
prices.filter(p => p>40);
prices.reduce((total, p)=> total + p , 0);
prices.find(p => p>40);

// Challenge 1 = Cart Prices Doubled
let cartPrices = [15, 20, 45, 10];
let doubledPrices = cartPrices.map(p => p*2);
console.log(doubledPrices);

// Challenge 2 = Filter In Stock Products
let products = [
  { name: "Shirt", stock: 5 },
  { name: "Shoes", stock: 0 },
  { name: "Hat", stock: 3 },
  { name: "Socks", stock: 0 }
];
let inStock = products.filter(product => product.stock > 0);
console.log(inStock);

// Challenge 3 = Total Cart Value
let cartPrices = [15, 20, 45, 10];
let total = cartPrices.reduce((sum, p) => total + p, 0);
console.log(total);

// Challenge 4 = Find First Expensive Item
let prices = [10, 25, 45, 60, 15];
let expensiveItem = prices.find(item =>  item> 30);
console.log(expensiveItem);

// Challenge 5 = Apply Tax to Prices
let prices = [50, 100, 25, 80];
let taxPrices = prices.map(p => p + (p*0.08));
console.log(taxPrices);

// Challenge 6 = Filter Students Who Passed
let students = [
  { name: "Ali", score: 45 },
  { name: "Sara", score: 78 },
  { name: "Bilal", score: 60 },
  { name: "Zara", score: 30 }
];
let passedStudents = students.filter(s=> s.score >= 60);
console.log(passedStudents);

// Challenge 7 = Calculate the Average
let orders = [45, 60, 30, 90, 15];
let sum = orders.reduce((total, o)=> sum + o, 0);
let average = sum / orders.length;
console.log(average);

// Challenge 8 = Find First Out of Stock Product
let products = [
  { name: "Shirt", stock: 5 },
  { name: "Shoes", stock: 0 },
  { name: "Hat", stock: 3 }
];
let soldOut = products.find(p => p.stock===0);
console.log(soldOut);

// Challenge 9 = Find Two Methods
let prices = [10, 25, 15, 40, 8, 60];
let doubledResult = prices.filter(p => p>=20).map(p => p*2);
console.log(doubledResult);

// Challenge 10 = Cart Summary (map,filter,reduce)
let cart = [
  { name: "Pen", price: 2, quantity: 1 },
  { name: "Notebook", price: 5, quantity: 3 },
  { name: "Eraser", price: 1, quantity: 1 },
  { name: "Bag", price: 20, quantity: 2 }
];
let totalCost = cart.filter(items => items.quantity >=2).map(items => items.price * items.quantity).reduce((total,p)=> total + p, 0);
console.log(totalCost);
