/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    const points = {};
    const cache = {};
    let maxNum = 0;
    for(let num of nums){
        if(!(num in points)) points[num] = 0;
        points[num] += num;
        maxNum = Math.max(maxNum, num);
    }
    return findMaxPoints(maxNum, points, cache);
};

function findMaxPoints(num, points, cache){
    if(num === 0) return 0;
    if(num === 1) return points[1] || 0;
    if(num in cache) return cache[num];
    let onDeletingCurrentNum = (points[num] || 0) + findMaxPoints(num - 2,points, cache);
    let onIgnoreCurrentNum = findMaxPoints(num - 1, points, cache);
    const maxPoints = Math.max(onDeletingCurrentNum, onIgnoreCurrentNum);
    return cache[num]= maxPoints;
}