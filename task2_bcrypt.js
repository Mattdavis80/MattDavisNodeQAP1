// Task 2 Understanding NPM
// For QAP1 - Fullstack JavaScript - Keyin College
// Author - Matt Davis
// Last updated: Sept 26th, 2023

// This file will demonstrate some features of the npm module bcrypt

const bcrypt = require("bcrypt"); // Import bcrypt with the require method.

// Salt rounds in a sense is the cost factor of how much time is required to calculate a single BCrypt hash. The higher the number the higher the cost factor.
// In this example we are defining a salt round of 10.
const saltRounds = 10;

// Here we have our password which we will hash to prevent malicious access to our stored passwords.
const pass1 = "Password123";

// Here we use the synchronous hash method which takes the parameters of a password, and number of salt rounds. If the salt rounds are omitted the default value is 10
const hash1 = bcrypt.hashSync(pass1, saltRounds);

console.log(`Here is our hashed version of the password: ${hash1}`);

// If we declare a second variable with the same value and hash it, it will result in a different hashed password, this is to ensure that passwords with the same value cannot be recognized, keeping data safe.
pass2 = "Password123";
const hash2 = bcrypt.hashSync(pass2, saltRounds);

console.log(
  `This is a new variable with the same password and different hash: ${hash2}`
);

// We can also compare our password to the hash, it will return true if they are a match
console.log(
  `Here we can see the matching passwords return true: ${bcrypt.compareSync(
    pass1,
    hash1
  )}`
);

console.log(
  `We can also see it return false if there is no match: ${bcrypt.compareSync(
    "different password",
    hash1
  )}`
);
