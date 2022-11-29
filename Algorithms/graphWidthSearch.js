const graphWidthSearch = (graph, start, end) => {
  let queue = [start];
  while (queue.length > 0) {
    const current = queue.shift();
    if (!graph[current]) {
      continue;
    }
    if (graph[current].includes(end)) {
      return true;
    }
    queue = [...queue, ...graph[current]];
  }
  return false;
};

const graph = {
  a: ['b', 'f'],
  b: ['c', 'd', 'e'],
  c: ['d'],
  d: ['h'],
  e: ['g'],
  f: ['e'],
  g: [],
  h: ['i'],
  i: [],
};

console.log(graphWidthSearch(graph, 'a', 'i')); // true
console.log(graphWidthSearch(graph, 'b', 'g')); // true
console.log(graphWidthSearch(graph, 'c', 'g')); // false
console.log(graphWidthSearch(graph, 'f', 'c')); // false
console.log(graphWidthSearch(graph, 'b', 'h')); // true
