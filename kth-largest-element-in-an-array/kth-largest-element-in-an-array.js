/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const idxOfKthLargest = nums.length - k;
    return quickSelect(nums, 0, nums.length-1, idxOfKthLargest);
};

function quickSelect(nums, start, end, position){
    while(true){
        if(start > end){
            // invalid condition this should never happen as we will have some valid number at a position
        }
        let pivotIdx = start;
        let leftIdx = pivotIdx + 1;
        let rightIdx = end;
        while(leftIdx <= rightIdx){
            if(nums[leftIdx] > nums[pivotIdx] && nums[rightIdx] < nums[pivotIdx]){
                swap(nums,leftIdx, rightIdx);
                leftIdx++;
                rightIdx--;
            }
            if(nums[leftIdx] <= nums[pivotIdx]){
                leftIdx++;
            }
            if(nums[rightIdx] >= nums[pivotIdx]){
                rightIdx--;
            }
        }
        swap(nums, pivotIdx, rightIdx);
        if(rightIdx === position){
            return nums[rightIdx];
        }else if(rightIdx < position){
            start = rightIdx+1;
        }else{
            end = rightIdx - 1;
        }
    }
}

function swap(arr, left, right){
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}