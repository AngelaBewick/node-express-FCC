//Modules

//Common JS, every file in NODE is a module by default
//modules - encapsulated code (only share minimum)
// const secret = "SUPER SECRET";
// const john = "john";
// const peter = "peter";

// const sayHi = (name) => {
//   console.log(`Hello there ${name}.`);
// };

const names = require("./4-names"); //import module "names" the dot is to go up one level to the main directory. If you needed to go up more levels you would use more dots.
console.log(names);
const sayHi = require("./5-utils");
const data = require("./6-alternative-export");
console.log(data);

require("./7-mind-grenade");

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
