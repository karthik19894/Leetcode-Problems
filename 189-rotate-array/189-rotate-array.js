/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(k === 0 || k === nums.length || nums.length === 1) return;
    k = k % nums.length;
    reverse(nums, 0, nums.length-1);
    reverse(nums, 0, k-1);
    reverse(nums,k, nums.length-1);
};

function reverse(arr, start, end){
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}