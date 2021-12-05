export {};

import { GraphI } from "./types";

let graph: GraphI = {
  a: ["b"],
  b: ["a"],
  c: ["d"],
  d: ["e", "c"],
  e: ["d"],
  x: ["y"],
  y: ["x"],
};

function _exploreGraph(node: string, visited: Set<string>, graph: GraphI) {
  if (visited.has(node)) return false;
  let queue = [node];

  while (queue.length) {
    let node = queue.shift();
    if (node !== undefined && visited.has(node)) continue;
    if (node !== undefined) visited.add(node);
    if (node !== undefined) queue.push(...graph[node]);
  }
  return true;
}

function _exploreSizeRecursive(
  node: string,
  visited: Set<string>,
  graph: GraphI
) {
  if (visited.has(node)) return false;

  visited.add(node);

  for (let neighbor of graph[node]) {
    _exploreSizeRecursive(neighbor, visited, graph);
  }

  return true;
}

function numRegions(graph: GraphI) {
  let visited = new Set<string>();

  var numRegions = 0;
  for (let node in graph) {
    if (_exploreSizeRecursive(node, visited, graph)) {
      numRegions++;
    }
  }
  return numRegions;
}

console.log(numRegions(graph));
