
            console.log("mango");
            console.log(214);

            var int=3;
            var int=5;
            console.log(int);

            let bet=4;
            bet=5;
            console.log(bet);

            const givenname="meghana";
            const id= 2345234
            const branch= "CSM";
            console.log(givenname);
            //printing all the details(Q1)

            function detailprinter(name,id,branch){
                return {
                    name: name,
                    id: id,
                    branch: branch
                }
            

            }

            let details = detailprinter(givenname, id, branch);
            console.log(details);

            //write a function to take name and score of a player, perform operation like +-*/
      
 const named = "alex";
const score = 60;

function player(name, score) {
 function scoreadd(value) {
    return score + value;
  }

  function scoresub(value) {
    return score - value;
  }

  function scorediv(value) {
    if (value === 0) return "Error: Division by zero";
    return score / value;
  }

  function scoremul(value) {
    return score * value;
  }

  return {
    name: name,
    score: score,
    scoreadd: scoreadd,
    scoresub: scoresub,
    scorediv: scorediv,
    scoremul: scoremul
  };
}

let game = player(named, score);

console.log(game.name); 
console.log(game.scoreadd(10)); 
console.log(game.scoresub(20)); 
console.log(game.scorediv(2));  
console.log(game.scoremul(3));  

            //area calculator using length and width of rectangle

            const length= 3;
            const width= 4;
            function areacalculator(length, width){
                return length*width;
            }
            let area= areacalculator(length,width);
            console.log(area)
            // a function to find the factorial of a number
            function factorial(n){
                let result= 1;
                for(i=2; i<=n; i++){
                    result*=i;
                }
                return result;
            }

          
            console.log(factorial(5))


            //develop a calculator for +-*/ with java script
            
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return "Invalid operator";
  }
}
console.log(calculate(10, 5, '+')); 
console.log(calculate(10, 5, '-')); 
console.log(calculate(10, 5, '*')); 
console.log(calculate(10, 0, '/'));
            //write a function to calculate compound intrest
            
            function calculateCompoundInterest(principal, rate, time, frequency) {
            const r = rate / 100;
            const amount = principal * Math.pow((1 + r / frequency), frequency * time);
            const interest = amount - principal;
 return {
    totalAmount: amount.toFixed(2),
    interestEarned: interest.toFixed(2)
  };
}
const result = calculateCompoundInterest(10000, 8, 3, 4); 
console.log("Total Amount:", result.totalAmount);      
console.log("Interest Earned:", result.interestEarned); 
    
   //write a program for grading system, 75 more is a, 60 b,pass c,90 o,less than 50 fail     
  const marks= 58;
   if(marks>=90){
    console.log("o");
   } 
   if(marks>=75){
    console.log("a");
   }
   if(marks>=60){
    console.log("b");
   }
if(marks>=50){
    console.log("c");
   }
else{
  console.log("fail");
}
//a person is travelling from a to b at a speed of 30kmph, speed will be doubled for every 10 mins, 
// calculate the distance if max speed is 120kmph and it travels for 96 minutes

let speed = 30; 
let maxSpeed = 120;
let time = 96; 
let interval = 10; 
let distance = 0;

for (let t = 0; t < time; t += interval) {
  distance += (speed * interval) / 60; 
  speed = Math.min(speed * 2, maxSpeed); 
}

console.log("Total distance traveled:", distance, "km");

//basic pay of an auto is 30 rupees for 4 km, for the next 10km, the price is 10 rupees for km,
// for the next 15km,the price is 15 rupees, if kms are more, price is 20 rupees.
// user travelled 19.5km, what will be the price?
let speed = 30; 
let total travelled = 19.5;
let price = 15; 
let interval = 10; 
let distance = 4;

for (let t = 0; t < time; t += interval) {
  distance += (speed * interval) / 60; 
  speed = Math.min(speed * 2, maxSpeed); 
}

console.log("Total cost", cost, "rupees");










let distance = 19.5;
let fare = 0;
if(distance<=4){
  fare = 30;
}
else if (distance<=9){
  fare = 30 + (distance - 4)*10;
}
else if (distance<=19){
  fare = 30 + (5*10)+(distance - 9)*15;
}
else{
  fare = 30 + (5*10) + (10*15) + (distance -19)*20;
}
console.log("total travelled distance"+distance+"km");
console.log("total fare"+fare);

