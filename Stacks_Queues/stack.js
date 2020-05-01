class Node {
	constructor(data){
		this.data = data;
		this.next = null;
	}
}

class Stack {

	constructor(){
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	peek() {

		if(this.isEmpty()){
			return;
		}

		return this.top.data;
	}

	push(data){
		if(this.isEmpty()){
			this.top = new Node(data);
			this.bottom = this.top;
			this.top.next = this.bottom;
			this.length++;
			return;
		}

		let newNode = new Node(data);
		newNode.next = this.top;
		this.top = newNode;

		if(this.length === 1){
			this.bottom.next = null;
			this.length++;
			return;
		}

		this.length++;
		return;
	}

	pop(){
		if(this.isEmpty()){
			return;
		}

		if(this.length === 1){
			this.top = null;
			this.bottom = null;
			this.length--;
			return;
		}

		let temp = this.top;
		this.top = this.top.next;
		temp = null;
		this.length--;
	}

	isEmpty(){
		if(this.length === 0){
			return true;
		}
		return false;
	}

	printStack(){

		let temp = this.top;
		let arr = [];
		while(temp){
			arr.push(temp.data);
			temp = temp.next;
		}

		return arr;
	}
}


module.exports = Stack;
