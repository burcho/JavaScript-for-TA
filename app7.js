// task 1

let openWindow = window.open("", " ", "width=300,height=300");
setTimeout (function resizeWindow () {
    openWindow.resizeTo(500, 500);
}, 2000);

setTimeout (function moveWindow() {
    openWindow.moveTo(200, 200);
}, 4000);

setTimeout(function closeWindow() {
    openWindow.close();
}, 6000);

// task 2
let button = document.querySelector('button');

function changeCSS(){
    let one = document.querySelector('p');
    one.style.fontSize = "20px";
    one.style.color = "orange";
    one.style.font = "Comic Sans MS";
 }

button.addEventListener('click', changeCSS);

// task 3
document.getElementById('firstButton').addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';
 });

document.getElementById('secondButton').addEventListener('dblclick', function(){
    document.body.style.backgroundColor = 'pink';
});

document.getElementById('thirdButton').addEventListener('mousedown', function (){
    document.body.style.backgroundColor = 'brown';
});

document.getElementById('thirdButton').addEventListener('mouseup', function(){
    document.body.style.backgroundColor = 'white';
});

document.getElementById('link').addEventListener('mouseover', function(){
    document.body.style.backgroundColor = 'yellow';
});

document.getElementById('link').addEventListener('mouseout', function(){
    document.body.style.backgroundColor = 'white';
});

// task 4
let buttonDelete = document.getElementById("deleteButton");

buttonDelete.addEventListener('click', function(){
      let dropdown = document.getElementById('dropdown');
      let dropdownIndex = dropdown.selectedIndex;
      if (dropdownIndex > 0) {
        dropdown.options[dropdownIndex].remove();
      }
    });

// task 5
let message = document.getElementById('info');

document.getElementById('liveButton').addEventListener('click', function(){
    message.innerText = "I was pressed!";
});
document.getElementById('liveButton').addEventListener('mouseover', function(){
    message.innerText = "Mouse on me!";
});
document.getElementById('liveButton').addEventListener('mouseout', function(){
    message.innerText = "Mouse is not on me!";
});

// task 6
function updateSize() {
    let widthO = window.innerWidth;
    document.getElementById("widthSize").innerText = widthO;

    let heightO = window.innerHeight;
    document.getElementById("heightSize").innerText = heightO;
}

updateSize();
window.addEventListener('resize', updateSize);
