/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = 0, fast = 0;
    while(true){
        slow = nums[slow];
        fast = nums[nums[fast]];
        if(slow === fast) break;
    }
    let p1 = 0, p2 = fast;
    while(true){
        p1 = nums[p1];
        p2 = nums[p2];
        if(p1 === p2) break;
    }
    return p1;
};