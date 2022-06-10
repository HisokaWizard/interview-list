# Interview list

\\ List of questions and tasks for interview

## Common part

1. Расскажи кратко про свой опыт (2-3 минуты)
   Можно уточнять информацию о конкретных технологиях, инструментах, сложных кейсах, архитектурных решениях и тд. Здесь же можно попытаться понять, подходит ли человек по стеку, горит ли он программированием и тд.
2. Расскажи о последнем месте работы и почему принял решение об уходе (вопрос о негативе в прошлом)
   Здесь могут быть разные причины ухода и на этом вопросе можно начинать анализировать, подойдет ли кандидат команде, в которую он отбирается
   - Отношение к agile. Лучше положительное. Но у нас sbergile.
   - График.
   - Рост и доступность руководства. У нас есть рост, ежеквартальные Feedback-сессии c Лидами и возможность прямого обращения к руководителю подразделения (Паше), а еще каждый спринт мы проводим sprint-review и retrospective-session
   - Нехватка интересных задач. У нас демократия - можно брать любые задачи, главное - доводить их до конца и качественно выполнять. Можно узнать какие именно задачи человеку не нравятся или кажутся скучными.
   - Отсутствие связи с коллегами по компетенции. У нас можно по любому вопросу обратиться к коллегам и серьезное отношение к code review.
   - Отсутствие современных инструментов и технологий. У нас очень современный стек - webpack 5, module federation, lerna, RHF 7, RTKQ, Yup, React 17, MUI 5, - мы стараемся обновлять библиотеки своевременно.
   - Нехватка проработки задач. У нас огромная команда и задача проходит полноценный цикл. Проработка бизнес-аналитиком -> Проработка дизайнером -> Проработка системным аналитиком -> Приемка разработчиками -> Разбивка на задачи и оценка -> Разработка -> Приемка аналитикой результата -> Тестирование на нескольких стендах
   - Нехватка оффлайн общения. Мы очень дружелюбные и общительные: ходим в бары, кафе, играем в настолки, играем в онлайн игры, у нас есть ежедневные разговоры не о чем для всех желающих перед дейликом.
   - Различные негативные высказывания о руководстве, плохой команде, недоступности роста и тд мб звоночками
3. Чего ожидаешь от нового места работы (вопрос о позитиве в будущем)
4. Какие направления интересны человеку, сферы, чем бы хотелось заниматься.

- ::Middle:: Вопросы среднего уровня
- ::Senior:: Вопросы высокого уровня, больше ориентированные на беседу и размышление
- ::Optional:: Опциональные вопросы, задавать их в большинстве случаев не стоит, в документе лежат только для полноты картины
- ::Active:: Вопросы на выявление активной позиции по отношению к языку/инструментам разработки

## Native JS

### Типы данных

1. Какие типы данных есть в JS?

```javascript
// Types in the js: null, undefined, number, string, boolean, object, symbol
console.log(typeof undefined); // undefined
console.log(typeof 5); // number
console.log(typeof 'Hello'); // Variants of the string: '', "", ``
console.log(typeof false); // boolean
console.log(typeof { from: 'Spb' }); // object
console.log(typeof Symbol('Hi')); // symbol

// Specials in the JS:
console.log(typeof null); // historical reason it is looks like an object
console.log(typeof function () {}); // js doesn't have type function
console.log(typeof NaN); // NaN - not a number has type number
```

2. Приведение типов - cast:

```javascript
// Cast или приведение типов
// 1. Boolean false formats: '', 0, null, undefined, NaN, false
// false
console.log('Only false:');
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));
// true
console.log('Only true:');
console.log(Boolean('Hello'));
console.log(Boolean(1));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(function () {}));
console.log(Boolean(Symbol('Hi')));

// Strings and numbers
// null cast to 0 в случае работы с арифметическими операторами
console.log('Strings and numbers:');
console.log(1 + '2'); // '12'
console.log('' + 1 + 0 + 7); // '107'
console.log('' - 1 - 0 + 7); // 6
console.log('3' * 8); // 24
console.log(4 + 11 + 'px'); // '15px'
console.log(4 + 'px' + 11); // '4px11'
console.log('42' - 11); // '31'
console.log('42px' - 11); // 'NaN'
console.log('44' / 11); // '4'
console.log(null + 11); // '11'
console.log(null * 11); // '0'
console.log(null / 11); // '0'
console.log(null - 11); // '-11'
console.log(11 / null); // 'Infinity'
console.log(undefined + 11); // NaN
console.log(undefined * 11); // NaN the same - / + *
console.log([] + 5); // 5 Пустой массив расцениваниется как 0
console.log([5] + 5); // 55 Массив при работе с арифметическими операторами приводится к строке через метод toString()
console.log([3, 4] + 5); // '3,45'
console.log([3, 4] * 5); // NaN - / * не переопределены для работы с объектами
console.log({ s: 3, d: 4 } * 5); // NaN (- / * не переопределены для работы с объектами)
console.log({ s: 3, d: 4 } + 5); //[object Object]5
console.log(JSON.stringify({ s: 3, d: 4 }) + 5); //{"s":3,"d":4}5

// == vs ===
// Двойное равно сравнивает c приведением типов, не слишком строго, тройное равно сравнивает без приведения типов
console.log('== vs ===');
console.log('2' == 2); // true
console.log('2' === 2); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log('0' == false); // true
console.log('0' == 0); // true
console.log(0 == 0); // true
// Special compares:
console.log('Special compares:');
console.log(false == ''); // true
console.log(false == []); // true
console.log(false == {}); // false
console.log('' == 0); // true
console.log('' == []); // true
console.log('' == {}); // false
console.log(0 == []); // true
console.log(0 == {}); // false
console.log(0 == null); // false
console.log(0 == undefined); // false
console.log(false === ''); // false
console.log(false === []); // false
console.log(false === {}); // false
console.log('' === 0); // false
console.log('' === []); // false
console.log('' === {}); // false
console.log(0 === []); // false
console.log(0 === false); // false
console.log(0 === null); // false
console.log(0 === undefined); // false

// JS has operator ** which equal pow(value, 2);

const res = 'B' + 'a' + (1 - 'hello');
console.log(res); // BaNaN
const res = (true && 3) + 'd';
console.log(res); // 3d
const res = Boolean(true && 3) + 'd';
console.log(res); // trued
```

### Ссылки и значения

1. Какие типы данных в js ссылочные, а какие работают со значениями?

```javascript
// Передача значение и рефов для примитивов и обектов
let a = 42;
let b = a;
b += 100;
console.log('a', a); // 42
console.log('b', b); // 142

let c = [1, 2, 3, 4, 5];
let d = c;
d.push(6);
console.log('c', c); // [1, 2, 3, 4, 5, 6]
console.log('d', d); // [1, 2, 3, 4, 5, 6]
let e = [1, 2, 3, 4, 5, 6];
console.log(c === d); // true
console.log(e === c); // false
```

### Scope - область видимости

1. Что такое Scope и для чего он нужен?

```javascript
// Scope - это область видимости, не контекст, т е та область, которая ограничена либо модулем - функцией, либо {}
// Глобальный scope позволяет определять переменные видимые во всех функциях

function fA() {
  const a = 10;
  function fB() {
    const b = 20;
    function fC() {
      const c = 30;
      console.log('c', c, 'b', b, 'a', a); // 30, 20, 10
    }
    fC();
    console.log('b', b, 'a', a); // 20, 10
  }
  fB();
  console.log('a', a); // 10
}

fA();
```

### Hoisting - подъем состояния

1. Что это такое? И для чего нужно?

```javascript
// Возможность JS поднимать некоторые определения в начало файла

console.log(sum(32, 67)); // 99

function sum(a, b) {
  return a + b;
}

console.log(sum(4, 6)); // 10

console.log(value); // undefined, but not an error - поскольку hoisting - подъем  определения переменной value в начало файла
var value = 100;
console.log(value); // 100 инициализация переменной value в предыдущей строке, но не определение

var value2;
console.log(value2); // undefined
value2 = 200;
console.log(value2); // 200

console.log(d); // ReferenceError: variable d is not defined
let d = 1000;
console.log(f); // ReferenceError: variable f is not defined
const f = 2000;
```

2. Какие функции могут быть подняты, а какие нет?

```javascript
// Function Expression: const f = () => {} =  not hoisting
// Function Declaration: function f() {} - hoisting

console.log(summa(5, 6)); // ReferenceError: summa is not defined
const summa = (a, b) => a + b;
console.log(summa(7, 4)); // 11
```

3. Сохранение лексического окружения переменной(замыкание на верхнем уровне)

```javascript
var a = 1;

const foo = () => {
  console.log(a);
};

const bar = () => {
  var a = 2;
  foo();
};

bar(); // 1
```

### Closure - замыкания

1. Что такое замыкание?

```javascript
// Замыкание - доступ функции к переменным вышестоящего scope. Функция захватывает(замыкает) в себе переменные из вышестоящего scope.

function Cars() {
  let cars = [
    { mark: 'Lada', price: 3454 },
    { mark: 'Porshe', price: 45645 },
  ];
  return {
    presentCars: () => console.log(cars),
    addCar: (car) => cars.push(car),
  };
}

const moreCars = Cars();
moreCars.presentCars();
moreCars.addCar({ mark: 'BMW', price: 45455 });
moreCars.presentCars();
moreCars.addCar({ mark: 'Lamborgini', price: 5656576 });
moreCars.presentCars();

const arrayWithSetState = () => {
  for (var i = 0; i < 10; i++) {
    // 10 раз выведется 10, т к переменная i не хранится внутри цикла,
    // и setTimeout вызовется 10 раз после всех итераций цикла с переменной, которая уже будет иметь значение 10
    setTimeout(() => console.log(i), 1000);
  }
};

const arrayWithSetStateSolve1 = () => {
  for (var i = 0; i < 10; i++) {
    // выведется все как мы хотим, значения от 0 до 9, т к мы замыкаем каждый вызов setTimeout c текущим значением переменной i
    ((j) => {
      setTimeout(() => console.log(j), 2000);
    })(i);
  }
};

const arrayWithSetStateSolve2 = () => {
  for (let i = 0; i < 10; i++) {
    console.log('i', i);
    // выведется все как мы хотим, значения от 0 до 9, т к переменная i через let работает внутри блочного scope цикла.
    setTimeout(() => console.log(i), 3000);
  }
};

arrayWithSetState();
arrayWithSetStateSolve1();
arrayWithSetStateSolve2();

// В случае с var в setTimeout передается корректное значение i, только ввиду того, что i на внешнем scope,
// то на момент вызова setTimeout выведет то значение которое на этот момент будет иметь переменная, в случае  let, сохраняется то значение, которое было передано,
// т к оно существет только внутри блока, а в случае замыкания, текущее значение замыкается на уровне вложенной в цикл функции в которой вызывается setTimeout

// Лексическое окружение
// Лексическое окружение может быть глобальным, внешним и внутренним, глобальное - на уровне объетка window, для брауреза(но есть и другие например globalThis).,
// внешнее напирмер модуль для функции в котором она находится, внутреннее, это содержимое  функции - ее параметры и локальные переменные

const names = ['Peter', 'John', 'David']; // global array names

function SayMyName() {
  // global function SayMyName
  let phrase = 'My name is'; // inner(local) for SayMyName variable

  return function (name) {
    // inner(local) for SayMyName function, name - inner for this function parameter, SayMyName is outer function (outer Lexical Environment for anonymous function)
    console.log(`${phrase} ${name}`); // phrase - variable from outer Lexical Environment, name - inner Lexical Environment
  };
}

// В анонимной функции мы получаем доступ к внешней переменной phrase, но когда происходит процесс работы скрипта,
// вначале эта переменная ищется во внутреннем окружении, и если не находится, то поднимается во внешнее и так до глобального,
// т е если убрать из функции SayMyName переменную  phrase ии переместить ее в глобальный Scope или  Global Lexical Environment
//  то мы все равно получим рабочую программу пример ниже

setTimeout(() => {
  const peter = SayMyName();
  peter('Peter');
  const john = SayMyName();
  john('John');
  const david = SayMyName();
  david('David');
}, 9000);

const names2 = ['Peter', 'John', 'David']; // global array names
let phrase = 'My name is'; // global variable

function SayMyName2() {
  // global function SayMyName
  return function (name) {
    // inner(local) for SayMyName function, name - inner for this function parameter, SayMyName is outer function (outer Lexical Environment for anonymous function)
    console.log(`${phrase} ${name}`); // phrase - variable from outer Lexical Environment, name - inner Lexical Environment
  };
}

// За счет специального скрытого свойства [[Environment]] функция всегда знает в каком лексическом окружении была вызвана,
// и имеет сслыку на него, за счет этого и работают замыкания, т к мы знаем к каким переменным есть доступ в том окружении где была вызвана функция.
// Как здесь работает управление памятью. Хотя makeCounter() закончил выполнение некоторое время назад, его лексическое окружение остаётся в памяти,
// потому что есть вложенная функция с [[Environment]], который ссылается на него.
```

### IIFE

1. Что это? Для чего нужно?

```javascript
// IIFE - Immediate Invoked Function Expression - Выражение немедленно вызываемой функции

// Моментальный вызов функции с созданием нужного scope

let array = [];
for (var i = 0; i < 5; i++) {
  array.push(() => console.log(i));
}

array[3](); // 5 т к не подходящий scope

let array2 = [];

for (var i = 0; i < 5; i++) {
  ((j) => {
    // var j = i;
    array2.push(() => console.log(j));
  })(i);
}

array2[3](); // 3 т к корректный scope

// === одинаковые формы

let array3 = [];

for (var i = 0; i < 5; i++) {
  (() => {
    var j = i;
    array3.push(() => console.log(j));
  })();
}

array3[3](); // 3 т к корректный scope

// Пути создания IIFE
(function () {
  console.log('Скобки вокруг функции');
})();

(function () {
  console.log('Скобки вокруг всего');
})();

!(function () {
  console.log('Выражение начинается с логического оператора NOT');
})();

+(function () {
  console.log('Выражение начинается с унарного плюса');
})();

// Try case with Immediate Invoked FE
(function () {
  var tt = 0;
  // console.log(this); // globalThis for Node or window for browser
  console.log(this.tt); // undefined т к переменная не в глобальной области видимости
  console.log(tt); // 0
})();
```

### Context

1. Что такое контекст? Для чего нужен?
2. Что такое bind, apply, call? Для чего они нужны?

```javascript
// Context - то как мы вызываем функцию, в рамках какого объекта.

const furniture = {
  item1: 'sofa',
  item2: 'table',
  item2: 'armchair',
  location: function () {
    console.log(`I have ${this.item1}, ${this.item2} and ${this.item3} in the living room!`);
  },
  location2: () =>
    console.log(`I have ${this.item1}, ${this.item2} and ${this.item3} in the living room!`),
  price: function (item1Cost, item2Cost, item3Cost) {
    console.log(
      `Prices: ${this.item1} - ${item1Cost}, ${this.item2} - ${item2Cost}, ${this.item3} - ${item3Cost}`
    );
  },
};

furniture.location();
furniture.price(34, 67, 31);
furniture.location2.bind(furniture)(); //  в стрелочных функциях нет контекста, его туда даже нельзя передать с помощью bind

//////////////////////////////////////////

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: 'some value' };

logger.bind(obj)(); // Пример явной передачи контекста
logger.apply(obj);
logger.call(obj);

/////////////////////////////////////////

function Shark(type) {
  this.type = type;
  console.log('This', this);
  this.ff = () => {
    console.log('Arrow 1 this', this);
  }; // нет своего контекста, только внешни объект Shark
  this.contextFF = function () {
    console.log('New context this', this); // есть свой контекст
  };
}

new Shark('tiger').ff();
new Shark('white').contextFF();

const test = { type: '1' };

const hammer = new Shark('hummer');
hammer.ff.bind(test)(); // контекст не крепится к стрелочной функции, this всегда будет от объекта в котором определена стрелочная функция
hammer.contextFF.bind(test)(); // новый контекст объета test

/////////////////////////////////

var aa = {
  b: 5,
  getB: function () {
    return this.b;
  },
};

console.log('b: ', aa.getB()); // 5
var fn = aa.getB;
console.log('b:', fn()); // undefined
```

### Async

1. Какие в JS есть возможности работать с асинхронным кодом?
2. В чем разница Promise и async/await
   - Внутренняя оптимизация. async/await быстрее ::todo::
   - async|await не позволяет написать finally|catch без обертки в try|catch
   - promises не так легко читать в сложных операциях
3. Зачем вообще понадобилось вводить сначала promises, а потом и async|await?
   - Раньше промисов не было и любые асинхронные операции производились через Ajax и вызов колбеков после тайм-аутов. Промисы решают эту проблему.
4. В чем разница между Promise.all() и Promise.allSettled(), и Promise.race(), Promise.any()?
   - all() выполнится тогда, когда будут выполнены все promises, переданные в виде перечисляемого аргумента, или отклонен любой из них.
   - allSettled() исполняется, когда все полученные promises завершены (успешно или нет), возвращает массив результатов исполнения.
   - race() возвращает первый исполненный promise вне зависимости от успешности исполнения
   - any() возвращает первый успешно исполненный promise
5. Можно ли использовать await вне функции, объявленной с async?
   - Да, можно. Есть такое понятие как `Top level await`

```javascript
Promise.reject('a')
  .catch((p) => p + 'b')
  .catch((p) => p + 'с')
  .then((p) => p + 'd')
  .then((p) => p + 'f')
  .catch((p) => p + 'h')
  .finally((p) => p + 'e')
  .then((p) => console.log(p)); //abdf

/////////////////////////////////////////

setTimeout(() => console.log('a'));

Promise.resolve()
  .then((first) => {
    console.log('first:', first);
    return 'b';
  })
  .then(
    Promise.resolve().then((second) => {
      console.log('second: ', second);
      return 'c';
    })
  )
  .then((third) => console.log('third:', third));

console.log('d');

// d
// undefined
// undefined
// b
// a
```

### Eventloop

1. Что такое eventloop?
2. Как он работает?
3. Что такое макро и микро таски?

```javascript
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
```
