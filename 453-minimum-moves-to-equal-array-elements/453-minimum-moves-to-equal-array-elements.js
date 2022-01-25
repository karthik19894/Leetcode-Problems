/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    const minVal = Math.min(...nums);
    let moves = 0;
    for(let num of nums){
        moves += num - minVal;
    }
    return moves;
};
