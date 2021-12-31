/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    permutationHelper(nums, result, [], 0);
    return result;
};

function permutationHelper(nums, result, current, idx){
    if(idx === nums.length - 1){
        result.push([].concat(nums));
        return;
    }
    for(let i=idx; i < nums.length; i++){
        let num = nums[i];
        swap(nums, i, idx);
        permutationHelper(nums, result, current, idx+1);
        swap(nums, i, idx);
    }
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}