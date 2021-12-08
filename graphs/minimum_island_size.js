"use strict";
exports.__esModule = true;
var gridOne = [
    ["W", "L", "W", "W", "W"],
    ["W", "L", "W", "W", "W"],
    ["W", "W", "W", "L", "W"],
    ["W", "W", "L", "L", "W"],
    ["L", "W", "W", "L", "L"],
    ["L", "L", "W", "W", "W"],
];
var gridTwo = [
    ["L", "W", "W", "L", "W"],
    ["L", "W", "W", "L", "L"],
    ["W", "L", "W", "L", "W"],
    ["W", "W", "W", "W", "W"],
    ["W", "W", "L", "L", "L"],
];
function _explore(grid, row, col, visited) {
    var rowInbounds = row >= 0 && row < grid.length;
    var colInbounds = col >= 0 && col < grid[0].length;
    if (!rowInbounds || !colInbounds)
        return 0;
    if (grid[row][col] === "W")
        return 0;
    var pos = row + "," + col;
    if (visited.has(pos))
        return 0;
    visited.add(pos);
    var size = 1;
    size += _explore(grid, row - 1, col, visited);
    size += _explore(grid, row + 1, col, visited);
    size += _explore(grid, row, col - 1, visited);
    size += _explore(grid, row, col + 1, visited);
    return size;
}
function minimumIslanSize(grid) {
    var visited = new Set();
    var minSize = Infinity;
    for (var row = 0; row < grid.length; row++) {
        for (var col = 0; col < grid[0].length; col++) {
            var size = _explore(grid, row, col, visited);
            if (size > 0 && size < minSize) {
                minSize = size;
            }
        }
    }
    return minSize;
}
console.log(minimumIslanSize(gridTwo));
