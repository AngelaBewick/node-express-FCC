const path = require("path");

//a seperator property that retuns a plattform specific seperator
console.log(path.sep); // returns \ as the path seperator used on my system (C:\User\Angie...)

const filePath = path.join("/content", "subfolder", "test.txt"); //path.join will join together the parts of a filepath into an normalized filepath
console.log(filePath);

const base = path.basename(filePath); // only returns the base file name from any file path
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt"); //returns an ABSOLUTE path
console.log(absolute);
