/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    const remainders = new Array(60).fill(0);
    let pairsCount = 0;
    for(let currentTime of time){
        if(currentTime % 60 === 0){
            pairsCount += remainders[0];
        }else{
            pairsCount += remainders[60 - currentTime % 60];
        }
        remainders[currentTime % 60]++;
    }
    return pairsCount;
    
};