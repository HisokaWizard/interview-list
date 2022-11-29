let iterations = 0;

[1, 2, 3, 4].concat();

const quickSorting = (array) => {
  if (array.length <= 1) return array;

  const baseItemIndex = Math.floor(array.length / 2);
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < array.length; i++) {
    iterations++;
    if (i === baseItemIndex) continue;
    if (array[i] > array[baseItemIndex]) {
      rightArr.push(array[i]);
    }
    if (array[i] < array[baseItemIndex]) {
      leftArr.push(array[i]);
    }
  }

  return [...quickSorting(leftArr), array[baseItemIndex], ...quickSorting(rightArr)];
};

const array = [
  2, 4, 3, 564, 32, 53, 134, 54, 95, 43, 23, 56, -566, 564, 243, -32, -56, 221, 56, 235, 676,
];

console.log(quickSorting(array));
console.log(iterations);
