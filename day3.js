// Day 3 Challenges
// Arrays methods

let prices = [20,30,40,50,60];
prices.map(p =>  p*2);
prices.filter(p => p>40);
prices.reduce((total, p)=> total + p , 0);
prices.find(p => p>40);

// Challenge 1 = Cart Prices Doubled
let cartPrices = [15, 20, 45, 10];
l