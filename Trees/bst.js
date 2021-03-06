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
}

module.exports = BinarySearchTree;
