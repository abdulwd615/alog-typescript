// SHORTEST PATH
// write a function shortest path, that takes in an array of edges for an undirect graph and two
// nodes (nodeA, nodeB). the function should return the length of the shortest path between
// A and B . Consider the length as the number of edges in the path, not the number of nodes.
// if there is no path between A and B return -1.

import { GraphI } from "./types";

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

const edges3 = [
  ["a", "b"],
  ["a", "c"],
  ["b", "a"],
  ["c", "a"],
  ["c", "d"],
  ["d", "c"],
  ["d", "l"],
  ["l", "d"],
  ["l", "a"],
  ["a", "l"],
];

function buildGraph(edges: string[][]) {
  let graph: GraphI = {};

  for (let edge of edges) {
    const [a, b] = edge.map(String);

    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];

    if (!graph[a].includes(b)) graph[a].push(b);
    if (!graph[b].includes(a)) graph[b].push(a);
  }

  return graph;
}

function _exploreGraph(graph: GraphI, nodeA: string, nodeB: string) {
  let queue: [[string, number]] = [[nodeA, 0]];
  let visited = new Set<string>([nodeA]);

  while (queue.length) {
    let node = queue.shift();
    if (node !== undefined) {
      let [value, distance] = node;
      if (value === nodeB) return distance;

      if (graph[value] !== undefined) {
        for (let neighbor of graph[value]) {
          if (!visited.has(neighbor)) {
            visited.add(value);
            queue.push([neighbor, distance + 1]);
          }
        }
      }
    }
  }
  return -1;
}

function shortestPath(edges: string[][], nodeA: string, nodeB: string) {
  let graph = buildGraph(edges);

  return _exploreGraph(graph, nodeA, nodeB);
}

console.log(shortestPath(edges, "v", "y"));
