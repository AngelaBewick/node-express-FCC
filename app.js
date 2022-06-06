// npm packages/dependencies/modules (words used interchangably)

//npm - global command, comes with node
//npm --version

//local dependencies - use it only in this particular project (most common)
//npm i <packageName>

//global dependency - use it in any project
// npm install -g <packageName>

//package.json - manifest file (stores important info about prockect/package)

//three ways to create a package.json file//
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require("lodash");

const items = [2, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);
