/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    // so we know that the number will be divisble by k if the length is at most k
    let rem = 0;
    for(let length=1; length <=k; length++){
        rem = (rem * 10 + 1) % k;
        if(rem === 0){
            return length;
        }
    }
    return -1;
};