const myArray = ['one', 'two', 'three'];


const myArrayHTML = myList.map(function(list){
    return `<li>${list}</li>`;

});

document.getElementById("myList").innerHTML = myArrayHTML.join();


const xyz = ["A", "B", "A"];
function convertGradeToPoint(x){
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}

const gpaPoints = grades.map(convertGradeToPoint);