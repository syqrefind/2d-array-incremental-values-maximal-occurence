find2dArrayIncrementalValueMaximalOccurence = (topRights) => {
  // 1. First pass to find the largest dimension.
  let maxHeight = 0;
  let maxWidth = 0;
  for (const item of topRights) {
    maxHeight = Math.max(maxHeight, +item[0]);
    maxWidth = Math.max(maxWidth, +item[2]);
  }
  // 2. Construct the 2d array and use second pass to update the values.
  // const grid = Array(maxHeight).fill(Array(maxWidth).fill(0));
  const grid = [];
  for (let r = 0; r < maxHeight; r++) {
    const row = [];
    for (let c = 0; c < maxWidth; c++) {
      row.push(0);
    }
    grid.push(row);
  }
  for (const [numRows, _space, numCols] of topRights) {
    for (let r = 0; r < numRows; r++) {
      for (let i = 0; i < numCols; i++) {
        grid[r][i]++;
      }
    }
  } 
  // 3. Third pass to count for the maximal occurence.
  let maximal = 0;
  let occurence = 0;
  for (const row of grid) {
    for (const cell of row) {
      maximal = Math.max(maximal, cell);
    }
  }
  for (const row of grid) {
    for (const cell of row) {
      if (cell === maximal) {
        occurence++;
      }
    }
  }
  return occurence;
}

const printGrid = (grid) => {
  console.log('--------------')
  for (const row of grid) {
    console.log(row);
  }
  console.log('--------------')
}

module.exports = {
  printGrid,
  find2dArrayIncrementalValueMaximalOccurence
}