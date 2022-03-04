/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
    const level = new Array(query_row + 2).fill(0).map(()=> new Array(query_row+2).fill(0));
    level[0][0] = poured;
    for(let row=0; row <= query_row; row++){
        for(let col=0; col <= row; col++){
            const quantity = (level[row][col] - 1.0) / 2.0;
            if(quantity > 0){
                level[row+1][col] += quantity;
                level[row+1][col+1] += quantity;
            }
        }
    }
    return Math.min(1, level[query_row][query_glass]);
};