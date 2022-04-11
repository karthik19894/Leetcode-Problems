/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    // to solve this problem in O(log n), we know that we have every element occuring twice except one
    // so if every element is twice then an element would always start at even idx and edd at odd idx
    // now to skip or eliminate a portion of our search, we can get the middle and
    //  if the middle idx is odd then we have to look for the same element before it as the other pair
    // of the same number would have occurred before
    // if the middle idx is even then we have to look for the same element after it as the other pair
    // of the same number will occur after it
    // now in case this condition is violated we know that our search space is on the left
    // if the condition is not violated then we know that we are have not find the middle where the order
    // is distorted, so we look in the right side
    let left = 0, right = nums.length - 1;
    while(left < right){
        let middle = left + Math.floor((right - left)/2);
        let isEven = middle % 2 === 0;
        let isOrderFineWhenEven = isEven && nums[middle+1] === nums[middle];
        let isOrderFineWhenOdd = !isEven && nums[middle - 1] === nums[middle];
        if(isOrderFineWhenEven || isOrderFineWhenOdd){
            left = middle + 1;
        }else{
            right = middle;
        }
    }
    return nums[left];
};