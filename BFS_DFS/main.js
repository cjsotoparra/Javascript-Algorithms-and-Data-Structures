const BinarySearchTree = require("./bst");

const myBST = new BinarySearchTree();

myBST.insert(9);
myBST.insert(4);
myBST.insert(6);
myBST.insert(1);
myBST.insert(20);
myBST.insert(170);
myBST.insert(15);

const max = Number.MAX_SAFE_INTEGER;
const min = Number.MIN_SAFE_INTEGER;

//console.log(myBST.isValid(myBST, min, max));

const test = new BinarySearchTree();


console.log(test.isBST());

function traverse(node) {
  	const tree = { value: node.value };
  	tree.left = node.left === null ? null : traverse(node.left);
  	tree.right = node.right === null ? null : traverse(node.right);
  	return tree;
}
