/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */

// Time complexity should be n * log(maxSum of array), space complexity is O(1)
var splitArray = function(nums, m) {
    // this problem can be solved by finding a potential sum
    // and then validating the no of sub arrays
    // we need to minimise the sum that we get by doing m partitions
    
    // the maximum sum that I could get for any m is the sum of the array
    // the minimum sum that I could get for any m is the max value of the array
    let minSum = 0; 
    let maxSum = 0;
    for(let num of nums){
        minSum = Math.max(minSum, num);
        maxSum += num;
    }
    
    // now we know the range in which we will have to make the cuts and then look for correct ans
    let min = minSum, max = maxSum;
    
    while(min < max){
        let sum = 0;
        let subArrays = 1;
        let potentialAns = Math.floor((min + max) / 2);
        for(let num of nums){
            if((sum + num) > potentialAns){
                // restart the sum from 0 for the next sub array
                subArrays++;
                sum = num;
            }else{
                sum += num;
            }
        }
        if(subArrays <= m){
            // so this can be a potential ans, but we can try minimising it
            max = potentialAns;
        }else{
            // no of sub arrays created are more that means we have to increase the sum so that
            // more no of elements can fit in a sub array
            min = potentialAns + 1;
        }
    }
    return min; // loop would have broken when min == max so min or max both should give the same ans
};