const correctBracketSequense = (strOfBrackets) => {
  const stack = [];

  const checkStack = (item) => {
    const last = stack.length - 1;
    if (item === '(' || item === '{' || item === '[') {
      stack.push(item);
    }
    if (item === ')') {
      if (stack[last] === '(') {
        stack.pop();
      } else return;
    }
    if (item === ']') {
      if (stack[last] === '[') {
        stack.pop();
      } else return;
    }
    if (item === '}') {
      if (stack[last] === '{') {
        stack.pop();
      } else return;
    }
  };

  for (let i = 0; i < strOfBrackets.length; i++) {
    const item = strOfBrackets.charAt(i);
    checkStack(item);
  }
  if (stack.length === 0) return 'Sequense correct';
  return 'Sequense incorrect';
};

console.log(correctBracketSequense('([]{}{()})'));
console.log(correctBracketSequense('(({{}()[][(}))'));
console.log(correctBracketSequense('{()()()[][[[[[]]]]]{{}}()}'));
