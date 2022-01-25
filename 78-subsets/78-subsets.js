/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [[]];
    for(let num of nums){
        const length = result.length;
        for(let i=0; i < length; i++){
            result.push(result[i].concat(num));
        }
    }
    return result;
    
};