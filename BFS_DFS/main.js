const BinarySearchTree = require("./bst");

const myBST = new BinarySearchTree();

myBST.insert(9);
myBST.insert(4);
myBST.insert(6);
myBST.insert(20);
myBST.insert(170);
myBST.insert(15);
myBST.insert(1);
//console.log(myBST.remove(9));
//console.log(JSON.stringify(traverse(myBST.root)))

console.log(myBST.bFS())
console.log(myBST.bFSR([myBST.root], []));
function traverse(node) {
  	const tree = { value: node.value };
  	tree.left = node.left === null ? null : traverse(node.left);
  	tree.right = node.right === null ? null : traverse(node.right);
  	return tree;
}
