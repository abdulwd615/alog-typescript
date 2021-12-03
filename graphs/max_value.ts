type SimpleAjanceyList = {
  [key: string]: number[];
};

let graph: SimpleAjanceyList = {
  10: [90, 5, 40],
  40: [50, 90],
  5: [10],
  20: [5, 120],
  120: [20, 5],
};

function _explorGraph(
  node: string,
  graph: SimpleAjanceyList,
  visited: Set<string>,
  maxValue: number
) {
  let stack = [node];

  while (stack.length) {
    let node = stack.pop();

    if (node !== undefined) {
      if (visited.has(node)) continue;
      visited.add(node);

      if (parseInt(node) > maxValue) maxValue = parseInt(node);

      if (graph[node]) {
        for (let neighbor of graph[node]) {
          stack.push(neighbor.toString());
        }
      }
    }
  }

  return maxValue;
}

function maxValue(graph: SimpleAjanceyList) {
  var maxValue = 0;
  let visited = new Set<string>();

  for (let node in graph) {
    let max = _explorGraph(node, graph, visited, maxValue);
    if (maxValue < max) maxValue = max;
  }

  return maxValue;
}
console.log(maxValue(graph));
