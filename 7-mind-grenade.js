const num1 = 5;
const num2 = 10;

function addValues() {
  console.log(`the sume is : ${num1 + num2}`);
}

addValues(); //when you call a function here it is invoked wherever it is imported

// runs even though it wasn't explicily exported and wasn't assigned to a variable when it was imported
