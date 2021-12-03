import { depthFirst } from "./depth_first";
import { breadthFirst } from "./breadth_first";
import { AjanceyListI } from "./types";

export class GraphNode {
  value: string;
  neighbors: GraphNode[];

  constructor(value: string) {
    this.value = value;
    this.neighbors = [];
  }
}

let a = new GraphNode("A");
let b = new GraphNode("B");
let c = new GraphNode("C");
let d = new GraphNode("D");
let e = new GraphNode("E");
let f = new GraphNode("F");

a.neighbors = [e, c, b];
c.neighbors = [c, d];
e.neighbors = [a];
f.neighbors = [e];

// AJANCEY LIST

let ajanceyListTwo: AjanceyListI = {
  a: [e, c, b],
  c: [b, d],
  e: [a],
  f: [e],
};

breadthFirst(ajanceyListTwo);
