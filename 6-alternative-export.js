module.exports.items = ["item1", "item2"];

const person = {
  name: "bob",
};
module.exports.singlePerson = person;

console.log(module);

//both this exports options will end up importing as an oject in other modules
