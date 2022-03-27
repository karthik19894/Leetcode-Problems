/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function(nums) {
    let i = 0;
    let deletions = 0;
    let length = nums.length;
    if(nums.length === 0) return 0;
    if(nums.length === 1) return 1;
    let p1 = 0, p2 = 1;
    while(p1 < nums.length && p2 < nums.length){
        if(((p1 - deletions) % 2) === 0 && nums[p1] === nums[p2]) {
            p1++;
            p2++;
            deletions++;
            length--;
        }else{
            p1++;
            p2++;
        }
        
    }
    return length % 2 === 0 ? deletions : deletions + 1;
};