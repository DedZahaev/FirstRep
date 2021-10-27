'use strict';
const books = document.querySelectorAll('.book');
console.log(books);
books[0].before(books[1]);
books[3].before(books[4]);
books[5].after(books[2]);

// const newBackground = document.createElement('img');
// newBackground.src = "url('you-dont-know-js.jpg')";
// console.log(newBackground);
document.body.style.backgroundImage = "url('you-dont-know-js.jpg')";

const a1 = document.querySelectorAll('a');
a1[2].textContent = "Книга 3. this и Протопипы Объектов";

const div1 = document.querySelectorAll('div');
div1[6].remove();

const ul1 = document.querySelectorAll('ul');
console.log(ul1);

const li1 = ul1[1].querySelectorAll('li');

li1[3].after(li1[2]);
li1[3].after(li1[6]);
li1[6].after(li1[8]);
li1[9].after(li1[2]);

const newElem = document.createElement('li');
const li2 = ul1[5].querySelectorAll('li');
console.log(li2);
newElem.textContent = 'Глава 8: За пределами ES6';
// newElem.node.add('li2');
// ul1[5].insertAdjacentElement('beforeend', ul1[5]);
ul1[5].append(newElem);
newElem.after(li2[9]);