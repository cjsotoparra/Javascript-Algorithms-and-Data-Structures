const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, 17];

function mergeSort (array) {
	if (array.length === 1) {
    		return array
  	}

  	// Split Array in into right and left
  	const length = array.length;
  	const middle = Math.floor(length / 2)
	const left = new Array();
	const right = new Array();

	for(let i = 0; i < middle; i++){
		left[i] = array[i];
	}

	let k = 0;
	for(let j = middle; j < array.length; j++){
		right[k] = array[j];
		k++;
	}

  	return merge(mergeSort(left),mergeSort(right))
}

function merge(left, right){
	const result = [];
  	let leftIndex = 0;
  	let rightIndex = 0;

  	while(leftIndex < left.length && rightIndex < right.length){
     		if(left[leftIndex] < right[rightIndex]){
       			result.push(left[leftIndex]);
       			leftIndex++;
     		} else{
       			result.push(right[rightIndex]);
       			rightIndex++
    		}
  	}

  	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


const answer = mergeSort(numbers);
console.log(answer);
