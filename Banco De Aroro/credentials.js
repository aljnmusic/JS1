let credentials = {
    password: 1234
}

function createName(newName){
    credentials.name = newName;
}

export { credentials, createName };
