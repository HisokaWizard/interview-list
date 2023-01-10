/** Необходимо реализовать метод sum таким образом чтобы выводилось значение всех сумм как показано в примере */

const sum = (value) => {
  let summa = value;
  console.log(summa);

  return function agregatorSum(num) {
    summa += num;
    console.log(summa);
    return agregatorSum;
  };
};

sum(1)(10)(15); //1, 11, 26
sum(6)(5)(4)(3)(2); //6, 11, 15, 18, 20
sum(200)(100); //200, 300
