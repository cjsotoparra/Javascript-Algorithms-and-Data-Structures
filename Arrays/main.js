const MyArray = require('./myArray');

const newArray = new MyArray();

	/*newArray.push(0);
	newArray.push(3);
	newArray.push(4);
	newArray.push(31);*/
console.log(newArray);

const newArray2 = new MyArray();

newArray2.push(4);
newArray2.push(6);
newArray2.push(30);

console.log(newArray2);

function mergeSortedArrays(arr1, arr2){

	if(arr1.length === 0){
		console.log(arr2);
	} else if(arr2.length === 0){
		console.log(arr1);
	} else {
		const sortedArray = new MyArray();
		let index1 = 0;
		let index2 = 0;

		while(true){

			if(index1 > arr1.length -1 || index2 > arr2.length -1){
				break;
			}

			if(arr1.get(index1) <= arr2.get(index2)){
				sortedArray.push(arr1.get(index1));
				index1 += 1;
			}else {
				sortedArray.push(arr2.get(index2));
				index2 += 1;
			}
		}

		if(arr1.length > arr2.length){

			for(let i =index1; i < arr1.length; i++){
				sortedArray.push(arr1.get(index1));
			}

		} else {

			for(let i =index2; i < arr2.length; i++){
                        	sortedArray.push(arr2.get(index2));
                	}

		}

		console.log(sortedArray);
	}
}

mergeSortedArrays(newArray, newArray2);
