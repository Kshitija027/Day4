
// 1. Variables*******************************************************
let age = 22;
console.log("My age is:", age);



// 2. Strings********************************************************
let firstName = "Kshitija";
let lastName = "Nimbalkar";
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

// using bicksticks property code
let name = "Kshitija";
let msg = `Hello, ${name}!`;  
console.log(msg); 


//toUpperCase()

let t1= "hello";
console.log(t1.toUpperCase()); // "HELLO"

//toLowerCase()
let t2 = "HELLO";
console.log(t2.toLowerCase()); // "hello"
//trim
let t3 = "   JavaScript   ";
console.log(t5.trim()); // "JavaScript"
//charAt
let t4= "JavaScript";
console.log(t4.charAt(4)); // "S"

console.log(t1.length);
console.log(t1.lastIndexOf);



// 3. Arrays*****************************************************************
let colors = ["Red", "Green", "Blue", "Yellow", "Black"];
console.log("Third color:", colors[2]);

//accessing elements usinig for
for(let i=0;i<colors.length;i++)
{
    console.log(colors[i])
}

// acessing Element using for of
for(let i of colors)
{
    console.log(i)
}
//push
let fruit = ["Apple", "Banana"];
fruits.push("Mango");
console.log(fruits); // ["Apple", "Banana", "Mango"]
//pop
fruits.pop();
console.log(fruits); // ["Apple", "Banana"]
//shift
fruits.shift();
console.log(fruits); // ["Banana"]
//indexoff
let no = [10, 20, 30, 40];
console.log(numbers.indexOf(30)); // 2



// 4. Conditionals*******************************************************
let number = -3;
if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}




if(a>b){
    console.log("a is greater than b ")
}
else{
    console.log("b is greater than a");
}

if(a>b){
console.log("a is greater than b")
}
else if(a == b){
    console.log("a and b are equal");
}
else{
    console.log("b is greater than a")
}



// 5. Combined Exercise: Print even numbers from array*******************************************
let numbers = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log("Even:", numbers[i]);
  }
}
// 6 .loops***********************************************************************
//for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//while loop
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// for .. off loop
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
  console.log(fruit);
}
//  7 .data types:--*******************************************************
console.log(typeof 123);        // number
console.log(typeof "Hello");    // string
console.log(typeof true);       // boolean
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object (special case/bug in JS)
console.log(typeof Symbol());   // symbol
console.log(typeof 123n);       // bigint
// operators***************************************************************
let a = 10, b = 3;

console.log(a + b); // 13  (Addition)
console.log(a - b); // 7   (Subtraction)
console.log(a * b); // 30  (Multiplication)
console.log(a / b); // 3.333... (Division)
console.log(a % b); // 1   (Modulus - remainder)
console.log(a ** b); // 1000 (Exponentiation - power)
