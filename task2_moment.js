// Task 2 Understanding NPM
// For QAP1 - Fullstack JavaScript - Keyin College
// Author - Matt Davis
// Last updated: Sept 26th, 2023

const moment = require("moment"); // Require method to import moment

// This is an example of the basic moment object that is created using the moment method.
console.log(`The current moment obeject at time of execution: ${moment()} \n`);

// We can also pass arguments into this method to return different values
console.log(`Here is the full month: ${moment().format("MMMM")} \n`);
console.log(
  `Here is the short version of the month: ${moment().format("MMM")} \n`
);
console.log(`Here is the digit value of the month: ${moment().format("M")} \n`);

// We can also add or subtract time from the current date.
console.log(
  `Here is me adding 5 days to the current date: ${moment()
    .add(5, "days")
    .format("DD/MM/YYYY")} \n`
);

// We can display this information in many ways by changing the the format.
console.log(
  `Here is 5 days from today but formatted differently: ${moment()
    .add(5, "days")
    .format("YYYY/MM/DD")} \n`
);

// We can also create a new date object and pass our own values.
console.log(
  `Setting a new date object to Jan 1st, 2022: ${moment()
    .set({
      year: 2022,
      month: 0,
      date: 1,
    })
    .format("DD/MM/YYYY")}`
);
