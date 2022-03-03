/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    if(nums.length <= 2) return 0;
    const slices = new Array(nums.length).fill(0);
    let sum = 0;
    for(let i=2; i < slices.length; i++){
        const currentDiff = nums[i] - nums[i-1];
        const lastDiff = nums[i-1] - nums[i-2];
        if(currentDiff === lastDiff){
            slices[i] = 1 + slices[i-1];
            sum += slices[i];
        }
        
    }
    return sum;
};