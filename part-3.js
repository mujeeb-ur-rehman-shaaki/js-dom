// Event listener

console.log('adding element***********************************');
let mainContainer = document.querySelector('#main');
console.log(mainContainer);

let button = document.createElement('button');
console.log(button);
button.className = 'btn btn-dark btn-block';
button.id = 'change';
button.innerHTML = 'Click Here';

// adding to DOM
mainContainer.appendChild(button);


// adding event listener to button

console.log('addEventListener***********************************');
let buttonElement = document.getElementById('change');
console.log(buttonElement);

buttonElement.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = 'blue';
    e.target.style.color = 'white';
});

buttonElement.addEventListener('mouseleave', (e) => {
    e.target.style = 'none';
});

buttonElement.addEventListener('click', (e) => {
    document.querySelector('#header-title').innerHTML = 'Changed';
});


// adding event listener to input field
let inputElement = document.querySelector('input[type="text"]');
console.log(inputElement);

inputElement.addEventListener('keyup', (e) => {
    if (e.target.value.length < 5)
        e.target.style.borderColor = 'red';
    else
        e.target.style = 'none';
});


// adding a div

let newDiv = document.createElement('div');
newDiv.style.width = '100%';
newDiv.style.height = '200px';
newDiv.style.backgroundColor = 'lightgray';
newDiv.style.marginTop = '4px';
newDiv.id = 'colorPicker';
console.log(newDiv);
mainContainer.appendChild(newDiv);

let colorPicker = document.getElementById('colorPicker');
console.log(colorPicker);
colorPicker.addEventListener('mousemove', (e) => {
    e.target.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+',50)';
});














