// Task 1 Understanding Global Objects
// For QAP1 - Fullstack JavaScript - Keyin College
// Author - Matt Davis
// Last updated: Sept 25th, 2023

// This file will explain basic details of the Node JS Buffer Module.

// The new Buffer statement allows us to create a new Buffer object.
const buffer = new Buffer.from("Hello World");

// This console.log statement shows us our buffer object as a JSON object.
console.log(buffer.toJSON());

// Raw binary data as output to console, represented as hexadecimal value rather than binary data
console.log(buffer);

// The toString() method will convert the binary data back to characters we can read and understand.
console.log(buffer.toString());

// We are also able to write to the buffer using the .write() method which takes a string as a parameter. Because Buffers have limited space, the string argument writes over the current Buffer object value starting from position 0.
buffer.write("Testing");

// This can be shown with this out as "Testingorld". We have written over the first 7 characters of our original buffer value.
console.log(buffer.toString());

// We can see that if we try to write a new string that is longer than the originally defined string, we lose data due to overflow.
buffer.write("This is a test");
console.log(buffer.toString());
