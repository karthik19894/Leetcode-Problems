/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = nums[0];
    let count = 1;
    for(let i=0; i < nums.length; i++){
        let num = nums[i];
        if(num === candidate){
            count++;
        }else {
            count--;
        }
        if(count === 0){
            candidate = num;
            count = 1;
        }
    }
    return candidate;
};