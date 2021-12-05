import { GraphI } from "./types";

export {};
// HAS PATH

// write a function,  hasPath, that takes in an object representing the adjancey list of a acyclic
// graph and two nodes (src, dest). the function should return a boolean indicating whether or not
// there exists a directed path between the src and dest nodes.

let graph: GraphI = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

let graph2: GraphI = {
  a: ["b", "c"],
  b: ["c"],
  c: ["a"],
};

function hasPathRecursive(graph: GraphI, nodeA: string, nodeB: string) {
  if (nodeA === nodeB) return true;

  for (let node of graph[nodeA]) {
    if (hasPathRecursive(graph, node, nodeB) === true) {
      return true;
    }
  }

  return false;
}

function hasPath(graph: GraphI, nodeA: string, nodeB: string) {
  if (nodeA === nodeB) return true;
  let queue = [nodeA];

  while (queue.length) {
    let node = queue.shift();

    if (node === nodeB) return true;

    if (node !== undefined) {
      queue.push(...graph[node]);
    }
  }

  return false;
}

console.log(hasPath(graph2, "a", "c"));
