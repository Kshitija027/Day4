
console.log("program start ");
console.log("added debugging breakpoints");

function addNumbers(a, b) {
  let sum = a + b; // ← Set breakpoint here
  return sum;
}
let sum = addNumbers(2,6);
console.log("sum",sum);
console.log("program end ");