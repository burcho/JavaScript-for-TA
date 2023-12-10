// task 1

function getPromise(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

getPromise("test promise", 2000).then(function (data) {
    console.log(data);
});

// task 2

function calcArrProduct(arr) {
    return new Promise((resolve, reject) => {
        const isNumeric = arr.every(element => typeof element === 'number' && !isNaN(element));

        if (isNumeric) {
            const product = arr.reduce((accumulator, currentValue) => accumulator * currentValue);
            resolve(product);
        } else {
            reject('Error! Incorrect array!');
        }
    });
}

calcArrProduct([3, 4, 5]).then(result => console.log(result));
calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result));

// task 3

const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

function showNumbers() {
    const firstValue = 0;
    let sequenceOfNumbers = Promise.resolve(firstValue);
    const getRandomInterval = () => Math.random() * 3000;

    for (let i = 0; i <= 9; i++) {
        sequenceOfNumbers = sequenceOfNumbers.then((currentValue) => {
            console.log(currentValue);
            return delay(i + 1, getRandomInterval());
        });
    }
}

showNumbers();
