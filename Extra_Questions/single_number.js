/**
 * @param {number[]} nums
 * @return {number}
 *
 * Given a non-empty array of integers,
 * every element appears twice except for one.
 * Find that single one.
 */

test1 = [2,2,1];
test2 = [4,1,2,1,2];


var singleNumber = function(nums) {

	let cache = new Set();
	let value = 0;

	for(let i = 0; i < nums.length; i++){
		if(cache.has(nums[i])){
			cache.delete(nums[i]);
		}else{
			cache.add(nums[i]);
		}
	}

	for(let item of cache){
		value = item;
	}

	return value;
};

console.log(singleNumber(test2));
