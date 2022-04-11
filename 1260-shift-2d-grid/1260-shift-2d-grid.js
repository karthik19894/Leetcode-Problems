/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const m = grid.length, n = grid[0].length;
    const sizeOfFlatArray = m * n;
    const newGrid = new Array(m).fill(0).map(()=> new Array(n).fill(0));
    for(let row=0; row < m; row++){
        for(let col=0; col < n; col++){
            const newFlatPosition = (flattenRowCol(row, col, n) + k) % sizeOfFlatArray;
            const [newRow, newCol] = rowColFromFlat(newFlatPosition, n);
            newGrid[newRow][newCol] = grid[row][col];
        }
    }
    return newGrid;
};
    
function rowColFromFlat(idx, n){
    return [Math.floor(idx / n), idx % n];
}

function flattenRowCol(row, col, n){
    return row * n + col;
}