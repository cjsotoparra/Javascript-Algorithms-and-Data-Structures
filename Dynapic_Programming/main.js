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

//console.log('1', memoized(5));
//console.log('2', memoized(5));

let cal = 0;

function fibonacci(){
	// make a cache hash table(sacrificing space for time) O(n)
	let cache = {};
	return function fib(n){
		cal++;
		//if number has been already calculated, just return it
		if(n in cache){
			return cache[n];
		}else{
			if(n < 2){
				return n;
			} else {
				//add recurison to cache and return new calculation
				cache[n] = fib(n-1) + fib(n-2);
				return cache[n];
			}
		}
	}
}

const fasterFib = fibonacci();

console.log('DP: ', fasterFib(100));
console.log('calculations: ', cal);
