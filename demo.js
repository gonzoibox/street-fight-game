//// TOPICS fo Basic JS


/// COMMENTS
const style = {
  display: "flex",
  flexWrap: "wrap",
  // *dominantBaseline: central; not supported by IE 9 :(
};

/**
 * returns the name of the lecture
 * @param {string} course 'js' | 'php' | 'net'
 * @returns {string}
 */
function getLectureName(course) {
  switch (course) {
    case "js":
      return "Introduction to JavaScript";
    case "php":
      return "Laravel - The PHP Framework";
    case "net":
      return "C# and .NET framework";
  }
}


/// DECLARATIONS

// *There are three kinds of declarations in JavaScript:

// 1.  var declares a variable, optionally initializing it to a value
var message;
message = "Hello World";

var name = "John",
  age = 24;

// 2. let declares a block-scoped, local variable, optionally initializing it to a value
let count = 10;
if (count > 5) {
  let count = 5; // count = 5
}
// count here still equal 10

// 3. const declares a block-scoped, read-only named constant
const user = {
  name: "John",
  age: 24,
};

const PRIMARY_COLOR = "#ccc";


/// Data Types

// *According to the ECMAScript, there are six primitive types
// *and everything else is an Object type.Let’s run over those one by one.

// Boolean
// The boolean type has two values: true and false.
let isValid = true;
isValid = false;

// Number
// An integer or floating point number.
const age = 23;
const coef = 12.345;
const hex = 0x00111; // hexadecimal, base 16 starts with 0x
const octal = 0o01; // octal, base 8 starts with 0o
const binary = 0b0011; // binary, base 2 starts with 0b

// The number type has three symbolic values: +Infinity, -Infinity, and NaN (not-a-number).
const result = 2 / "text"; // NaN
isNaN(result); // true

// String
// A sequence of characters that represent a text value. JavaScript strings are immutable.
let str = "Hello world";
str = "new string";

let age = 23;
let newStr = `age - ${age}`;
console.log(`first line
second line`);
str.length; // 10
str.charAt(2); // w
str.toLowerCase(); // "new string"
str.toUpperCase(); // "NEW STRING"
str.indexOf("str"); // 4
newStr.substring(11, 17); // second
newStr.substr(11, 6); // second

// null
// null is a special keyword denoting a null value.
let x = null;

// undefined
// undefined is a top-level property whose value is not defined.
let y; // undefined

// Symbol
// A Symbol is a unique and immutable primitive value and may be used as the key of an Object property.
let isAdmin = Symbol("isAdmin");

let user = {
  name: "John",
  [isAdmin]: true,
};

user.isAdmin; // undefined
user[isAdmin]; // true


/// Type coercion
// JavaScript variables can be converted to a new variable and another data type either by the use of a JavaScript function or automatically by JavaScript itself:

// Converting to string:
String(null) // "null"
false.toString();  // "false"
12 + 'px' // "12px"

// Converting to numbers:
Number(true) // 1
parseInt('3.14', 10) // 3
parseFloat('3.14') // 3.14
12 - '4' // 8
12 + '4' // "124"
12 + +'4' // 16

// Converting to boolean
0, '', null, undefined, NaN -> false
if (12) { }
Boolean(undefined) // false
console.log(!!'text'); // true


/// Control flow

// Block statement

// Conditional statements

// 1. if...else statement
if (age < 18) {
  ageCategory = 'young';
} else if (age > 50) {
  ageCategory = 'old';
} else {
  ageCategory = 'adult';
}

// 2. switch statement
switch(ageCategory) {
  case 'young': 
    console.log('less than 18');
  case 'adult': 
    console.log('from 18 to 50');
    break;
  case 'old': 
    console.log('older then 50'); 
    break;
  default: 
    console.log('unknown');
}


/// Loops and iteration

// Loops offer a quick and easy way to do something repeatedly. 

// The statements for loops provided in JavaScript are:
// 1. for statement, break statement, continue statement
for (let step = 0; step < stepCount; step++) {
  const value = step * intervalComputed;

  if (value === 0) {
    labelsFromRange.push('0');
    continue;
  }

  const labelText = formatNumber(value, decimalSeparator);
  const labelWidth = getTextWidth(labelText);
  const isLastStep = step === stepCountWithMargin;

  if (isLastStep && remainingAxisLength < labelWidth) {
    break;
  }

  labelsFromRange.push(labelText);
}

// 2. while statement
let level = currentLevel;

while(level >= 0) {
  // do something
  level--;
}

// 3. do...while statement
do {
  // do something
  level--;
} while (lavel >= 0);

// 4. for...of statement
const user = { firstName: 'Mike', lastName: 'Din' };  

for (let value of user) {  
  console.log(value); // Mike, Din  
}

Object.keys(user).forEach((key) => { ... });

// 5. for...in statement
Array.prototype.customFunction = function() {};

let weekends = ['Sat', 'Sun'];

for (let i in weekends ) {
  console.log(i); // 0, 1, "customFunction"
}



