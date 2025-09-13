let credentials = {
    password: 1234,
    balance: 0
}

function createName(newName){
    credentials.name = newName;
}

export { credentials, createName };
