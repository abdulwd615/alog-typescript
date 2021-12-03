export function buildGraph(edges: string[][] | number[][]) {
  let graph: Graph = {};

  for (let edge of edges) {
    const [a, b] = edge.map(String);

    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
  }

  return graph;
}
