/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    // so we need to find the next permutation of an arrangement
    // so to put it simply we need to make sure that the next permutation that we form
    // from the input has to be in the sorted location
    // intuition - so every permutation other than the 1st
    // has some inreasing range for eg: 1 3 2 has increasing range  2 3 from back
    // in case of 1st perm eg: 1 2 3, 3 is the point where it has last increased
    // so 1st step would be to identify where the permutation order change has happened
    // now after finding this, we need to make sure that we have the smallest number at the breakpoint
    // so we can iterate once again from back and find the first element that is larger than the one
    // at breakpoint, now we can swap the largest element with one at breakpoint
    // now we sorted the first two positions of next perm, we can reverse the array from breakpoint + 1
    // to find the next perm
    if(nums.length <= 1) return;
    let breakIdx = nums.length - 2;
    while(breakIdx >= 0 && nums[breakIdx] >= nums[breakIdx+1]) breakIdx--;
    if(breakIdx >=0) {
        let j = nums.length - 1;
        while(j > 0 && nums[j] <= nums[breakIdx]) j--;
        swap(nums,breakIdx,j);
    }
    reverse(nums, breakIdx+1, nums.length-1);
};


function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function reverse(arr, start, end){
    while(start < end){
        swap(arr, start, end);
        start++;
        end--;
    }
}