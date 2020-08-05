class Node {
	constructor(value){
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BinarySearchTree{
	constructor(){
		this.root = null;
	}

	insert(value){

		if(!this.root){
			this.root = new Node(value);
			return
		}

                let temp = this.root;
                let prev = null;

                while(temp){
                        if(value < temp.value){
                                prev = temp;
                                temp = temp.left;
                        }else{
                                prev = temp;
                                temp = temp.right;
                        }
                }

		temp = new Node(value);

                if(value < prev.value){
                        prev.left = new Node(value);
                }else{
                        prev.right = new Node(value);
                }
	}

	lookup(value){

		if(!this.root){
			return false;
		}

                let temp = this.root;

                while(temp){

                        if(value < temp.value){
                                temp = temp.left;
                        }else if(value > temp.value){
                                temp = temp.right;
                        }else{
				return temp;
			}
                }
		return false;
	}

	treeMin(tree){

		while(tree){
			tree = tree.left
		}

		return tree;
	}

	remove(value){
  		if (!this.root) {
      			return false;
    		}
   		let currentNode = this.root;
    		let parentNode = null;
    		while(currentNode){
      			if(value < currentNode.value){
        			parentNode = currentNode;
        			currentNode = currentNode.left;
      			} else if(value > currentNode.value){
        			parentNode = currentNode;
        			currentNode = currentNode.right;
      			} else if (currentNode.value === value) {
        			//We have a match, get to work

        			//Option 1: No right child:
        			if (currentNode.right === null) {
          				if (parentNode === null) {
            					this.root = currentNode.left;
          				} else {

            				//if parent > current value, make current left child a child of parent
            					if(currentNode.value < parentNode.value) {
              						parentNode.left = currentNode.left;

			            	//if parent < current value, make left child a right child of parent
            					} else if(currentNode.value > parentNode.value) {
              						parentNode.right = currentNode.left;
            					}
          			}

        		//Option 2: Right child which doesnt have a left child
        		} else if (currentNode.right.left === null) {
          			currentNode.right.left = currentNode.left;
          			if(parentNode === null) {
            				this.root = currentNode.right;
          			} else {

            				//if parent > current, make right child of the left the parent
            				if(currentNode.value < parentNode.value) {
              					parentNode.left = currentNode.right;

            				//if parent < current, make right child a right child of the parent
            				} else if (currentNode.value > parentNode.value) {
              					parentNode.right = currentNode.right;
            				}
          			}

        		//Option 3: Right child that has a left child
        		} else {

          			//find the Right child's left most child
          			let leftmost = currentNode.right.left;
          			let leftmostParent = currentNode.right;
          			while(leftmost.left !== null) {
            				leftmostParent = leftmost;
            				leftmost = leftmost.left;
          			}

          			//Parent's left subtree is now leftmost's right subtree
          			leftmostParent.left = leftmost.right;
          			leftmost.left = currentNode.left;
          			leftmost.right = currentNode.right;

          			if(parentNode === null) {
            				this.root = leftmost;
          			} else {
            				if(currentNode.value < parentNode.value) {
              					parentNode.left = leftmost;
            				} else if(currentNode.value > parentNode.value) {
              					parentNode.right = leftmost;
            				}
          			}
        		}
      			return true;
			}
		}
	}

	bFS(){
		let currentNode = this.root;
		let list = [];
		let queue = [];

		queue.push(currentNode);

		while(queue.length > 0){
			//remove first item and shitf all other items
			currentNode = queue.shift();
			list.push(currentNode.value);

			//does currentNode have left child
			if(currentNode.left){
				queue.push(currentNode.left);
			}

			//does currentNode have right child
			if(currentNode.right){
				queue.push(currentNode.right);
			}
		}

		return list;
	}

	bFSR(queue, list){
		if(!queue.length){
			return list;
		}

		let currentNode = queue.shift();
		list.push(currentNode.value);

		//does currentNode have left child
                if(currentNode.left){
                	queue.push(currentNode.left);
                }

                //does currentNode have right child
                if(currentNode.right){
                	queue.push(currentNode.right);
                }

		return this.bFSR(queue, list);

	}

	dfsInOrder(node){
		if(node == null){
			return;
		}
		this.dfsInOrder(node.left);
		console.log(node.value);
		this.dfsInOrder(node.right);
	}

	dfsPostOrder(node){
                if(node == null){
			return;
		}

                this.dfsPostOrder(node.left);
                this.dfsPostOrder(node.right);
		console.log(node.value);
	}

	dfsPreOrder(node){
                if(node){
			console.log(node.value)
                        this.dfsPreOrder(node.left);
                        this.dfsPreOrder(node.right);
                }
	}

	isBST(node){
		let stack = [];
		let left_child_val = -Number.MAX_VALUE;

		while(stack.length != 0 || node != null){
			while(node != null){
				stack.push(node);
				node = node.left;
			}

			node = stack.pop();

			if(node.value <= left_child_val){
				return false;
			}

			left_child_val = node.value;
			node = node.right
		}

		return true;
	}
}

module.exports = BinarySearchTree;
