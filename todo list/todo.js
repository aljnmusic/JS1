const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", newList);
// window.addEventListener("DOMContentLoaded", loadListFromLocalStorage)

function newList(){
    let li = document.createElement("li");
    let myInput = document.getElementById("myInput");
    let t = document.createTextNode(myInput.value);
    li.appendChild(t);

    if(myInput.value.length == 0){
        alert("Input empty");
    } else {
        document.getElementById("myUl").appendChild(li);
    }

    document.getElementById("myInput").value = "";
}