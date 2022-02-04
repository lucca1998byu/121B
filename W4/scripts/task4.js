/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let info = {
// Step 2: Inside of the object, add a property named name with a value of your name as a string
    name: "Lucca",
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
    photo: 'images/lucca.jpg',
    
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
    favoriteFoods: ["Pizza", "Hamburguer", "Spaguetti", "barbecue"],
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
    hobbies: ["play videogame", "Watch Netflix", "Bike"],

// Step 6: Add another property named placesLived with a value of an empty array
    placesLived: [
        
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
    {place: "Sao Paulo-SP, Brazil",
    length: '20 years'
    }, 
    {place: "Teresina-PI, Brazil",
    length:' 2 years'
    },
    {
    place: "Sao Luis-MA, BR",
    length: '4 months'
    }
// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived
    ]

};
/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").textContent = info.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").setAttribute("src", info.photo);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").setAttribute("alt", `${info.name}'s photo`);
document.querySelector("#photo").setAttribute("width", "200")
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
info.favoriteFoods.forEach((food) => {
    let favoriteFoodsEach = document.createElement("li");
    favoriteFoodsEach.textContent = food;

    
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector("#favorite-foods").append(favoriteFoodsEach);
// Step 6: Repeat Step 4 for each hobby in the hobbies property
})
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
info.hobbies.forEach((hob) => {
    let hobbiesEach = document.createElement("ul");
    hobbiesEach.textContent = hob;
    document.querySelector("#hobbies").append(hobbiesEach);
        
})
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
info.placesLived.forEach((placeLived) => {
    let placesLivedPlace = document.createElement('dt');
    placesLivedPlace.textContent = placeLived.place;
    
    let placesLivedLength = document.createElement('dd');
    placesLivedLength.textContent = placeLived.length;
    
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
    document.querySelector('#places-lived').appendChild(placesLivedPlace);
    document.querySelector('#places-lived').appendChild(placesLivedLength);
})
   
document.querySelector("#w1").setAttribute("href", "https://lucca1998byu.github.io/CSE121B/")

document.querySelector("#w2").setAttribute("href", "https://lucca1998byu.github.io/CSE121B/W2/task2.html")
document.querySelector("#w3").setAttribute("href", "https://lucca1998byu.github.io/CSE121B/W3/task3.html")
document.querySelector("#w5").setAttribute("href", "https://lucca1998byu.github.io/CSE121B/W5/task5.html")
