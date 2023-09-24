// Task 1 Understanding Global Objects
// For QAP1 - Fullstack JavaScript - Keyin College
// Author - Matt Davis
// Last updated: Sept 24th, 2023

const fs = require("fs"); // Require method to import File System module from Node.js

// First, we will demonstrate the File system module's ability to read text from a file.

// We use the readFileSync method passing both our text file and preferred encoding method and store the value to a variable. If we do not include the encoding argument, it will return a Buffer with Binary data.
const fileContent = fs.readFileSync("./task1_filesystem.txt", "utf-8");

// The result is the text contained in the "task1_filesystem.txt file"
console.log(`This is reading a file synchronously -- ${fileContent}`);

// We can use another method to gather the same information Asynchronously by calling the readFile method as seen below
fs.readFile("./task1_filesystem.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`This is reading a file asynchronously -- ${data}`);
  }
});

// We can also use the File system to write data to a new file. To do this, we can call the writeFile method. By default, the writeFile method will write over any existing text in the file.
fs.writeFile(
  "./task1_filesystem_write_example.txt",
  "Hello new file",
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`File written --`);
    }
  }
);

// To append text to a file, we must set the flag value to "a" for append. We can now see the example file is changed.
fs.writeFile(
  "./task1_filesystem_write_example.txt",
  " - Adding to the existing file",
  { flag: "a" },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`File appended --`);
    }
  }
);
