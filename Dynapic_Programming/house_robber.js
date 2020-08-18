nums = [4,1,2];
num2 = [3,1,2,5,4,2];

var rob = function(nums){
	const length = nums.length;
	if(length === 0){
		return 0;
	}else if(length === 1){
		return nums[0];
	}else if(length === 2){
	        if(nums[0] > nums[1]){
	                return nums[0];
        	} else {
                	return nums[1];
        	}
	}

	let steal = [];

	steal.push(nums[0]);
	steal.push(nums[1]);

	let i = 2;

	while(i < length){
		if((steal[i-2] + nums[i]) > steal[i-1]){
			steal.push(steal[i-2] + nums[i]);
		}else{
			steal.push(steal[i-1]);
		}
		i++;
	}

	return steal[steal.length-1];
}

//works but it is slow
function houseRobberRecursive(arr){
	function stealFromHouse(index){
		if(index >= arr.length){
			return 0;
		}

		return Math.max(arr[index] + stealFromHouse(index+2), stealFromHouse(index + 1));
	}

	return stealFromHouse(0);
}

function houseRobber1(houses){
	let max_gold = [];

	for(let i = 0; i<houses.length; i++){
		let current = houses[i];
		let prevMax = max_gold[i-1] || 0;
		let twoBackMax = max_gold[i-2] || 0;
		max_gold.push(Math.max(current + twoBackMax, prevMax));
	}

	return max_gold[houses.length -1];
}

console.log(houseRobber1(num2));
