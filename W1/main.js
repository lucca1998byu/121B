
const one = 1;
const two = "2";
const three = "e";
const result = one + two;
console.log(result);
output("ln7", result);
// we can manually change the type of some strings. parseInt(string) will change a number that is a string into an actual number. Use it on our two variable
const result1 = one + parseInt(two);
console.log(result1);
output("ln10", result1);

// We didn't get any output from line 9 above. What change would you need to make to get it to work? Make the change. Hint...in the bottom left corner of the window there is a button 'Console'. Click it.

// what about multiplication?
const result2 = one * two;
console.log(result2);
output("ln16", result2);
// was the result what you expected?

// what about this? Explain what is happening. What does NaN mean?
const result3 = one * three;
console.log(result3);
output("ln21", result3);

// let's try changing the value of two
too = 4;

const result4 = one + too;
console.log(result4)
output("ln27", result4);
// did we get the value we expected? Why didn't it work?
// try adding 'use strict'; to the first line of our code then look at the console again. Fix the error.

const myArray = [1,2,3,5];
//add the number 4 to the end of the array
myArray.push(4)
console.log(myArray);
output("ln39", myArray)
// it would be nice if our numbers were in the correct order. We will learn how to sort later, for now let's remove the last two items in the array and then add them back in the correct numerical order.




console.log(myArray);


// The code below is used to aid in displaying the results.
function output(line, content) {
  const outputElement = document.querySelector(".output");
  outputElement.innerHTML += `<p>${line} : ${content}</p>`;
}




document.querySelector("#w2").setAttribute("href", "https://lucca1998byu.github.io/CSE121B/W2/task2.html")
document.querySelector("#w3").setAttribute("href", "https://lucca1998byu.github.io/CSE121B/W3/task3.html")
document.querySelector("#w4").setAttribute("href", "https://lucca1998byu.github.io/CSE121B/W4/task4.html")

