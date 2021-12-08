export {};
const gridOne = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

const gridTwo = [
  ["L", "W", "W", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["W", "L", "W", "L", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "L", "L", "L"],
];
function _explore(
  grid: string[][],
  row: number,
  col: number,
  visited: Set<string>
) {
  let rowInbounds = row >= 0 && row < grid.length;
  let colInbounds = col >= 0 && col < grid[0].length;

  if (!rowInbounds || !colInbounds) return 0;

  if (grid[row][col] === "W") return 0;

  let pos = row + "," + col;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;

  size += _explore(grid, row - 1, col, visited);
  size += _explore(grid, row + 1, col, visited);
  size += _explore(grid, row, col - 1, visited);
  size += _explore(grid, row, col + 1, visited);

  return size;
}

function minimumIslanSize(grid: string[][]) {
  let visited = new Set<string>();
  let minSize = Infinity;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      let size = _explore(grid, row, col, visited);

      if (size > 0 && size < minSize) {
        minSize = size;
      }
    }
  }

  return minSize;
}

console.log(minimumIslanSize(gridTwo));
