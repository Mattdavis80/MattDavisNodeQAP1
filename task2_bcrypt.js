// Task 2 Understanding NPM
// For QAP1 - Fullstack JavaScript - Keyin College
// Author - Matt Davis
// Last updated: Sept 24th, 2023

// This file will demonstrate some features of the npm module bcrypt
// The methods used in this 

const bcrypt = require("bcrypt");
const saltRounds = 10;

const pass1 = "Password123";

const hash = bcrypt.hashSync(pass1, saltRounds);

console.log(hash);
