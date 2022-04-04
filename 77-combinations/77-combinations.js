/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];
    populateCombinations(1, n, k, [], result);
    return result;
};

function populateCombinations(start, n, k, currentCombo, result){
    if(currentCombo.length === k){
        result.push(currentCombo.slice());
        return;
    }
    for(let i=start; i <=n; i++){
        currentCombo.push(i);
        populateCombinations(i+1, n, k, currentCombo, result);
        currentCombo.pop();
    }
}