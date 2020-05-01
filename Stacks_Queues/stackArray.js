class StackArray {

	constructor(){
		this.arr = [];
	}

	peek() {

		if(this.isEmpty()){
			return;
		}

		return this.arr[this.arr.length-1];
	}

	push(data){
		this.arr.push(data);
	}

	pop(){
		this.arr.pop();
	}

	isEmpty(){
		if(this.length === 0){
			return true;
		}
		return false;
	}

}

module.exports = StackArray;
