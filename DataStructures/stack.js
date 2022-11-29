/**
 * Stack - data structure as list where items moving works by LIFO - last in first out
 */

class Stack {
  _stack = [];
  constructor() {}

  addNext(item) {
    this._stack.push(item);
  }

  getNext() {
    if (this._stack.length === 0) return null;
    return this._stack.pop();
  }

  getStack() {
    return this._stack;
  }
}

const stack = new Stack();

stack.addNext(1);
stack.addNext(2);
stack.addNext(3);
stack.addNext(4);
console.log(stack.getNext());
console.log(stack.getNext());
stack.addNext(5);
console.log(stack.getNext());
console.log(stack.getStack());
stack.addNext(6);
console.log(stack.getNext());
console.log(stack.getNext());
stack.addNext(7);
console.log(stack.getNext());
console.log(stack.getStack());
console.log(stack.getNext());
console.log(stack.getStack());
