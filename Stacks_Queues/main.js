const Stack = require("./stack");
const StackArray = require("./stackArray");

const myStack = new Stack();

/*myStack.push("google");
//console.log(myStack);
myStack.push("discord");
myStack.push("Udemy");

console.log(myStack.printStack());
console.log("peek() = " + myStack.peek());
console.log("pop was called");
myStack.pop();
console.log("peek() is now = " + myStack.peek());
console.log(myStack.length);
console.log(myStack);
myStack.pop();
console.log(myStack);
myStack.pop()
console.log(myStack);
*/

const stack2 = new StackArray();

stack2.push("google");
stack2.push("discord");
stack2.push("Udemy");
console.log(stack2.peek());
console.log(stack2.pop());
