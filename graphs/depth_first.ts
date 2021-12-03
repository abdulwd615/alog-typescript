import { GraphNode } from "./index";

import { AjanceyListI } from "./types";

export function depthFirst(graph: AjanceyListI) {
  let visited = new Set<string>();

  for (let node in graph) {
    _exploreGraphIterative(node, graph, visited);
  }
}

function _exploreGraphIterative(
  node: string,
  graph: AjanceyListI,
  visited: Set<string>
) {
  let stack = [node];
  while (stack.length) {
    let node = stack.pop();

    if (node !== undefined) {
      if (visited.has(node)) continue;
      console.log(node);
      visited.add(node);

      if (graph[node]) {
        graph[node].forEach((neighbor) => {
          stack.push(neighbor.value.toLocaleLowerCase());
        });
      }
    }
  }
}

function _exploreGraph(
  node: string,
  graph: AjanceyListI,
  visited: Set<string>
) {
  if (visited.has(node)) return;

  console.log(node);
  visited.add(node);

  if (graph[node] !== undefined) {
    for (let neighbor of graph[node]) {
      _exploreGraph(neighbor.value.toLowerCase(), graph, visited);
    }
  }
}
