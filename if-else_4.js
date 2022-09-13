// Elliot Vadi, TE20D
// Subject: Program takes three numbers and outputs the biggest number.

var ps = require("prompt-sync");
var prompt = ps();

console.log("You'll be asked to input three (3) numbers. The program will then output them in order of size.");

// The numbers to take as input
let num1 = prompt("Number 1: ");
let num2 = prompt("Number 2: ");
let num3 = prompt("Number 3: ");

const numbers = [num1, num2, num3];

numbers.sort(function(a, b){return a + b});

console.log(numbers[0]);
