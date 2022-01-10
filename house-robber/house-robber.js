/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
 /* so to solve this problem we can say express the problem in terms of 3 houses initially
 now the maximum money that robber can rob at house 3 is either rob house 1 and house 3 or just house 2,
 now as we introduce more houses, we can say that max at house = (max money robbed until non adjacent house + current money) or (max money robbed until non adjacent house)
 */
    if(nums.length ===1) return nums[0];
    const maxRob = new Array(nums.length).fill(0);
    maxRob[0] = nums[0];
    maxRob[1] = Math.max(nums[0],nums[1]);
    for(let i=2; i < nums.length; i++){
        maxRob[i] = Math.max(maxRob[i-1], nums[i] + maxRob[i-2]);
    }
    return maxRob[nums.length-1];
};