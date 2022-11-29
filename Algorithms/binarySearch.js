let iterations = 0;

const binarySearch = (array, element) => {
  if (!Array.isArray(array) || array.length === 0) return null;

  let start = 0;
  let end = array.length - 1;
  let middle = Math.round(end / 2);

  while (start < end) {
    iterations++;
    if (array[middle] === element) {
      return middle;
    }
    if (array[middle] > element) {
      end = middle;
      middle = Math.round(end / 2);
    }
    if (array[middle] < element) {
      start = middle;
      middle = Math.round((end + start) / 2);
    }
  }

  return null;
};

const array = [2, 3, 4, 23, 32, 43, 53, 54, 95, 134, 564, 653, 799, 1234, 3211];

console.log(binarySearch(array, 799));
console.log(iterations);
