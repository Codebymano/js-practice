//Day 5 — Challenges
// Challenge 1 — Basic Higher-Order Function
function calculate(a, b, operation) {
  return operation(a, b);
}

let add = (x, y) => x + y;
let multiply = (x, y) => x * y;

console.log(calculate(5, 3, add));      
console.log(calculate(5, 3, multiply)); 

// Challenge 2 - Simple Counter with Closure