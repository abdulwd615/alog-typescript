class GraphNode {
  value: string;
  neighbors: GraphNode[];

  constructor(value: string) {
    this.value = value;
    this.neighbors = [];
  }
}

let a = new GraphNode("a");
let b = new GraphNode("b");
let c = new GraphNode("c");

a.neighbors = [b, c];

console.log(a);
