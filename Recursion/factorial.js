
function findFactorialRecursive(number){
	if(number === 2){
		return number;
	}

	return number * findFactorialRecursive(number -1);
}

function findFactorialIterative(number){

	let answer = 1;
	let i = 1;
	while(i < number){
		answer = answer * (i+1);
		i++;
	}

	return answer;
}

console.log(findFactorialIterative(4));
console.log(findFactorialRecursive(5));
