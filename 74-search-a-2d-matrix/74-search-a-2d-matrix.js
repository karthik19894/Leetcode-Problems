/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = 0, col = matrix[0].length - 1;
    while(row >= 0 && row < matrix.length && col >=0 && col < matrix[row].length){
        let current = matrix[row][col];
        if(current === target) return true;
        else if(current < target){
            row++;
        }else{
            col--;
        }
    }
    return false;
};