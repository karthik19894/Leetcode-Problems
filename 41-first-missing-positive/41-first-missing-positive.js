/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let i = 0;
    while(i < nums.length){
        if(nums[i] > 0 && nums[i] <= nums.length){
            let actualIdx = nums[i] - 1;
            if(nums[actualIdx] !== nums[i]){
                [nums[i], nums[actualIdx]] = [nums[actualIdx], nums[i]];
            }else{
                i++;
            }
        }else{
            i++;
        }
    }
    for(let i=0; i<nums.length; i++){
        if(i+1 !== nums[i]) return i+1;
    }
    return nums.length + 1;
};