nums = [4,1,2];

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

console.log(rob(nums));
