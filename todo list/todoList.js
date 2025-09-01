let addBtn = document.getElementById("addBtn");
let myInput = document.getElementById("myInput");
let myUl = document.getElementById("myUl");


addBtn.addEventListener("click", addNewItem)
window.onload("DOMContentLoaded", loadListFromStorage)

function addNewItem(){
    let inputValue = myInput.value.trim();

    if(inputValue.length === 0){
        alert("Value is required");
        return;
    }

    createListItem()

    // Save the entire list's current state to local storage.
    localStorage.setItem("todolist", JSON.stringify(inputValue));

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

function saveListToStorage(){
    const listItems = document.querySelectorAll('li')
    const listData = []

    listItems.forEach(element => {
        let text = element.textContent.replace('\u00D7', '').trim();
        listData.push({
            text:  text,
            checked: element.checked
        })
    })

    localStorage.setItem('todolist', JSON.stringify(listData));
}

function loadListFromStorage(){
    const savedList = localStorage.getItem('todolist');

    if(saveList){
        const listData = JSON.parse(savedList);

        listData.forEach(element => {
           createListItem(element.text)
        })
    }



}

function handleListClicks(event){
    document.addEventListener('click', (event)=>{
        if(event.target.tagName === 'UL'){
            event.target.classList.toggle("checked")
            localStorage.setItem('todolist', JSON.stringify(event.target.classList.contains('checked')))
        }

        if(event.target.classList.contains('close')){
            let parentList =  event.target.parentElement
            parentList.remove()
            localStorage.setItem('todolist', JSON.stringify(event.target.classList.contains('checked')))
        }
    })
}