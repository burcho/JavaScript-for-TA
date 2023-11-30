let main = document.createElement('main');
main.className = 'mainClass check item';

let div = document.createElement('div');
div.id = 'myDiv';

let paragraph = document.createElement('p');
paragraph.textContent = 'First paragraph';

document.body.appendChild(main); 
main.appendChild(div);
div.appendChild(paragraph);
