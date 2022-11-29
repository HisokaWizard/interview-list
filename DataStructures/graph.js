/**
 * Graph - structure which contain nodes and links. Each link knowns about their links with other
 * nodes
 */

const matrix = [
  [0, 0],
  [0, 2],
  [1, 1],
  [-2, 2],
  [1, -1],
];

const createGraph = (matrix) => {
  const graph = {};
  for (let i = 0; i < matrix.length; i++) {
    const links = [];
    for (let j = 0; j < matrix.length; j++) {
      if (i === j) continue;
      links.push(`${j + 1}`);
    }
    graph[`${i + 1}`] = { node: { x: matrix[i][0], y: matrix[i][1] }, links, completed: false };
  }
  return graph;
};

const graph2 = {};
graph2['1'] = { node: { x: 0, y: 0 }, links: ['2', '3', '4', '5'] };
graph2['2'] = { node: { x: 0, y: 2 }, links: ['1', '3', '4', '5'] };
graph2['3'] = { node: { x: 1, y: 1 }, links: ['1', '2', '4', '5'] };
graph2['4'] = { node: { x: -2, y: 2 }, links: ['1', '2', '3', '5'] };
graph2['5'] = { node: { x: 1, y: -1 }, links: ['1', '2', '3', '4'] };

console.log(createGraph(matrix));
console.log(graph2);

const findPossiblePath = (from, to, matrix, tank) => {
  const graph = createGraph(matrix);
  const end = Math.abs(graph[to].node.x) + Math.abs(graph[to].node.y);
  const queue = [graph[from]];
  let move = 1;
  while (queue.length > 0) {
    const cur = queue.shift();
    cur.completed = true;
    const curPos = Math.abs(cur.node.x) + Math.abs(cur.node.y);
    if (end - curPos <= tank) {
      return move;
    }
    cur.links.forEach((link) => {
      const itemPos = Math.abs(graph[link].node.x) + Math.abs(graph[link].node.y);
      if (itemPos - curPos <= tank && !graph[link].completed && !queue.includes(graph)) {
        queue.push(graph[link]);
      }
    });
    move++;
  }
  return 0;
};

console.log(findPossiblePath('1', '4', matrix, 1));
