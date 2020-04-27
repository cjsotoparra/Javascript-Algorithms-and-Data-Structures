class MyArray {

	constructor(){
		this.length = 0;
		this.data = {};
	}

	get(index){
		return this.data[index];
	}

	push(item){
		this.data[this.length] = item;
		this.length += 1;
	}

	pop(){
		if(this.length === 0){
			return;
		}

		const lastItem = this.data[this.length-1];
		delete this.data[this.length-1];
		this.length += -1;
		return lastItem;
	}

	del(index){
		const item = this.data[index];
		this.shiftItems(index);
		this.length += -1;
	}

	shiftItems(index){

		for(let i = index; i < this.length - 1; i++){
			this.data[i] = this.data[i+1];
		}

		delete this.data[this.length -1];
	}

	reverse(){

		const index = this.length/2;
		let temp;

		for(let i = 0; i < index; i++){

			temp = this.data[i];
			this.data[i] = this.data[this.length-1-i]
			this.data[this.length-1-i] = temp;
		}
	}
}

module.exports = MyArray;
