var clientsNum = prompt('client num?');

var clients = [];

function addClient(name, id, balance) {
    clients.push({ name: name, id: id, balance: balance });

}

function editBalanceByid(id, newbalance) {
    for (var i = 0; i < clients.length; i++) {
        if (clients[i].id == id) { clients[i].balance = newbalance }


    }

}


function deleteClientByid(id) {
    let index = clients.findIndex(item => item.id === id);
    if (index !== -1) {
        clients.splice(index, 1);
        console.log("deleted");
    } else {
        console.log("not found");
    }
}


for (var i = 0; i < clientsNum; i++) {
    var name = prompt('name ')
    var id = prompt('id ')
    var balance = prompt('balance ')
    addClient(name, id, balance)
}
console.log(clients)

console.log(editBalanceByid(2, 300))
console.log(deleteClientByid(1))





/*var arr = [22, 26, 46, 82, 34, 90]
var newnum = prompt('please enter a num')
var bigger = arr.find((item) => item < newnum);
if (bigger) {
    arr.push(newnum);
    console.log(arr)

} else {
    console.log('not bigger enough')
}
*/

/*
var clients = [];

function addClient(Cname, balance, id) {
    var client = {
        Cname: Cname,
        balance: balance,
        id: id

    };
    clients.push(client);
}

function editBalanceById(id, newBalance) {
    var client = clients.find(item => item.id === id);
    if (client) {
        client.balance = newBalance;
        console.log('edited succesfully ');

    } else {
        console.log('user not found')
    }
}

var count = prompt('clients num ?');


for (let i = 0; i < count; i++) {
    let Cname = prompt('client name ');
    let balance = prompt('balance');
    let id = prompt('id ')
    addClient(Cname, balance, id);
}

console.log(clients);

*/
