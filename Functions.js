/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

function area(l1, l2) {
  return (l1 * l2);
}
let l1 = 5;
let l2 = 10;

return result 


/* WRITE YOUR ANSWER HERE */

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum(int1, int2){
  if (int1 === int2){
      let times3 = (int1 + int2) * 3;
      console.log("result * 3:", times3)
  } else {
     let result = int1 + int2
     console.log("normal result:", result)
  }
}
let int1 = 5;
let int2 = 10;
console.log(crazySum(int1, int2)) 



/* WRITE YOUR ANSWER HERE */

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/
function crazyDiff(anyNumber) {
  intAnyNumber = parseInt(anyNumber);
  if (intAnyNumber > 19) {
    let timesThree = (intAnyNumber - 19) * 3;
    console.log(timesThree);
  } else {
    let totalDiff = 19 - intAnyNumber;
    console.log(totalDiff);
  }
};
crazyDiff(39);


/* WRITE YOUR ANSWER HERE */

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/
function boundary(intParameter){
  if (intParameter >= 20 && intParameter <= 100 || intParameter === 400) {
    return true 
  } else {
    return false
  }

}
let intParameter = 50;
console.log(boundary(intParameter))
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify(stringParameter){
  if(stringParameter === "Strive"){
    console.log(stringParameter)
  } else {
    let longStringParameter = "Strive";
    console.log(longStringParameter.concat(" ", stringParameter));
  }
};
strivify("Anything");
strivify("Strive")

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

function check3and7(acceptPositiveNumber){
if (acceptPositiveNumber % 3 === 0 || acceptPositiveNumber % 7 === 0) {
  console.log("Multiple of 3 or 7")
} else {
  console.log("Not a multiple of 3 and 7")
}
}
check3and7(7);
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

function reverseString(anyString) {
  let strReversed = anyString.split(/(?:)/u).reverse().join("");
  console.log(strReversed);
};
reverseString("Strive");
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/
function upperFirst(aStringAgain){
  var splitStr = aStringAgain.toLowerCase().split(" ");

  for (var i = 0; i < splitStr.length; i++) {
    if (splitStr.length[i] < splitStr.length) {
      splitStr[i].charAt(0).toUpperCase();
    }

    aStringAgain = splitStr.join(" ");
  }

  return aStringAgain;
};
console.log(upperFirst("Why is this not working??"));
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/
function cutString(poorString) {
  return poorString.substring(1, poorString.length - 1);
}
console.log(cutString("Does"));
console.log(cutString("This"));
console.log(cutString("Work?"));
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
function giveMeRandom(n) {

  let arrWithNums = [];
  
  for(i = 0; i < n; i++) {
      arrWithNums.push(Math.floor(Math.random() * 10)); 
  }
  
  return arrWithNums;
}

console.log(giveMeRandom(4));
/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
