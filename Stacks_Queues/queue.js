class Node {
	constructor(value) {
    		this.value = value;
    		this.next = null;
  	}
}

class Queue {
	constructor(){
    		this.first = null;
    		this.last = null;
    		this.length = 0;
  	}//constructor

  	peek() {
		if(this.isEmpty()){
			return;
		}

		return this.first.value;
  	}//peek

  	enqueue(value){

		const newNode = new Node(value);
		if(this.isEmpty()){
			this.first = newNode;
			this.last = newNode;
			this.length++;
			return;
		}

		this.last.next = newNode;
		this.last = newNode;
		this.length++;
		return;
  	}

  	dequeue(){

		if(this.isEmpty()){
			return;
		}

		if(this.length === 1){
			this.first = null;
			this.last = null;
			this.length--;
			return;
		}

		this.first = this.first.next;
		this.length--;
		return;

  	}

  	isEmpty(){
		if(this.length === 0){
			return true;
		}
		return false;
	}
}

const myQueue = new Queue();

//Joy
//Matt
//Pavel
//Samir

module.exports = Queue;
