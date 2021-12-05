// LARGEST COMPONENT
// write a function largestComponent, that takes in an adjancey list of an undirected graph.
// the function should return the size of the largest connected component.

import { GraphI } from "./types";

let adjanceyList: GraphI = {
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
};

function _exploreSizeRecursive(
  node: string,
  graph: GraphI,
  visited: Set<string>
) {
  if (visited.has(node)) return 0;
  visited.add(node);
  let size = 1;

  for (let neighbor of graph[node]) {
    size += _exploreSizeRecursive(neighbor, graph, visited);
  }

  return size;
}

function _exploreSize(node: string, graph: GraphI, visited: Set<string>) {
  let queue = [node];
  let size = 0;

  while (queue.length) {
    let node = queue.shift();
    if (node !== undefined && visited.has(node)) continue;
    if (node !== undefined) visited.add(node);
    size++;

    if (node !== undefined) queue.push(...graph[node]);
    console.log("queue", queue);
    console.log("size", size);
  }

  return size;
}

function largestComponent(graph: GraphI) {
  let visited = new Set<string>();
  let largest = 0;

  for (let node in graph) {
    let size = _exploreSizeRecursive(node, graph, visited);
    if (largest < size) largest = size;
  }

  return largest;
}

console.log(largestComponent(adjanceyList));
