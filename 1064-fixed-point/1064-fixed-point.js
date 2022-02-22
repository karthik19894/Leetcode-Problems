/**
 * @param {number[]} arr
 * @return {number}
 */
var fixedPoint = function(arr) {
    let left = 0;
    let right = arr.length - 1;
    let ans = -1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        let val = arr[mid];
        if(val === mid){
            ans = mid;
            right = mid - 1;
        }else if(val > mid) {
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return ans;
};