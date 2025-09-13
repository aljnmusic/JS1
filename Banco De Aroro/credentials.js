let credentials = {
    password: 1234,
    balance: 50000,
    AccountNumber: 323232,
    Status: 'Active',

}

function createName(newName){
    credentials.name = newName;
}

export { credentials, createName };
