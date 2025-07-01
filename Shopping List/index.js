let listEl = document.getElementById('list');
let itemInput = document.getElementById('item-input');
let addItemBtn = document.getElementById('add-item-btn');

const shoppingList = []

addItemBtn.addEventListener('click', function(){

    shoppingList.push(itemInput.value)
    render()
    itemInput.value = ''

    if(shoppingList.includes(itemInput.value)){
        listEl.textContent = "No duplicates"
    }
    else{
        shoppingList.push(itemInput.value)
        itemInput.value = ''
    }
})

function render(){
    let html = ''
    for (let item of shoppingList) {
        html += `<li class="list-item">${item}</li>`
    }
    list.innerHTML = html
}

render()