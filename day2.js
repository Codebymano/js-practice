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