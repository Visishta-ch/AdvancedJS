var userEnteries = document.getElementById('items');

document.getElementById('my-form').addEventListener('submit', function(e)
{
    e.preventDefault();
    var expenseAmount = document.getElementById('amount').value.trim();
    var description = document.getElementById('description').value.trim();
    var category = document.getElementById('category').value.trim();

    var entries = {
        amount: expenseAmount,
        descrpition : description,
        category: category
    };

    console.log(entries);
    localStorage.setItem(entries.amount, JSON.stringify(entries));

    displayEntries(entries);

});

window.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    Object.keys(localStorage).forEach((key) => {
        const entry = JSON.parse(localStorage.getItem(key));
        displayEntries(entry);
    });
});


function displayEntries(entries){
    var newAmount = JSON.parse(localStorage.getItem(entries.amount)).amount;
    console.log(newAmount);
    var newDescription = JSON.parse(localStorage.getItem(entries.amount)).descrpition;
    console.log(newDescription);
    var newCateory = JSON.parse(localStorage.getItem(entries.amount)).category;
    console.log(newCateory);

    var item = document.createElement('li');
    item.className = 'list-items';
    item.setAttribute('id',newAmount);
    item.appendChild(document.createTextNode(newAmount + " " + newDescription + " " + newCateory));
    item.appendChild(document.createTextNode(" "));
    userEnteries.appendChild(item);

    console.log(item);

    /*Edit Entries */

    var editBtn = document.createElement('button');
    editBtn.className = " edit-btn";
    editBtn.appendChild(document.createTextNode('Edit Entries'));
    item.appendChild(editBtn);

    /*Delete */
    var deleteBtn = document.createElement('button');
    deleteBtn.className = " delete-btn";
    deleteBtn.appendChild(document.createTextNode('Delete Entries'));
    item.appendChild(deleteBtn);
    
    /*Edit FUnctionality */
    editBtn.addEventListener("click", function(){
        document.getElementById('amount').value = newAmount;
        document.getElementById('description').value = newDescription;
        document.getElementById('category').value = newCateory;

    
    })
    /*Delete functinality */

    deleteBtn.addEventListener("click", function(){
        localStorage.removeItem(newAmount);
        userEnteries.removeChild(item);
        });
}