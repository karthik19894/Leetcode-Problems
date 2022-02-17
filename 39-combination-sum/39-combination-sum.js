/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    populateAllCombination(candidates, target, 0, [], result, 0);
    return result;
};

function populateAllCombination(candidates, target, currentSum, currentCandidates, result, idx){
    if(currentSum > target || idx >= candidates.length) return;
    if(currentSum === target){
        result.push([].concat(currentCandidates));
        return;
    }
    const currentNum = candidates[idx];
    let newCurrentSum = currentSum + currentNum;
    currentCandidates.push(currentNum);
    populateAllCombination(candidates, target, newCurrentSum, currentCandidates, result, idx);
    currentCandidates.pop();
    populateAllCombination(candidates, target, currentSum, currentCandidates, result, idx+1);
}