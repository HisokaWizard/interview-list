let numbers = [];

numbers = new Proxy(numbers, {
  // (*)
  set(target, prop, val) {
    // для перехвата записи свойства
    if (typeof val == 'number') {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  },
});

numbers.push(1); // добавилось успешно
numbers.push(2); // добавилось успешно
numbers.push(5); // добавилось успешно
console.log('Длина: ' + numbers.length); // 3

numbers.push('6'); // TypeError (ловушка set на прокси вернула false)
