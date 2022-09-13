// Elliot Vadi, TE20D
// Syfte: Se om givet tal är innanför eller utanför given intervall.

console.log("Input two numbers (intervals)");
var inter1 = window.prompt("Number 1: ");
var inter2 = window.prompt("Number 2: ");
console.log("Now enter a number. The program will check if said number is inside or outside of your given interval.");
var num = window.prompt("Number: ");

if (num <= inter2 && num >= inter1) {
    console.log("Inside interval!");
}
else {
    console.log("Outside interval!");
}