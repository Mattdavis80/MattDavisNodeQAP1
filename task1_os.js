// Task 1 Understanding Global Objects
// For QAP1 - Fullstack JavaScript - Keyin College
// Author - Matt Davis
// Last updated: Sept 24th, 2023

const os = require("os"); // Require method to import os module from Node.js

// The os Module allows us to access a variety of information from the users current operating system.
// The benefit of using this module is that it allows us to gather this information in a readable and accessible methods

// Here is an example of using the os module to gather the users operating system name
const osName = os.type();
console.log(`Operating System: ${osName}`);

// We can also gather information about the users total and free memory. These methods return a value in bytes so we are converting the values to megabytes for ease of reading. Here we set these values to a variable and display them to the
const totalMemory = os.totalmem() / (1024 * 1024);
console.log(`Total Memory: ${totalMemory.toFixed(2)}MB`);

const freeMemory = os.freemem() / (1024 * 1024);
console.log(`Free Memory: ${freeMemory.toFixed(2)}MB`);

// Another example of using the os Module is displaying the home directory. This could be used in combination with the fs module to find the user's directory to save and store information
const homeDirectory = os.homedir();
console.log(`Home Directory: ${homeDirectory}`);

// Lastly, this is an example showing how to display information about the user's CPUs. The os module can refer to these values and use them as needed. For example, this information could be displayed as a GUI to monitor system information.
const cpus = os.cpus();
console.log("CPUs:");
cpus.forEach((cpu, index) => {
  console.log(`CPU ${index + 1}:`);
  console.log(`  Model: ${cpu.model}`);
  console.log(`  Speed: ${cpu.speed} MHz`);
  console.log(`  Times:`, cpu.times);
});
