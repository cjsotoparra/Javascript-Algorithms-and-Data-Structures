const arr = [7,1,5,3,6,4];
const arr2 = [7,6,4,3,1];
const arr3 = [2,1,2,1,0,1,2];
const arr4 = [3,2,6,5,0,3];
const arr5 = [1,2,4,2,5,7,2,4,9,0,9];

let stock = {};
stock.profit = 0;

function maxProfit(prices){
	let stock = {};
	stock.profit = 0;
	stock.setMin = false;
	stock.setMax = false;
	let maxP = 0;

	debugger;

	for(let i = 0; i < prices.length; i++){

		//check to see if we have a min first
		if(stock.setMin === false){
			stock.min = prices[i];
			stock.setMin = true;

		//check if there is a lower price
		} else if(stock.min > prices[i]){

			if(i != prices.length-1){
				stock.min = prices[i];

				//delete max price
				if(stock.max){
					delete stock.max;
					stock.setMax = false;
				}
			}

		//check to see if there is a higher price
		}else if(stock.setMax === false){
			stock.max = prices[i];

			if(maxP < stock.max-stock.min){
				//check to see if we have higher profit with new
				maxP = stock.max - stock.min;
				stock.profit = maxP;
				stock.setMax = true;
			}

		}else if(stock.max < prices[i]){
			stock.max = prices[i];

			//check if we can get more profit
			if(maxP < stock.max-stock.min){
				maxP = stock.max-stock.min;
				stock.profit = maxP;
			}
		}

	}

	//console.log(stock.min)
	return stock.profit;
}

console.log(maxProfit(arr));
console.log(maxProfit(arr2));
console.log(maxProfit(arr3));
console.log(maxProfit(arr4));
console.log(maxProfit(arr5));
