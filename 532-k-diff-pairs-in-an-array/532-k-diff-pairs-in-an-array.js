/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    const pairsSet = new Set();
    nums.sort((a,b)=> a - b);
    for(let i=0; i < nums.length; i++){
        for(let j=i+1; j < nums.length; j++){
            let absDiff = Math.abs(nums[i] - nums[j]);
            if(absDiff === k){
                pairsSet.add(`${nums[i]}-${nums[j]}`);
            }
        }
        
    }
    return pairsSet.size;
};