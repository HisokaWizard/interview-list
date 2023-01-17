const { EventEmitter } = require('events');

class Observer {
  subscribers = new Set();
  emitter = new EventEmitter();
  callbacks = {};
  eventKey = '';
  listenerIsExist = false;

  constructor(eventKey) {
    this.eventKey = eventKey;
  }

  addSubscriber(id) {
    this.subscribers.add(id);
  }

  removeSubscriber(id) {
    if (this.callbacks[id]) {
      this.emitter.off(this.eventKey, this.callbacks[id]);
      this.callbacks[id] = null;
    }
    this.subscribers.delete(id);
  }

  addHandler(id, callback) {
    if (this.subscribers.has(id) && !this.callbacks[id]) {
      this.callbacks[id] = callback;
      this.emitter.on(this.eventKey, this.callbacks[id]);
    }
  }

  broadcast(data) {
    this.emitter.emit(this.eventKey, data);
  }
}

const observer = new Observer('phones');

observer.addSubscriber('Petr');
observer.addSubscriber('Pasha');
observer.addSubscriber('Tonya');
observer.addSubscriber('Nadya');
observer.addSubscriber('Sasha');

observer.addHandler('Petr', (data) => {
  console.log('Petr: ', data);
});
observer.addHandler('Pasha', (data) => {
  console.log('Pasha: ', data);
});
observer.addHandler('Tonya', (data) => {
  console.log('Tonya: ', data);
});
observer.addHandler('Nadya', (data) => {
  console.log('Nadya: ', data);
});
observer.addHandler('Sasha', (data) => {
  console.log('Sasha: ', data);
});

observer.broadcast({ value: 'Some data to share for all subscribers' });
observer.broadcast({ value: 'update Data with new value' });

observer.removeSubscriber('Nadya');

observer.broadcast({ value: 'Check subscribers after one remove must be 4 users' });
