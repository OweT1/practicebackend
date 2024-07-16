const path = require("path");

console.log(path.sep);

const filePath = path.join("/folder", "subfolder", "testing.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const abs = path.resolve(__dirname, "folder", "subfolder", "testing.txt");
console.log(abs);
