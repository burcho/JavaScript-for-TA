//task 1
//version 1
document.getElementById("test").innerHTML = "Last";

// version 2
let new = document.body.children[0];
    new.outerHTML = "Last";

// task 2

let newImage = document.querySelector('.image');
newImage.setAttribute('src', 'cat.jpg');
alert(newImage.outerHTML);

// task 3

const value = document.querySelectorAll('#text p');
value.forEach((paragraph, index) => { 
    console.log(`Selector test ${index}: ${paragraph.textContent}`);
})

// task 4
//version 1
const listFull = document.getElementById('list');
const listArray = Array.from(listFull.children).filter(item => item.tagName == 'LI')
alert(listArray[0].textContent + listArray[4].textContent + listArray[1].textContent + listArray[3].textContent + listArray[2].textContent);

// version 2
const fullList = document.getElementById('list');
const anotherArray = fullList.getElementsByTagName('li');

Array.from(anotherArray).forEach((item, index) => {alert(`${item.textContent}`);})

// task 5

let one = document.querySelector('h1');
one.style.fontSize = "30px";
one.style.backgroundColor = "#00ff00";

document.getElementById("myDiv").children[0].innerHTML = "<b>First paragraph</b>";
let two = document.getElementById("myDiv").children[1];
two.style.color = "red";
let three = document.getElementById("myDiv").children[2];
three.style.textDecoration = "underline";
document.getElementById("myDiv").children[3].innerHTML = "<i>Fourth paragraph</i> ";
document.getElementById('myList').style.display = 'flex';
document.getElementsByTagName('span')[0].style.display = 'none';

// task 6
 let messageOne = prompt("Please enter message one");
document.getElementById('input1').value = messageOne;

 let messageTwo = prompt("Please enter message two");
 document.getElementById('input2').value = messageTwo;

 temp = document.getElementById('input1').value = messageOne;
 document.getElementById('input1').value = messageOne = document.getElementById('input2').value = messageTwo;
 document.getElementById('input2').value = messageTwo = temp;







