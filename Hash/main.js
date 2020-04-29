const MyHashTable = require('./myHashTable');


const myHashTable = new MyHashTable(50);

myHashTable.set(2, 10000);
myHashTable.set(5, 54);
myHashTable.set(1, 2);

function firstReoccuringChar(array){

	if(array.length < 1){
		return undefined;
	}
	const mySet = new Set();

	for(let i = 0; i < array.length; i++){

		if(mySet.has(array[i])){
			return array[i]
		}

		mySet.add(array[i]);
	}
return "undefined";
}

console.log(firstReoccuringChar([2,5,1,2,3,5,1,2,4]));
console.log(firstReoccuringChar([2,1,1,2,3,5,1,2,4]));
console.log(firstReoccuringChar([2,3,4,5]));
console.log(firstReoccuringChar(["christian", "soto", "christian"]));
