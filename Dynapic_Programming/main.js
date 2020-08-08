function addTo80(n){
	return n+80;
}

function memoizedAddTo80(){
	let cache = {}
	return function(n){
		//if n exists in cache
		if(n in cache){
			console.log('here');
			return cache[n];
		}else {
			console.log('long time');
			cache[n] = n + 80;
			return cache[n];
		}
	}
}

const memoized = memoizedAddTo80()

console.log('1', memoized(5));
console.log('2', memoized(5));

let cal = 0;
function fibonacci(n){
	cal++;
	if(n <2){
		return n;
	}

	return fibonacci(n-1) + fibonacci(n-2);
}

fibonacci(40);

console.log(cal);
