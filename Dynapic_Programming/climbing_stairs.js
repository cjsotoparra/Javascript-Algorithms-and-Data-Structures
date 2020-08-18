function climbStairs(n){

	if(n===1 || n === 2 || n === 3){
		return n;
	}

	let previous = 2;
	let current = 3;
	let possible = 0;

	for(let i = 3; i < n; i++){

		possible = previous + current;
		previous = current;
		current = possible;
	}

	return possible;
}

console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(6));
console.log(climbStairs(7));
console.log(climbStairs(8));
console.log(climbStairs(9));
console.log(climbStairs(10));
console.log(climbStairs(11));
console.log(climbStairs(12));

