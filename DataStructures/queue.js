/**
 * Queue - data structure as list where items moving works by FIFO - first in first out
 */

class Queue {
  _queue = [];
  constructor() {}

  addNext(item) {
    this._queue.push(item);
  }

  getNext() {
    if (this._queue.length === 0) return null;
    return this._queue.shift();
  }

  getQueue() {
    return this._queue;
  }
}

const queue = new Queue();

stack.addNext(1);
stack.addNext(2);
stack.addNext(3);
stack.addNext(4);
console.log(stack.getNext());
console.log(stack.getNext());
stack.addNext(5);
console.log(stack.getNext());
console.log(stack.getQueue());
stack.addNext(6);
console.log(stack.getNext());
console.log(stack.getNext());
stack.addNext(7);
console.log(stack.getNext());
console.log(stack.getQueue());
console.log(stack.getNext());
console.log(stack.getQueue());
