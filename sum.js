// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// define a function?

// capture the command line arguments
const args = process.argv.slice(2);

// Edge case: We need at least 2 arguments

if (args.length < 2) {
  console.log("Please enter at least 2 arguments");
  process.exit();
}


// check if the arguments are valid?
// What are valid args? => // console.log args
console.log("args:", args);


// iterate through the args
// for of
// c-style loop (let i=0; i < args.length; i++)

// accumulator
let total = 0;

for (let nb of args) {
  // add them up => calculate the sum
  // Edge cases: If any argument is not a whole number, skip it.
  // Math.floor
  // float()?
  // modulo (%) nb % 1 === 0
  // Number.isInteger
  const convertedNum = Number(nb);
  // Edge cases: If any argument is not a number, output an error message.
  // typeof

  if (isNaN(convertedNum)) {
    console.log("Please enter only numbers");
    process.exit()
  }

  if(Number.isInteger(convertedNum)) {
    total += convertedNum;
  }
  console.log("nb:", nb, "convertedNum",convertedNum, "total:", total);
}




// print the sum
console.log("Sum:", total);