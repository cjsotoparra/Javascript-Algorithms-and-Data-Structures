const doublyLinkedList = require("./doublyLinkedList.js");

ll = new doublyLinkedList();

//ll.append(1);
//ll.append(0);
ll.append(-1);
ll.append(5);
ll.append(16);
ll.prepend(-20);

//console.log(ll);
//ll.printList();
//console.log(ll.getIndex(2));
ll.insertAtIndex(4, 25);
ll.removeAtIndex(2);
console.log("");
console.log(ll.printList());
ll.reverseList();
console.log(ll.printList());
