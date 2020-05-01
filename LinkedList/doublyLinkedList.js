class Node {
	constructor(data){
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {

	constructor(){
		this.length = 0;
		this.head = null;
		this.tail = this.head;
	}

	getIndex(index){

		let i = 0;
		let temp = this.head;
		while(i < index){
			temp = temp.next;
			i++;
		}

		return temp.data;

	}

	insertAtIndex(index, data){
		if(index < 0 || index > this.length){
			console.log("enter a valid index");
			return;
		}

		//insert at the head
		if(index == 0){
			this.prepend(data);
			return;
		}

		//insert at the tail
		if(index === this.length){
			this.append(data);
			return;
		}

		//insert at given index
		let i = 0;
                let temp = this.head;
		let newNode = new Node(data);
                while(i < index){
                        temp = temp.next;
                        i++;
                }

		temp = temp.prev;
		newNode.next = temp.next;
		newNode.prev = temp;
		temp.next = newNode;
		this.length++;
	}

	removeAtIndex(index){

		if(index < 0 || index > this.length-1){
			console.log("Enter a valid index");
			return;
		}

		if(index === 0){
			this.head = this.head.next;
			delete this.head.prev;
			this.length--;
			return;
		}

		if(index === this.length-1){
			this.tail = this.tail.prev;
			delete this.tail.next;
			this.length--;
			return;
		}

		let temp = this.head;
		let i = 0;
		while(i < index){
			temp = temp.next;
			i++;
		}

		//move pointer to temp.next;
		let temp2 = temp.next;

		//move back one node and adjust pointer to point to skip next to next node
		temp = temp.prev;
		temp.next = temp.next.next;

		//delete data to be removed at index
		delete temp2.prev;

		//update prev pointers and adjust length
		temp2.prev = temp;
		this.length--;
	}

	prepend(data){

		if(this.length === 0){
			this.head = new Node(data);
			this.tail = this.head;
			this.length++;
			return;
		}

		let newNode = new Node(data);
		let temp = this.head;
		this.head = newNode;
		newNode.next = temp;
		temp.prev = newNode;
		this.length++;
	}

	append(data){

		if(this.length === 0){
			this.tail = new Node(data);
			this.head = this.tail;
			this.length++;
			return;
		}

		let newNode = new Node(data);
		let temp = this.tail;
		this.tail = newNode;

		//update pointers
		temp.next = newNode;
		newNode.prev = temp;
		this.length++;
	}

	isEmpty(){
		if(!this.head){
			return true;
		}
		return false;
	}

	reverseList(){

		if(this.length === 1){
			return;
		}

		let index = this.length/2;
		let i = 0;
		let tempH = this.head;
		let tempT = this.tail;
		let temp = 0;

		while(i < index){
			//exchange information
			temp = tempT.data;
			tempT.data = tempH.data;
			tempH.data = temp;

			//move pointers
			tempH = tempH.next;
			tempT = tempT.prev;
			i++;
		}
	}

	printList(){

		const arr = [];

		if(this.isEmpty()){
			return;
		}

		let temp = this.head;
		while(temp){
			arr.push(temp.data);
			temp = temp.next;
		}

		return arr;
	}

	printBack(){
		const arr = [];
		if(this.isEmpty()){
			return;
		}

		let temp = this.tail;
		while(temp){
			arr.push(temp.data);
			temp = temp.prev;
		}

		return arr;
	}
}

module.exports = DoublyLinkedList;
