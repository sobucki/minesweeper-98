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

export function addNumbersToGrid(grid) {
  let newGrid = grid.map((row, rowIndex) => {
    return row.map((cell, colIndex) => {
      if (cell === "*") {
        return cell;
      }
      let mines = 0;
      for (let i = rowIndex - 1; i <= rowIndex + 1; i++) {
        for (let j = colIndex - 1; j <= colIndex + 1; j++) {
          if (i >= 0 && j >= 0 && i < grid.length && j < row.length) {
            if (grid[i][j] === "*") {
              mines++;
            }
          }
        }
      }
      return mines;
    });
  });
  return newGrid;
}
