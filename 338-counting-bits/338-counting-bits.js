/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const noOfOnes = new Array(n+1).fill(0);
    let offset = 1;
    for(let i=1; i <= n; i++){
        if(offset * 2 === i) offset = i;
        noOfOnes[i] = noOfOnes[i - offset] + 1;
    }
    return noOfOnes;
};