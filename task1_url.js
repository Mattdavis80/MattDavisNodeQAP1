// Task 1 Understanding Global Objects
// For QAP1 - Fullstack JavaScript - Keyin College
// Author - Matt Davis
// Last updated: Sept 24th, 2023

const url = require("url"); // Require method to import url module from Node.js

// Here is an example string which we will use to showcase how the url module works in Node.js
const urlString = "https://www.qap1example.com/example?id=123&page=99";

// Firstly, to first work with the given url, we must parse it into a Javascript object using the parse() method
const parsedUrl = url.parse(urlString, true);

// Once the url is parsed, we can see all of the url's information contained in the JS object
console.log(parsedUrl);

// We can also gather specific information by referencing the objects key-value pairs
// In this example we find the url's protocol.
console.log(
  `The protocol used in this url is an ${parsedUrl.protocol} protocol`
);

// In this example we find its host name.
console.log(`The host name for the example url is ${parsedUrl.hostname}`);

// We can also use the url module to construct new urls

// Here we are creating a url object and assigning it's key-value pairs.
const urlObject = {
  protocol: "http:",
  hostname: "www.qap1.com",
  pathname: "/MattDavis",
  query: { id: "666", page: "22" },
};

// We can format the url object to give us a string of the given url by using the format method
const stringUrl = url.format(urlObject);

// Here is the output of this method
console.log(stringUrl);
