// Day 2 Challenges
// Challenge 1 = Fizzbuzz
for(let i = 1; i<=30 ; i++){
    if(i%3 === 0 && i%5 === 0){
        console.log("FizzBuzz")
    }else if(i%3 === 0){
        console.log("Fizz")
    }else if(i%5 === 0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}


// Challenge 2 = Grade Calculate
let score = 76;
if(score >= 90){
    console.log("A")
}else if(score >= 80){
    console.log("B")
}else if(score >=70){
    console.log("C")
}else if(score >=60){
    console.log("D")
}else{
    console.log("F")
};

// Challenge 3 = Sum of Multiples
let runningtotal = 0;
for(let i = 0; i<=100;i++){
 if(i%3 === 0 || i%5 === 0){
    runningtotal += i;
 }
};

console.log(runningtotal);

// Challenge 4 = Countdown with a Twist

for(let i = 10; i>=1; i--){
    if(i%3 !== 0){
        console.log(i)
    }
};

// Challenge 5 = Leap Year Checker
let year = 2024;
if(year% 4 === 0 && year% 100 === 0){
    console.log(true)
}else if(year % 400 === 0){
    console.log(false)
};


// Challenge 6 = Login Validator
let username = "ali"
let password = "pass123"
if(username.length === 4 && password.length === 8){
    console.log("Username and password too short")
}else if(username.length === 4){
    console.log("username too short")
}else if(password.length === 8){
    console.log("password too short")
}else{
    console.log("Login Successfull")
};


// Challenge 7 = Shopping Cart Discount
let cartTotal = 120;
let discountedPrice;
if(cartTotal >= 100 ){
    discountedPrice = cartTotal - (cartTotal * 0.20)
}else if(cartTotal >=50){
    discountedPrice = cartTotal -(cartTotal * 0.10)
}else{
    discountedPrice = cartTotal;
};
console.log(discountedPrice);


// Challenge 8 = ATM Withdrawal Checker 
let balance = 5000;
let withdrawAmount = 250;
if(withdrawAmount <= balance && withdrawAmount > 0 && withdrawAmount % 100 === 0){
    console.log("Valid")
}else{
    console.log("Not Valid")
};