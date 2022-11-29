let iterations = 0;

const linearSearch = (array, element) => {
  if (!Array.isArray(array) || array.length === 0) return null;
  for (let i = 0; i < array.length; i++) {
    iterations++;
    if (array[i] === element) {
      return i;
    }
  }

  return null;
};

const array = [2, 4, 3, 564, 32, 53, 134, 54, 95, 43, 23];

console.log(linearSearch(array, 32));
console.log(iterations);
