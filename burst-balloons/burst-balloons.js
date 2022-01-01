/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    // so the problem is to burst all the baloons in the order that will give us the maximum no of coins
    // so if we choose a baloon to be burst first then the other sub problems where we burst some other baloon first
    // cannot use this baloon as it is burst, so if we make a problem where we make decisions on choosing the last
    // baloon to be burst then we are good
    nums = [1, ...nums, 1];
    const cache = new Array(nums.length).fill(0).map(()=>new Array(nums.length).fill(-1));
    return findMaxCoins(nums, 1, nums.length-2, cache);
};

function findMaxCoins(nums, left, right, cache){ 
    if(left > right) return 0;
   // only one baloon is left 
   if(left === right){
       let maxCoins = nums[left];
       if(left - 1 >= 0){
           maxCoins *= nums[left-1];
       }
       if(right + 1 < nums.length){
           maxCoins *= nums[right + 1];
       }
       return maxCoins;
    }
    if(cache[left][right]!== -1) return cache[left][right];
    let maxCoins = 0;
    // idx is the last baloon to be burst
    for(let idx=left; idx <= right; idx++){
        let currentMaxCoins = nums[idx];
        // all baloons between left and right are bursted so we are looking for baloon that is before left and after right
        if(left - 1 >= 0){
            currentMaxCoins *= nums[left - 1];
        }
        if(right + 1 < nums.length){
            currentMaxCoins *= nums[right + 1];
        }
        currentMaxCoins += findMaxCoins(nums, left, idx-1, cache) + findMaxCoins(nums,idx+1, right, cache);
        maxCoins = Math.max(maxCoins, currentMaxCoins);
    }
    return cache[left][right] = maxCoins;
}