const tree4deep = [
  {
    node: 5,
    children: [
      {
        node: 6,
        children: [
          {
            node: 9,
            children: [],
          },
          {
            node: 12,
            children: [],
          },
          {
            node: 7,
            children: [],
          },
        ],
      },
      {
        node: 1,
        children: [
          {
            node: 8,
            children: [
              {
                node: 40,
                children: [],
              },
              {
                node: 20,
                children: [],
              },
            ],
          },
        ],
      },
      {
        node: 9,
        children: [
          {
            node: 3,
            children: [],
          },
          {
            node: 3,
            children: [],
          },
          {
            node: 3,
            children: [],
          },
          {
            node: 3,
            children: [],
          },
        ],
      },
    ],
  },
];

const itertiveTreeRound = (tree) => {
  const queue = [tree[0]];
  let summa = 0;

  while (queue.length !== 0) {
    const item = queue[0];
    summa += item.node;
    if (item.children.length > 0) {
      item.children.forEach((it) => {
        queue.push(it);
      });
    }
    queue.shift();
  }

  return summa;
};

const recursiveTreeRound = (tree) => {
  let summa = 0;

  tree.forEach((it) => {
    summa += it.node;
    if (it.children.length === 0) {
      return it.node;
    }
    summa += recursiveTreeRound(it.children);
  });

  return summa;
};

console.log(itertiveTreeRound(tree4deep));
console.log(recursiveTreeRound(tree4deep));
//129
