/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myname = "Lucca";
// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = myname;

// Step 3: declare and instantiate a variable to hold the current year
const year = 2022;

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = year;


// Step 5: declare and instantiate a variable to hold the name of your picture
const myPicture = 'images/lucca.jpg';

// Step 6: copy your image into the "images" folder



// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

document.querySelector('img').setAttribute('src', myPicture);


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const ffood = ["pizza", "ice cream", "hamburguer"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").textContent= ffood;

// Step 3: declare and instantiate a variable to hold another favorite food
const ffod2 = "popcorn";

// Step 4: add the variable holding another favorite food to the favorite food array
ffood.push(ffod2);

// Step 5: repeat Step 2
document.querySelector("#food").textContent= ffood;


// Step 6: remove the first element in the favorite foods array
ffood.shift();


// Step 7: repeat Step 2
document.querySelector("#food").textContent= ffood;


// Step 8: remove the last element in the favorite foods array
ffood.pop();


// Step 7: repeat Step 2
document.querySelector("#food").textContent= ffood;


document.querySelector("#w1").setAttribute("href", "https://lucca1998byu.github.io/CSE121B/")

document.querySelector("#w3").setAttribute("href", "https://lucca1998byu.github.io/CSE121B/W3/task3.html")
document.querySelector("#w4").setAttribute("href", "https://lucca1998byu.github.io/CSE121B/W4/task4.html")
document.querySelector("#w5").setAttribute("href", "https://lucca1998byu.github.io/CSE121B/W5/task5.html")
