const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, low, high){

	if(low < high){
		pIndex = partition(array,low,high);
		quickSort(array, low, pIndex-1);
		quickSort(array, pIndex+1, high);
	}
}

function partition(array, low, high){

	let pivot = array[high];
	let i = low-1;
	let temp = 0;
	for(let j=low; j < high; j++){
		//if current element is smaller than the pivot
		if(array[j] < pivot){
			i++;
			//swap arr[i] and array[j]
			temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}

	//swap array[i+1] and array[high] or pivot
	temp = array[i+1];
	array[i+1] = array[high];
	array[high] = temp;

	return i+1;
}

console.log(numbers);
quickSort(numbers, 0, numbers.length-1);
console.log(numbers);
