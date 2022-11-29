/**
 * Hash table is pair [key] -> value;
 *
 * Collision - effect when we have some key to one value - it is side effect, which can create any troubles during the usabilty
 *
 * JS has hash-table structure - Map
 * but here we create our own
 */

class HashTable {
  constructor() {}

  add(key, value) {
    this[key] = value;
  }

  get(key) {
    return this[key];
  }
}

const hashTable = new HashTable();

hashTable.add('Petr', { sex: 'male', age: 29 });
hashTable.add('Tonya', { sex: 'female', age: 24 });

console.log(hashTable.get('Petr'));
console.log(hashTable.get('Tonya'));
