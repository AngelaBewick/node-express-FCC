//create class
//if you want to make something custom then extend the class
// otherwise if it's just for emitting and handling events create an instance
const EventEmitter = require("events"); //essentially a class

const customEmitter = new EventEmitter(); //create a new instance

//on and emit methods
//must call AFTER the event listener not before
//can add additional arguments
//utilized by built in modules

customEmitter.on("response", (name, id) => {
  console.log(`data recieved - user : ${name}, id : ${id}`);
}); // listen for an event

customEmitter.on("response", () => {
  console.log(`some other logic here`);
});

customEmitter.emit("response", "john", 34);
