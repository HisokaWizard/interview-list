const graph = {};

graph.a = { b: 2, c: 4 };
graph.b = { e: 5 };
graph.c = { d: 2, f: 7 };
graph.d = { e: 1 };
graph.e = { g: 3 };
graph.f = { e: 2, g: 8 };
graph.g = {};

const hugeValue = 100000000;
const deikstra = (graph, start, end) => {
  // min cost from start to any node
  const costs = {};
  // node which was handled
  const processed = [];
  let neighbors = {};
  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      costs[node] = graph[start][node] || hugeValue;
    }
  });
  let node = getLowestNode(costs, processed);
  while (node) {
    neighbors = graph[node];
    Object.keys(neighbors).forEach((neighbor) => {
      const newCost = costs[node] + neighbors[neighbor];
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    });
    processed.push(node);
    node = getLowestNode(costs, processed);
  }
  return costs;
};

const getLowestNode = (costs, processed) => {
  let lowestCost = hugeValue;
  let lowestNode;
  Object.keys(costs).forEach((node) => {
    if (costs[node] < lowestCost && !processed.includes(node)) {
      lowestCost = costs[node];
      lowestNode = node;
    }
  });
  return lowestNode;
};

console.log(deikstra(graph, 'a', 'g'));
