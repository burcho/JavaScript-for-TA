// task 1
// loop with for
const numbersArray = [2,3,4,5];
let result = 1;

for( let i = 0; i < numbersArray.length; i++){
    result *= numbersArray[i];
}
console.log(result);

//loop with while

const newArray = [2,3,4,5];
let newResult = 1;
let i = 0;

while (i < newArray.length){
    newResult *= newArray[i];
    i++;
}
console.log(newResult);

// task 2

for ( let i = 0; i < 15; i++){
    if (i % 2 == 0){
        console.log (i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

// task 3

 function randArray(k){
    const listOfnumbers = [];
    for (let i = 0; i<k; i++){
        listOfnumbers.push(Math.floor(Math.random() * (500) + 1));
    }
    return listOfnumbers
}
let result = randArray(5); 
console.log(result);

// task 4 
function raiseToDegree(a, b){
   let result = a ** b;
    return result;
}
let a = +prompt("please enter number");
let b = +prompt("please enter one more number");

let outcome = raiseToDegree (a, b);
console.log(outcome);

// task 5 

function findMin() {
    return Math.min.apply(null, arguments);
}
let randomList = findMin(4,5,2,0,-8.7,-7);
console.log(randomList);

// task 6

function findUnique(arr){
    if (arr.length === new Set(arr).size){
            return true
        } else {
            return false
        }
    }
   let test = findUnique ([1, 2, 3, 5, 11 ]);
   console.log(test); // true
   let test2 = findUnique ([1, 2, 3, 5, 3]);
   console.log(test2); // false

// task 7

function lastElementOfArray (arr, giveNumber){
    if (giveNumber === undefined){
        giveNumber = 0;
        return arr[arr.length - 1];
    } else {
        return arr.slice(-giveNumber);
    }
}
console.log(lastElementOfArray([ 3 , 4 , 10, - 5 ]));
console.log(lastElementOfArray([ 3 , 4 , 10, - 5 ], 2));
console.log(lastElementOfArray([ 3 , 4 , 10, - 5 ], 8));

// task 8

const phrase = prompt('Please enter a phrase');
const newlyArray = phrase.split(" ");

for (let i = 0; i < newlyArray.length; i++) {
    newlyArray[i] = newlyArray[i].charAt(0).toUpperCase() + newlyArray[i].slice(1);
}

const phraseUpdated = newlyArray.join(" ");
console.log(phraseUpdated);
