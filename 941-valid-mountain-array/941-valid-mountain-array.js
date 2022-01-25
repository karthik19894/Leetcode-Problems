/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(arr.length < 3) return false;
    let increaseIdx = 1;
    if(arr[increaseIdx] < arr[increaseIdx - 1]) return false;
    while(increaseIdx < arr.length){
        if(arr[increaseIdx] === arr[increaseIdx - 1]) return false;
        if(arr[increaseIdx] < arr[increaseIdx - 1]) break;
        increaseIdx++;
    } 
    if(increaseIdx >= arr.length) return false;
    let decreaseIdx = increaseIdx;
    while(decreaseIdx < arr.length){
        if(arr[decreaseIdx] === arr[decreaseIdx - 1]) return false;
        if(arr[decreaseIdx] > arr[decreaseIdx - 1]) break;
        decreaseIdx++;
    } 
    return decreaseIdx >= arr.length;
};