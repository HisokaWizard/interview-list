const factorial = (num) => {
  if (num === 1) return num;
  return num * factorial(num - 1);
};

const cashFunction = (fn) => {
  const cash = {};
  return (arg) => {
    if (cash[arg]) {
      return `Cash: ${cash[arg]}`;
    }
    const result = fn(arg);
    cash[arg] = result;
    return `No cash: ${cash[arg]}`;
  };
};

const cachFactorial = cashFunction(factorial);

console.log(cachFactorial(5));
console.log(cachFactorial(10));
console.log(cachFactorial(12));
console.log(cachFactorial(10));
console.log(cachFactorial(7));
console.log(cachFactorial(12));
console.log(cachFactorial(5));
console.log(cachFactorial(15));
console.log(cachFactorial(7));
