/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    if(nums.length <= 0) return 0;
    let maxLength = 0;
    let count = 0;
    const countIdxMap = { 0 : -1 };
    // we have -1 here for helping in max length calculation
    // if the entire array is balanced then our max length would be last idx of array - (-1) => which implies lastIndex + 1
    for(let i=0; i < nums.length; i++){
        let num = nums[i];
        if(num === 1){
            count += 1;
        }else{
            count -= 1;
        }
        if(count in countIdxMap){
            maxLength = Math.max(maxLength, i - countIdxMap[count]);
        }else{
            countIdxMap[count] = i;
        }
    }
    return maxLength;
};