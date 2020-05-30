function fibonacciRecursive(n){

	if(n <= 1 ){
		return n;
	}

	return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

function fibonacciIterative(n){

	if(n <= 1){
		return n;
	}

	if(n === 2){
		return (n-1) + (n-2);
	}

	let i = 3;
	let first = 1;
	let second = 1;
	answer = first + second;
	while(i < n){

		first = second;
		second = answer;
		answer = first + second;
		i++;
	}

	return answer
}

console.log("Recursive");
console.log(fibonacciRecursive(0))
console.log(fibonacciRecursive(1))
console.log(fibonacciRecursive(2))
console.log(fibonacciRecursive(3))
console.log(fibonacciRecursive(4))
console.log(fibonacciRecursive(5))
console.log(fibonacciRecursive(6))
console.log(fibonacciRecursive(7))
console.log(fibonacciRecursive(8))
console.log(fibonacciRecursive(9))
console.log(fibonacciRecursive(10));
console.log("Iterative");
console.log(fibonacciIterative(0));
console.log(fibonacciIterative(1));
console.log(fibonacciIterative(2));
console.log(fibonacciIterative(3));
console.log(fibonacciIterative(4));
console.log(fibonacciIterative(5));
console.log(fibonacciIterative(6));
console.log(fibonacciIterative(7));
console.log(fibonacciIterative(8));
console.log(fibonacciIterative(9));
console.log(fibonacciIterative(10));
