/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.prefixSum = calculatePrefixSum(w);
    this.totalSum = w.reduce((a,b)=> a + b, 0);
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    const target = this.totalSum * Math.random();
    const prefixSumArr = this.prefixSum;
    let left = 0, right = prefixSumArr.length - 1;
    while(left < right){
        let mid = left + Math.floor((right - left) / 2);
        if(prefixSumArr[mid] > target){
            right = mid;
        }else{
            left = mid + 1;
        }
    }
    return left;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

function calculatePrefixSum(arr){
    const prefixSum = new Array(arr.length).fill(0);
    for(let i=0; i < prefixSum.length; i++){
        if(i > 0) prefixSum[i] = arr[i] + prefixSum[i-1];
        else{
            prefixSum[i] = arr[i];
        }
    }
    return prefixSum;
}