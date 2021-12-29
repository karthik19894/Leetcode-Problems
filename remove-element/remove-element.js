/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // so the problem doesn't want us to swap or position the removed elements at end
    // it just wants us to place the valid values in the right place
    let validIdx = 0;
    for(let i=0; i < nums.length; i++){
        if(nums[i] !== val){
            nums[validIdx] = nums[i];
            validIdx++;
        }
    }
    return validIdx; // at the end of valid values validIdx will be actual validIdx + 1 , which will give us k
};