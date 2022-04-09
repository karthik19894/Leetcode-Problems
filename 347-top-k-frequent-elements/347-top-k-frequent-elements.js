/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const countBucket = new Array(nums.length).fill(0).map(()=> new Array());
    const freqCounter = {};
    for(let num of nums){
        if(!(num in freqCounter)){
            freqCounter[num] = 0;
        }
        freqCounter[num] += 1;
    }
    const allNumbers = Object.keys(freqCounter);
    for(let num of allNumbers){
        let freq = freqCounter[num];
        countBucket[freq - 1].push(num);
    }
    const kMostFrequentElements = [];
    for(let i=countBucket.length-1; i>=0; i--){
            if(countBucket[i].length > 0){
                for(let el of countBucket[i]){
                    kMostFrequentElements.push(el);
                    if(kMostFrequentElements.length === k) return kMostFrequentElements;
                }
            }
        }
    return kMostFrequentElements;
};