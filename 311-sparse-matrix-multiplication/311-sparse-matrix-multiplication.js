/**
 * @param {number[][]} mat1
 * @param {number[][]} mat2
 * @return {number[][]}
 */
var multiply = function(mat1, mat2) {
    const n = mat1.length;
    const k = mat1[0].length;
    const m = mat2[0].length;
    
    const result = new Array(n).fill(0).map(()=> new Array(m).fill(0));
    for(let row=0; row < n; row++){
        for(let idx=0; idx < k; idx++){
            if(mat1[row][idx] !== 0){
                for(let col=0; col < m; col++){
                    result[row][col] += mat1[row][idx] * mat2[idx][col];
                }
            }
            
        }
    }
    return result;
};