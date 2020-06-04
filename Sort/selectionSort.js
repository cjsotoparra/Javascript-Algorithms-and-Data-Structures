const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {

	let smallest = 0;
	let temp = 0;
	let index = 0;
	for(let i = 0; i < array.length; i++){
		smallest = array[i];
		for(let j = i+1; j<array.length; j++){
			if(array[j] < smallest){
				//console.log(smallest);
				smallest = array[j];
				index = j;
			}
		}
		temp = array[i];
		array[i] = array[index];
		array[index] = temp;

		//console.log("smallest is = " + smallest + " and index is at " + index);
	}
}

console.log(numbers);
selectionSort(numbers);
console.log(numbers);
