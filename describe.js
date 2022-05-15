// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Creates a "name" String variable named Dane.
// Checks to see if the name variable of Dane is equal in both type and value to "mary"
// They are not equal so the console log will say "How do you do?"
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// instantiates variable with name of "secret". (does not add a value) 
// makes variable of "code" equal to 123.
// checks if variable "code" is equal to 123. It returns true so variable "secret" is set to 123...
// and variable "code" multiplied by 2 now equals 246
// 2nd check to see if the new "code" value is greater than 250. It is NOT so condition is false and does not run code block.
// console log runs "super"

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Creates 3 variables boolean "isStudent" equals true, "age" equals 34 and "zip" equal to 55407
// Checks to see if "isStudent" boolean equals true AND if "zip" is greater than 80000
// "isStuent" is true however the condition of "zip" being greater than 80000 is not met. So the code block does NOT run.
// 2nd conditional statement is an OR statement... does not run since NEITHER condition is true.
// 3rd conditional statement of isStudent being equal to true is met. So console log prints "Welcome to Prime!".
// Since one of the conditional statements was true, the else statement gets skipped.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
FIX: colorOne was supposed to equal "blue" and colorTwo "red"
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  FIX: colorTwo also needs to be chanced to purple( colorTwo = ("purple")
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

FIX: This is currently using the OR opperator. Needs to use the && and operator.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
FIX- Conditinal not written exaclty as described. Currently is checking if "minAge" is less than or equal to "age"
FIX- minAge should allow you to enter when equal to age... Many possible fixes for this conditional but to have it like described is:
FIX- Make the conditional be (age >= minAge)
ALTERNATE FIX (not as described) - change the "less than or equals" to just "less than". So every "age" varaible above or equal
- to the "minAge" runs the console log of "enter".
if(minAge <= age) {
  FIX: console log should be changed to "enter"
  console.log('no entry');
} else {
  FIX: console log should be changed to "no entry"
  console.log('enter');
}
*/

