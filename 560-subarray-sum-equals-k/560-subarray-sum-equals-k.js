/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const prefixSumMap = { 0 : 1};
    let subArrayCount = 0;
    let sum = 0;
    for(let num of nums){
        sum += num;
        if((sum - k) in prefixSumMap){
            subArrayCount += prefixSumMap[sum - k];
        }
        if(!(sum in prefixSumMap)) prefixSumMap[sum] = 0;
        prefixSumMap[sum] += 1;
    }
    return subArrayCount;
};