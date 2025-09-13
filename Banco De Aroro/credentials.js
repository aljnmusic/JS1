let credentials = {
    password: 1234,
    balance: 50000,
    AccountNumber: 323232,
    Status: 'Active',
    Currency: 'Aroro Peso',
    Branch: 'Enciso Residencia'
}

function createName(newName){
    credentials.name = newName;
}

export { credentials, createName };
