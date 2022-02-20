/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const cache = new Array(matrix.length).fill(0)
    .map(()=> new Array(matrix[0].length).fill(0));
    return findLongestIncreasingPath(matrix, cache);
};

function getDirections(){
    return [
        [-1,0],
        [0, 1],
        [1, 0],
        [0, -1]
    ];
}


function isOutOfBounds(matrix, row, col){
    return row < 0 || row >= matrix.length || col < 0 || col >= matrix[row].length;
}

function findLongestIncreasingPath(matrix, cache){
    let longest = 1;
    for(let row=0; row < matrix.length; row++){
        for(let col=0; col < matrix[row].length; col++){
            longest = Math.max(longest, findLongestIncreasingFrom(matrix, cache, row, col));
        }
    }
    return longest;
}

function findLongestIncreasingFrom(matrix, cache, row, col){
    if(cache[row][col] !== 0) return cache[row][col];
    const nextDirections = getDirections();
    for(let direction of nextDirections){
        const [nextRow, nextCol] = [row + direction[0], col + direction[1]];
        if(isOutOfBounds(matrix, nextRow, nextCol)) continue;
        if(matrix[nextRow][nextCol] > matrix[row][col]){
            cache[row][col]= Math.max(cache[row][col],findLongestIncreasingFrom(matrix, cache, nextRow, nextCol));
        }
    }
    cache[row][col] = 1 + cache[row][col];
    return cache[row][col];
}