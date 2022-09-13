// Elliot Vadi, TE20D
// Subject: Check the number of days in a given month of a given year

console.log("Please enter a year and a month.");
let y = prompt("Year: ");
console.log("Valid months:\nJAN\nFEB\nMAR\nAPR\nMAY\nJUN\nJUL\nAUG\nSEP\nOCT\nNOV\nDEC");
let m = prompt("Month: ");

// Month, number of days
let jannum = 31;
let febnum = 28;
let feb_leapnum = 29;
let marnum = 31;
let aprnum = 30;
let maynum = 31;
let junnum = 30;
let julnum = 31;
let augnum = 31;
let sepnum = 30;
let octnum = 31;
let novnum = 30;
let decnum = 31;

// Months, names
let jan = "JAN";
let feb = "FEB";
let mar = "MAR";
let apr = "APR";
let may = "MAY";
let jun = "JUN";
let jul = "JUL";
let aug = "AUG";
let sep = "SEP";
let oct = "OCT";
let nov = "NOV";
let dec = "DEC";


// Conditions
if (m == jan || m == mar || m == may || m == jul || m == aug || m == oct || m == dec) {
    console.log(m + " has 31 days.");
}
else if (m == apr || m == jun || m == sep || m == nov) {
    console.log(m + " has 30 days.");
}
else if ((y % 400 == 0 || y % 4 == 0) && m == feb) {
    console.log(m + " has " + feb_leapnum + " days.");
}
else if (y % 100 == 0 && m == feb) {
    console.log(m + " has " + febnum + " days.");
}
else if (m == feb && ((y % 400 != 0 && y % 4 != 0) && y % 100 != 0)) {
    console.log(m + " has " + febnum + " days.");
}
else {
    console.log("Does not compute.");
}