let iterations = 0;

const bubbleSorting = (array) => {
  if (!Array.isArray(array) || array.length === 0) return [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        const tmp = array[j];
        array[j] = array[i];
        array[i] = tmp;
      }
      iterations++;
    }
  }

  return array;
};

const array = [
  2, 4, 3, 564, 32, 53, 134, 54, 95, 43, 23, 56, -566, 564, 243, -32, -56, 221, 56, 235, 676,
];

console.log(bubbleSorting(array));
console.log(iterations);
