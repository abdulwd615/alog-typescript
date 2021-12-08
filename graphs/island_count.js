// island count
// Write a function, islandCount, that takes in a grid containing Ws and Ls.
// W represents water and L represents land. The function should return the number of islands on the grid.
//  An island is a vertically or horizontally connected region of land.
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
var gridThree = [
    ["L", "L", "L"],
    ["L", "L", "L"],
    ["L", "L", "L"],
];
var gridFour = [
    ["W", "W"],
    ["W", "W"],
    ["W", "W"],
];
// function _explore(
//   grid: string[][],
//   row: number,
//   col: number,
//   visited: Set<string>
// ) {
//   const rowInbounds = row >= 0 && row < grid.length;
//   const colInbounds = col >= 0 && col < grid.length;
//   if (!rowInbounds || !colInbounds) return false;
//   if (grid[row][col] === "W") return false;
//   let pos = row + "," + col;
//   if (visited.has(pos)) return false;
//   visited.add(pos);
//   _explore(grid, row - 1, col, visited);
//   _explore(grid, row + 1, col, visited);
//   _explore(grid, row, col - 1, visited);
//   _explore(grid, row, col + 1, visited);
//   return true;
// }
// function islandCount(grid: string[][]) {
//   let visited = new Set<string>();
//   let count = 0;
//   for (let row = 0; row < grid.length; row++) {
//     for (let col = 0; col < grid[0].length; col++) {
//       if (_explore(grid, row, col, visited)) {
//         count++;
//       }
//     }
//   }
//   return count;
// }
// console.log("count", islandCount(gridOne));
function _explore(grid, row, col, visited) {
    var rowInbounds = row >= 0 && row < grid.length;
    var colInbounds = col >= 0 && col < grid[0].length;
    if (!rowInbounds || !colInbounds)
        return false;
    if (grid[row][col] === "W")
        return false;
    // pos = "0, 1"
    var pos = row + "," + col;
    if (visited.has(pos))
        return false;
    visited.add(pos);
    _explore(grid, row - 1, col, visited);
    _explore(grid, row + 1, col, visited);
    _explore(grid, row, col - 1, visited);
    _explore(grid, row, col + 1, visited);
    return true;
}
function islandCount(grid) {
    var visited = new Set();
    var count = 0;
    for (var row = 0; row < grid.length; row++) {
        for (var col = 0; col < grid[0].length; col++) {
            if (_explore(grid, row, col, visited)) {
                count++;
            }
        }
    }
    return count;
}
console.log(islandCount(gridOne));
