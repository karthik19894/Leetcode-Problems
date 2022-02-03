/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let count = 0;
    const map = {};
    for(let num1 of nums1){
        for(let num2 of nums2){
            let sum = num1 + num2;
            if(!(sum in map)) map[sum] = 0;
            map[sum] += 1;
        }
    }
    for(let num3 of nums3){
        for(let num4 of nums4){
            let complement = -(num3 + num4);
            if(complement in map){
                count += map[complement];
            }
        }
    }
    return count;
};