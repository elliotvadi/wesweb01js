// Elliot Vadi, TE20D
// Subject: Check whether or not a given year is a leap year.

var ps = require("prompt-sync");
var prompt = ps();

console.log("Please enter a year.");
let y = prompt("Year: ");

if (y % 400 == 0) {
    console.log(y + " is a leap year.");
}
else if (y % 100 == 0) {
    console.log(y + " is not a leap year.");
}
else if (y % 4 == 0) {
    console.log(y + " is a leap year.");
}
else {
    console.log(y + " is not a leap year.");
}
