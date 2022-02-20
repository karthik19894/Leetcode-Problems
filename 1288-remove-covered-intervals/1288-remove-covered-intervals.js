/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    if(intervals.length <= 1) return intervals.length;
    let totalIntervals = 1;
    intervals.sort((a,b)=>{
     if(a[0] === b[0]) return b[1] - a[1];
     return a[0] - b[0];   
    });
    let prevIntervalIdx = 0, currentIntervalIdx = 1;
    while(currentIntervalIdx < intervals.length){
        const currentInterval = intervals[currentIntervalIdx];
        const prevInterval = intervals[prevIntervalIdx];
        if(prevInterval[1] < currentInterval[1]){
            prevIntervalIdx = currentIntervalIdx;
            totalIntervals++;
        }
        currentIntervalIdx++;
    }
    return totalIntervals;
};