const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", newList);
// window.addEventListener("DOMContentLoaded", loadListFromLocalStorage)

function newList(){
    let li = document.createElement("li");
    let myInput = document.getElementById("myInput");
    let t = document.createTextNode(myInput.value);
    li.appendChild(t);

    if(myInput.value.length === 0){
        alert("Input empty");
    } else {
        document.getElementById("myUl").appendChild(li);
    }

    document.getElementById("myInput").value = "";

    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7")
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for(let i = 0; i < close.length; i++){
        close[i].onclick = function(){
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}


let list = document.getElementById("li");
list.addEventListener("click", function(ev){
    if(ev.target.tagName === "LI"){
        ev.target.classList.toggle("checked")
    }
});