const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}<>?"
let newEl = document.getElementById("new-el")
let passLength = 15

const randomPassword = () => {
    let password = ""
    if (passLength){
        for(let i = 0; i < char.length; i++){
            let charindex = Math.floor(Math.random() * char.length)
            password += char[charindex]
        }
    }
    newEl.textContent = password.substring(0, 15)
}