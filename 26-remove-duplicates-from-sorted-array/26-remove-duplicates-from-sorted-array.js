/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // so we need to have the right element at right place and get the non duplicate array length
  let nonDuplicateIdx = 0;
  for(let i=1; i < nums.length; i++){
      if(nums[i] !== nums[nonDuplicateIdx]){
          nonDuplicateIdx++;
          nums[nonDuplicateIdx] = nums[i];
      }
  }  
  return nonDuplicateIdx+1; 
};