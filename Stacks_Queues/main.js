const Stack = require("./stack");

const myStack = new Stack();

myStack.push("google");
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
