/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if(points.length === 0) return 0;
    return getMinArrowsFired(points);
};

function getMinArrowsFired(intervals){
    intervals.sort((a,b)=> a[1]-b[1]); // sorting by end interval
    let lastBalloonEndWhereArrowIsFired = intervals[0][1];
    let arrowsFired = 1;
    for(let currentBaloonIdx=1; currentBaloonIdx < intervals.length; currentBaloonIdx++){
        const [currentBalloonStart, currentBalloonEnd] = intervals[currentBaloonIdx];
        if(lastBalloonEndWhereArrowIsFired < currentBalloonStart){
            arrowsFired++;
            lastBalloonEndWhereArrowIsFired = currentBalloonEnd;
        }
    }
    return arrowsFired;
}