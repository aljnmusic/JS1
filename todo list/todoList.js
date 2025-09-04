let addBtn = document.getElementById("addBtn");
let myInput = document.getElementById("myInput");
let myUl = document.getElementById("myUl");


addBtn.addEventListener("click", addNewItem)
myUl.addEventListener('click', handleListClicks);
myInput.addEventListener("keypress", function(){
    if(event.key === "Enter"){
        addNewItem()
    }
})
window.addEventListener("DOMContentLoaded", loadListFromStorage)

function addNewItem(){
    let inputValue = myInput.value.trim();

    if(inputValue.length === 0){
        alert("Value is required");
        return;
    }

    createListItem(inputValue)
    saveListToStorage()

    myInput.value = '';
}

function createListItem(text){
    let li = document.createElement("li");
    li.textContent = text;
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
            checked: element.classList.contains('checked')
        })
    })

    localStorage.setItem('todolist', JSON.stringify(listData));
}

function loadListFromStorage(){
    const savedList = localStorage.getItem('todolist');

    if(savedList){
        const listData = JSON.parse(savedList);

        listData.forEach(element => {
           createListItem(element.text)
        })
    }

}

function handleListClicks(event){
        if(event.target.tagName === 'LI'){
            event.target.classList.toggle("checked")
            saveListToStorage()
        }

        if(event.target.classList.contains('close')){
            let parentList =  event.target.parentElement
            parentList.remove()
            saveListToStorage()
        }
}