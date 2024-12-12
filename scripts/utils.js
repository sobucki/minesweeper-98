export function createRandomGridMap(rows, cols, mines) {
  if (rows < 1 || cols < 1) {
    throw new Error("Invalid rows or cols");
  }

  if (mines > rows * cols) {
    throw new Error("Too many mines");
  }

  let grid = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

  let minesPlaced = 0;
  while (minesPlaced < mines) {
    let row = Math.floor(Math.random() * rows);
    let col = Math.floor(Math.random() * cols);
    if (grid[row][col] === 0) {
      grid[row][col] = "*";
      minesPlaced++;
    }
  }
  return grid;
}
