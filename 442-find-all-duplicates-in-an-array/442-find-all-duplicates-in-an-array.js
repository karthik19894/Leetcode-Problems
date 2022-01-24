/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const duplicates = [];
    for(let i=0; i < nums.length; i++){
        let value = Math.abs(nums[i]);
        let idxOfValue = value - 1;
        if(nums[idxOfValue] < 0){
            duplicates.push(Math.abs(value));
        }
        nums[idxOfValue] *= -1;
    }
    return duplicates;
    
};