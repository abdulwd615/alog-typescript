var GraphNode = /** @class */ (function () {
    function GraphNode(value) {
        this.value = value;
        this.neighbors = [];
    }
    return GraphNode;
}());
var a = new GraphNode("a");
var b = new GraphNode("b");
var c = new GraphNode("c");
a.neighbors = [b, c];
console.log(a);
