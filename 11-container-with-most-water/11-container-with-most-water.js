/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = -Infinity;
    let leftWallIdx = 0;
    let rightWallIdx = height.length - 1;
    while(leftWallIdx < rightWallIdx){
        let areaHeight = Math.min(height[leftWallIdx], height[rightWallIdx]);
        let areaWidth = rightWallIdx - leftWallIdx;
        let currentArea = areaHeight * areaWidth;
        max = Math.max(max, currentArea);
        if(height[leftWallIdx] <= height[rightWallIdx]){
            leftWallIdx++;
        }else{
            rightWallIdx--;
        }
    }
    return max;
};