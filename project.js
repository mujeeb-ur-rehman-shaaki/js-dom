// Simple project

//getting elements using selectors
let search = document.getElementById('filter');
let input = document.getElementById('itemName');
let addForm = document.querySelector('#addForm');
let listItems = document.getElementById('items');


// submitting form eventlistener
addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = input.value;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
    li.appendChild(deleteBtn);

    listItems.appendChild(li);

});

// delete btn event listener

listItems.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        listItems.removeChild(li);
    }
});


// search event listener

search.addEventListener('keyup', (e) => {
    let searchItem = e.target.value.toLowerCase();
    
    let items = document.querySelectorAll('li');
    items.forEach((element) => {
        let itemName = element.firstChild.textContent;

        if (itemName.toLocaleLowerCase().indexOf(searchItem) != -1)
            element.style.display = 'block';
        else
            element.style.display = 'none';

    });

});




