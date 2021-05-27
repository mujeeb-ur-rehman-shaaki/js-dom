// Document object

// accessing html elements in js
console.log('document object properties and methods*********************');
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);
console.log(document.all);   //depricated property

console.log(document.forms);

// Selectors
console.log('selectors**********************');

// getElementById('id')
console.log(`getElementById('id')******************`)


let headerTitle = document.getElementById('header-title');
console.log(headerTitle);
console.log(headerTitle.innerText);
headerTitle.textContent = 'Hello World';
headerTitle.style.color = 'black';
headerTitle.style.fontWeight = 'bold';


// getElementsByClassName('className')
console.log(`getElementsByClassName('className')******************`)

let listItems = document.getElementsByClassName('list-group-item');
console.log(listItems);

for (let element of listItems)
    element.style.color = 'red';
    


// getElementsByTagName('tabName')
console.log(`getElementsByTagName('tagName')******************`)

let header = document.getElementsByTagName('header')[0];
console.log(header);
header.style.borderBottom = '3px solid black';


// querySelector('id/class/tag')
console.log(`querySelector('id/class/tag')*****************`);

let firstTitle = document.querySelector('.title');
console.log(firstTitle);  //it will get the first item from list

let submit = document.querySelector('input[type="submit"]');

console.log(submit);
console.log(submit.value);
submit.style.backgroundColor = 'gray';
submit.style.border = 'none';

let lastItem = document.querySelector('.list-group-item:last-child');

console.log(lastItem);
lastItem.style.backgroundColor = 'gray';
lastItem.style.color = 'black';


let secondItem = document.querySelector('.list-group-item:nth-child(2)');
console.log(secondItem);
secondItem.style.fontWeight = 'bold';
secondItem.style.color = 'blue';


// querySelectorAll('')
console.log(`querySelectorAll('id/class/tag')*****************`);

let allTitles = document.querySelectorAll('.title');
console.log(allTitles);
allTitles.forEach(element => {
    console.log(element.innerText);
}); 





