/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLength = Infinity;
    let sum = 0, windowEnd=0, windowStart = 0;
    for(windowEnd=0; windowEnd < nums.length; windowEnd++){
        sum += nums[windowEnd];
        while(sum >= target){
            minLength = Math.min(minLength, (windowEnd - windowStart) + 1);
            // shrink window
            sum -= nums[windowStart];
            windowStart++;
        }
    }
    return minLength === Infinity ? 0 : minLength;
};