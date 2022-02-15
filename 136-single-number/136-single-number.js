/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let singleNum = 0;
    for(let num of nums){
        singleNum = singleNum ^ num;
    }
    return singleNum;
};