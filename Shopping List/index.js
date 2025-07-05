let listEl = document.getElementById('list');
let itemInput = document.getElementById('item-input');
let addItemBtn = document.getElementById('add-item-btn');
let resetBtn = document.getElementById('reset-item-btn')

const shoppingList = []

addItemBtn.addEventListener('click', () => {

    // shoppingList.push(itemInput.value)
    // render()
    // itemInput.value = ''

    if(shoppingList.includes(itemInput.value)){
        listEl.textContent = `${itemInput.value} is already added`
    }
    else{
        shoppingList.push(itemInput.value)
        render()
    }

    itemInput.value = ''
})

resetBtn.addEventListener('click', () => {
    listEl.innerHTML = ''
})

const render = () => {
    let html = ''
    for (let item of shoppingList) {
        html += `<li class="list-item">${item}</li><button id="x">X</button>`
    }
    listEl.innerHTML = html
}

let remove = document.getElementById('x')

remove.addEventListener('click', function(){
    for(let list in shoppingList){
        if(shoppingList[list].includes(itemInput.value)){
            list.remove[shoppingList]()
        }
    }
})
// render()