// Synchronous method

const { readFileSync, writeFileSync } = require("fs");
// const fs = require('fs');

const first = readFileSync("./folder/first.txt", "utf-8");
const second = readFileSync("./folder/second.txt", "utf-8");

//console.log(first, second);

writeFileSync(
  "./folder/result-sync.txt", // creates and writes into the file if doesnt exist
  `Here is the result: ${first}, ${second}`, // content
  { flag: "a" } // appends to the current file
);
