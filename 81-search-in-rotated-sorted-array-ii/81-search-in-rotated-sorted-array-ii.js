/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    if(nums.length === 1) return nums[0] === target;
    let left = 0, right = nums.length - 1;
    while(left <= right){
        while(left < right && nums[left] === nums[left + 1]) left++;
        while(left < right && nums[right] === nums[right - 1]) right--;
        if(nums[left] === target || nums[right] === target) return true;
        
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] === target) return true;
        if(nums[mid] > nums[left]){
            if(target >= nums[left] && target <= nums[mid]){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else{
            if(target >= nums[mid] && target <= nums[right]){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
    }
    return false;
};