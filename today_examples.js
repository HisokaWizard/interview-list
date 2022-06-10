// 06/06/2022

// console.log(Boolean(null)); // false
// console.log(Boolean('Hello')); // true
// console.log(Boolean({})); // true
// console.log(Boolean(NaN)); // false
// console.log('' + 1 + 0 + 7); // '107'
// console.log('' - 1 - 0 + 7); // 6
// console.log(null * 11); // '0'
// console.log(undefined + 11); // NaN
// console.log([3, 4] + 5); // '3,45'
// console.log({ s: 3, d: 4 } + 5); //[object Object]5
// console.log('2' == 2); // true
// console.log('2' === 2); // false
// console.log(0 == []); // true
// console.log(0 === []); // false

console.log(Boolean(null));
console.log(Boolean({}));
console.log('' - 1 - 0 + 7);
console.log(undefined + 11);
console.log({ s: 3, d: 4 } + 5);
console.log(0 == []);
console.log(0 === []);

///////////////////////////////////////
// let a = 42;
// let b = a;
// b += 100;
// console.log('a', a); // 42
// console.log('b', b); // 142

// let c = [1, 2, 3, 4, 5];
// let d = c;
// d.push(6);
// console.log('c', c); // [1, 2, 3, 4, 5, 6]
// console.log('d', d); // [1, 2, 3, 4, 5, 6]
// let e = [1, 2, 3, 4, 5, 6];
// console.log(c === d); // true
// console.log(e === c); // false

let a = 42;
let b = a;
b += 100;
console.log('a', a);
console.log('b', b);

let c = [1, 2, 3, 4, 5];
let d = c;
d.push(6);
console.log('c', c);
console.log('d', d);
let e = [1, 2, 3, 4, 5, 6];
console.log(c === d);
console.log(e === c);

//////////////////////////////

console.log('1');

setTimeout(() => console.log('2'), 1);

let promise = new Promise((resolve) => {
  console.log('3');
  resolve();
});

promise.then(() => console.log('4'));

setTimeout(() => console.log('5'));

console.log('6');

// 1
// 3
// 6
// 4
// 2
// 5

console.log('///////////////////////');
setTimeout(() => console.log('a'));

Promise.resolve()
  .then((first) => {
    console.log('first:', first);
    return 'b';
  })
  .then(
    Promise.resolve().then((second) => {
      console.log('second: ', second);
      return 'c';
    })
  )
  .then((third) => console.log('third:', third));

console.log('d');

// d
// undefined
// undefined
// b
// a
