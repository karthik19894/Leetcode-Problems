/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.original = [].concat(nums);
    this.arr = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.original;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    for(let i=0; i < Math.min(this.arr.length, 10); i++){
        const randomIdx1 = Math.floor(Math.random() * this.arr.length);
        const randomIdx2 = Math.floor(Math.random() * this.arr.length);
        this.swap(this.arr, randomIdx1, randomIdx2);
    }
    return this.arr;
};

Solution.prototype.swap = function(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */