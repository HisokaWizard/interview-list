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
console.log([3, 4] + 5);
console.log({ s: 3, d: 4 } + 5);
console.log(0 == []);
console.log(0 === []);

//////////////////////////////

Promise.reject('a')
  .catch((p) => p + 'b')
  .catch((p) => p + 'с')
  .then((p) => p + 'd')
  .then((p) => p + 'f')
  .catch((p) => p + 'h')
  .finally((p) => p + 'e')
  .then((p) => console.log(p));

//abdf

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