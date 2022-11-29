let iterations = 0;

const selectSorting = (array) => {
  if (!Array.isArray(array) || array.length === 0) return [];

  let minItemIndex = 0;

  for (let i = 0; i < array.length; i++) {
    minItemIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minItemIndex]) {
        minItemIndex = j;
      }
      iterations++;
    }
    const tmp = array[minItemIndex];
    array[minItemIndex] = array[i];
    array[i] = tmp;
  }

  return array;
};

const array = [
  2, 4, 3, 564, 32, 53, 134, 54, 95, 43, 23, 56, -566, 564, 243, -32, -56, 221, 56, 235, 676,
];

console.log(selectSorting(array));
console.log(iterations);
