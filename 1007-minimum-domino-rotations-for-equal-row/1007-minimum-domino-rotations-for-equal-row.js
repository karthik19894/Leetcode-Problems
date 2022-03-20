/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    // so for all elements to have equal values either first value in top should be achieved or
    // first value in bottom should be achieved, if not we cannot achieve it
    const firstValueOfTop = tops[0];
    const firstValueOfBottom = bottoms[0];
    const rotations = getRotations(firstValueOfTop, tops, bottoms);
    if(rotations !== -1) return rotations;
    return getRotations(firstValueOfBottom, tops, bottoms);
};

function getRotations(valueToCheck, tops, bottoms){
    const n = tops.length;
    let topRotations = 0, bottomRotations = 0;
    for(let i=0; i < n; i++){
        if(tops[i] !== valueToCheck && bottoms[i] !== valueToCheck) return -1;
        else if(tops[i] !== valueToCheck) topRotations++;
        else if(bottoms[i] !== valueToCheck) bottomRotations++;
    }
    return Math.min(topRotations, bottomRotations);
}