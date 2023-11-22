// task 1

try {
    function calcRectangleArea(width, height) {
        if (typeof(width) === 'number' && typeof(height) === 'number'){
            area = height * width; 
            return area;
        } else {
            throw new Error("Non-numeric parameters was typed");
        }
    } 
} 
catch(exception){
    (console.log("Non-numeric parameters"))
}
let outcome = calcRectangleArea(7, 7);
console.log(outcome);

//  task 2

try{
    let age = prompt("Please enter your age");
    checkAge(age);

    function checkAge(age){
        if (age >= 14){
            alert("Welcome User. You can watch the movie!");
        } else if (age === ""){
            throw new Error("The field is empty! Please enter your age");
        } else if (isNaN(age)){
            throw new Error("Non-numeric value");
        } else if (age < 14) {
            throw new Error("Your age is less than 14");
        }
        return 
    }
}
catch(exception){
    console.log(exception.name);
    console.log(exception.message);
}

// task 3

class MonthException {
    constructor(message) {
        this.name = 'Month Exception';
        this.message(message);        
    }
}

function showMonthName(month) {
    try {
        if (month > 0 && month <= 12) {
            let input = new Date();
            input.setMonth(month - 1);
            console.log(input.toLocaleString('en-UA', {month: 'long'}));
        } else {
            throw new Error ("MonthException: Incorrect month number");
        };
    } catch (exception) {
        console.log(exception.name);
        console.log(exception.message);
    }
};
showMonthName(41);

// task 4

function showUser(id){
        if (id < 0 ){
        throw new RangeError(`Id cannot be negative: ${id}`);
        } else {
            return {id};
        } 
}

function showUsers(ids){
    try{
    let newList = ids.map((id) => showUser(id));
    return newList;
    } catch(exception){
    console.log(exception.name);
    console.log(exception.message);
}
}

console.log(showUsers([1, 58, 56, -111]));


