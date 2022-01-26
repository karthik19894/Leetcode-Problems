/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numIndexMap = {};
    for(let i=0; i < nums.length; i++){
        let num = nums[i];
        let balanceSum = target - num;
        if(balanceSum in numIndexMap){
            return [numIndexMap[balanceSum], i];
        }
        numIndexMap[num] = i;
    }
    return [-1,-1];
};