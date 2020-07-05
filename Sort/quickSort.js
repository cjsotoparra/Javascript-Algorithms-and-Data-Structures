function quickSort(A, p, r){

	if(p < r){
		q = partition(A,p,r);
		quickSort(A, p, q-1);
		quickSort(A, q+1, r);
	}
}

function partition(A, p, r){

	let x = A[r];
	let i = p-1;
	let temp = 0;
	for(let j=p; j < r-1; j++){
		if(A[j] <= x){
			i = i+1;
			temp = A[i];
			A[i] = A[j];
			A[j] = temp;
		}
	}

	temp = A[i+1];
	A[i+1] = A[r];
	A[r] = A[i+1];
	return i+1;
}
