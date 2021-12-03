import { AjanceyListI } from "./types";

export function breadthFirst(graph: AjanceyListI) {
  let visited = new Set<string>();

  for (let node in graph) {
    _exploreBreadthFirst(node, graph, visited);
  }
}

function _exploreBreadthFirst(
  node: string,
  graph: AjanceyListI,
  visited: Set<string>
) {
  let queue = [node];

  while (queue.length) {
    let node = queue.shift();

    if (node !== undefined) {
      if (visited.has(node)) continue;
      console.log(node);
      visited.add(node);

      if (graph[node]) {
        graph[node].forEach((neighbor) => {
          queue.push(neighbor.value.toLowerCase());
        });
      }
    }
  }
}
