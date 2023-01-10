/** Верните максимальную прибыль от котировок акций. Котировки акций хранятся в массиве по датам. Прибыль - это разница между покупкой и продажей акции. Каждый день вы можете купить одну единицу акций или продать любое количество акций, которые уже были куплены, или ничего не делать. Следователбно наибольшая прибыль это максимальная разница всех пар в последовательности курсов акций. */

const shareProfitSum = (array) => {
  let profit = 0;

  const findExtremeum = () => {
    const maxValue = Math.max(...array);
    const maxPosition = array.indexOf(maxValue);
    for (let i = 0; i < maxPosition; i++) {
      profit += maxValue - array[i];
    }
    array.splice(0, maxPosition + 1);
  };

  while (array.length > 0) {
    findExtremeum();
  }
  return profit;
};

console.log(shareProfitSum([1, 2, 3, 4, 5, 6])); // 15
console.log(shareProfitSum([9, 8, 7, 3, 2, 1])); // 0
console.log(shareProfitSum([1, 2, 14, 5, 3, 1])); // 25
console.log(shareProfitSum([7, 10, 20, 12, 14, 20])); // 37
console.log(shareProfitSum([1, 2, 4, 5, 6, 7, 4, 15])); // 76
