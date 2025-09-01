let addBtn = document.getElementById("addBtn");
let myInput = document.getElementById("myInput");
let myUl = document.getElementById("myUl");



function addNewItem(){
    let inputValue = myInput.value.trim();

    if(inputValue.length === 0){
        alert("Value is required");
        return;
    }

    createListItem()

    // Save the entire list's current state to local storage.
    localStorage.setItem("list", JSON.stringify(inputValue));

    myInput.value = '';
}

function createListItem(text){
    let li = document.createElement("li");
    myUl.appendChild(li);

    let span = document.createElement("span");
    span.textContent = "\u00D7";
    span.className = "close";

    li.appendChild(span);
}