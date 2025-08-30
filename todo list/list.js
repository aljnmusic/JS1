let addBtn = document.getElementById("addBtn");
let myInput = document.getElementById("myInput");
let myUl = document.getElementById("myUl");

function newList(){
    const inputValue = myInput.value.trim();

    if(inputValue.length === 0){
        alert("Please enter text to add!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = inputValue;

    myUl.appendChild(li);

    myInput.value = "";

    const span = document.createElement("span");
    span.textContent = "\u00D7";
    span.className = "close";

    li.appendChild(span);

}

addBtn.addEventListener("click", newList);

myUl.addEventListener("click", function(ev){
    if(ev.target.tagName === "LI"){
        ev.target.classList.toggle("checked");
    }

    if(ev.target.className === "close"){
        const div = ev.target.parentElement;
        div.style.display = "none";
    }
})