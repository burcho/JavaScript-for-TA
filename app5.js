// task 1
let student = {
    firdtName: 'Peter',
    lastName: 'Peterson',
    year: 3,
    nameOofCourse: 'Mathematic',
   }

function propsCount(currentObject) {
    return Object.entries(currentObject).length;
}

console.log(propsCount(student));

// task 2

let book = {
    title: 'A Study in Scarlet',
    author: 'Arthur Conan Doyle',
    pages: 394,
    publisher: 'Ward Lock & C',
    yearOfPublishing: 1887,
}

function showProps(obj){
    for ( let property in obj)
    console.log(`${property} = ${obj[property]}`);
}

showProps(book);

// task 3

class Person{
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showDullName(){
        return `${this.name} ${this.surname}`;
    }
}

class Student extends Person {
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
    }
    showFullName(middleName){
        return `${this.name} ${middleName} ${this.surname}`;
    }
    showCourse(){
        let thisYear = new Date().getFullYear();
        let yearsAtUni = thisYear - this.year;

        if (yearsAtUni <=6 && yearsAtUni >=0){
        return yearsAtUni;
        } else {
            console.log("There is a mistake in the year");
        }

    }
}

const stud1 = new Student("Petro", " Petrenko ", 2015);
console.log(stud1.showFullName(" Petrovych ")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 6

// task 4

class Worker {
    
    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    showSalary(){
        return this.dayRate * this.workingDays;
    }

   #experience = 1.2;

    showSalaryWithExperience(){
        return this.showSalary() * this.#experience;
    }

    get experience(){
       return  this.#experience;
    }
    set experience(updatedExperience){
       this.#experience = updatedExperience;
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
console.log(worker1.fullName + " salary:" + worker1.showSalary());
console.log('New experience: ' + worker1.experience);
console.log(worker1.fullName + " salary:" + worker1.showSalaryWithExperience());
worker1.experience = 1.5;
console.log("New experience: " + worker1.experience);
console.log(worker1.fullName + " salary:" + worker1.showSalaryWithExperience());

let worker2 = new Worker("Tom Thomson", 48, 22);
console.log(worker2.fullName);
console.log(worker2.fullName + " salary:" + worker2.showSalary());
console.log('New experience: ' + worker2.experience);
console.log(worker2.fullName + " salary:" + worker2.showSalaryWithExperience());
worker2.experience = 2.5;
console.log("New experience: " + worker2.experience);
console.log(worker2.fullName + " salary:" + worker2.showSalaryWithExperience());

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
console.log(worker3.fullName + " salary:" + worker3.showSalary());
console.log('New experience: ' + worker3.experience);
console.log(worker3.fullName + " salary:" + worker3.showSalaryWithExperience());
worker3.experience = 1.9;
console.log("New experience: " + worker3.experience);
console.log(worker3.fullName + " salary:" + worker3.showSalaryWithExperience());

Worker.sortSalaries = workers => {
    const sortedWorkersBySalary = workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());
    sortedWorkersBySalary.map(worker => console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`));
};

Worker.sortSalaries([worker1, worker2, worker3]);

