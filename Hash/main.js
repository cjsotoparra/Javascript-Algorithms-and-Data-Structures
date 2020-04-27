const MyHashTable = require('./myHashTable');


const myHashTable = new MyHashTable(50);

myHashTable.set('grapes', 10000);
myHashTable.set('apple', 54);
console.log(myHashTable.get('grapes'));
console.log(myHashTable.get('apple'));
