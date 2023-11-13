// task1

let x = 1;
let y = 2;

let res1 = (String(x)+y); // Add the code, it is necessary to use the variables x and y
console.log(res1); // "12"
console.log( typeof res1); // "string"

let res2 = (Boolean(x)+String(y)); // Add code is required use variables x and y
console.log(res2); // "true2"
console.log( typeof res2); // "string"

let res3 = Boolean(x+y); // Add code is required use variables x and y
console.log(res3); // true
console.log( typeof res3); // " boolean "

let res4 = (x+y+undefined); // Add code is required use variables x and y
console.log(res4); // NaN
console.log( typeof res4); // "number"



// task2
let result = prompt("Please enter the number");

if (result > 0 && result % 2 == 0){
    console.log("The number is even and positive");
} else {
    console.log("The number is whether not even or not positive");
}

if (result % 7 == 0){
    console.log("Is multiple of 7");
} else {
    console.log("Is not multiple of 7");
}



// task 3

const arr = [];
arr[0] = 1;
arr[1] = "line";
arr[2] = true || false;
arr[3] = null;
console.log(arr.length);

let userInfo = prompt("How are you?");
arr[4] = userInfo;
console.log(arr[4]);

arr.shift();
console.log(arr);




// task 4

let cities = [" Rome ", " Lviv ", " Warsaw "];
console.log(cities.join("*"));




// task 5 

let isAdult = prompt("How old are you?");
if (isAdult >= 18) {
    console.log("You have reached the age of majority");
} else {
    console.log("You are still too young");
}




// task 6

let sideA = +prompt("Input lenght of side A");
let sideB = +prompt("Input lenght of side B");
let sideC = +prompt("Input lenght of side C (hypotenuse)");

let halfPerimeter = (sideA+sideB+sideC)/2;
let areaCube = (halfPerimeter*(halfPerimeter-sideA)*(halfPerimeter-sideB)*(halfPerimeter-sideC));
let area = (areaCube ** (1/2));
const areaRounded = area.toFixed(3);
console.log(areaRounded);

if (Math.pow(sideC,2) == (Math.pow(sideB,2) + Math.pow(sideA,2))) {
    console.log("The triangle is rectangular");
} else {
    console.log("The triangle is not rectangular");
} 



// task 7

const time = new Date;
let currentTimeofSystem = time.getHours();
console.log(currentTimeofSystem);

if (currentTimeofSystem >= 23 && currentTimeofSystem < 5){
    console.log("Good night");
} else if (currentTimeofSystem >= 5 && currentTimeofSystem < 11) {
    console.log("Good morning");
} else if (currentTimeofSystem >= 11 && currentTimeofSystem < 17) {
    console.log("Good day");
} else if (currentTimeofSystem >= 17 && currentTimeofSystem < 23) {
    console.log("Good evening");
}

switch (true) {
    case (currentTimeofSystem >= 23 && currentTimeofSystem < 5):
        console.log("Good night");
        break;
    case (currentTimeofSystem >= 5 && currentTimeofSystem < 11):
        console.log("Good morning"); 
        break;
    case (currentTimeofSystem >= 11 && currentTimeofSystem < 17):
        console.log("Good day");
        break;
    default:
        console.log("Good evening");
        break;
}
