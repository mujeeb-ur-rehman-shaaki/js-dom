// Traversing the DOM
console.log('traversing the DOM ***************************');

// parent node
console.log('parentNode property*******************************');
let listItems = document.querySelector('#items');
console.log(listItems);
let listItemsParent = listItems.parentNode;
listItemsParent.style.backgroundColor = '#5bc0de';
listItemsParent.parentNode.style.backgroundColor = '#292b2c';

// parent node and parent element are almost same

// child node
console.log('childNodes property******************************');
let listItemsChildNodes = listItems.childNodes;
console.log(listItemsChildNodes);
console.log(listItemsChildNodes[1]);

listItemsChildNodes.forEach((element) => {
    console.log(element);
});


// children
console.log('children property*********************************');
listItems = document.getElementById('items');
listItemChildrens = listItems.children;
console.log(listItemChildrens);

for (let child of listItemChildrens)
    child.style.color = 'blue';


// firstChild
console.log(listItems.firstChild);
// firstElementChild
console.log(listItems.firstElementChild);

// lastChild
console.log(listItems.lastChild);
// lastElementChild
console.log(listItems.lastElementChild);
listItems.lastElementChild.style.fontWeight = 'bold';


// siblings
console.log('siblings************************************');
 
// nextSibling
let titleNextSibling = listItems.nextSibling;
console.log(titleNextSibling);

// nextElementSibling
let titleNextElementSibling = listItems.nextElementSibling;
console.log(titleNextElementSibling);


// previousSibling
let titlePreviousSibling = listItems.previousSibling;
console.log(titlePreviousSibling);

// previousElementSiling
let titlePreviousElementSibling = listItems.previousElementSibling;
titlePreviousElementSibling.style.fontWeight = 'bold';
console.log(titlePreviousElementSibling);


// Creating elements
console.log('creating elements*******************************');

let newItem = document.createElement('li');
newItem.className = 'list-group-item';
newItem.innerText = 'Created usin JS-DOM';
newItem.style.color = 'red';
listItems.appendChild(newItem);
console.log(newItem);







