const MyHashTable = require('./myHashTable');


const myHashTable = new MyHashTable(50);

myHashTable.set('grapes', 10000);
myHashTable.set('apple', 54);
myHashTable.set('oranges', 2);
console.log(myHashTable.get('grapes'));
console.log(myHashTable.get('apple'));
console.log(myHashTable.keys());
