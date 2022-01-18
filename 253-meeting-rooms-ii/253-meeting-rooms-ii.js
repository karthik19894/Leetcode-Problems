/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const startTimes = intervals.map(interval => interval[0]).sort((a,b)=> a-b);
    const endTimes = intervals.map(interval => interval[1]).sort((a,b)=> a-b);
    let meetingRooms = 0;
    let endTimeIdx = 0;
    for(let startTimeIdx=0; startTimeIdx < startTimes.length; startTimeIdx++){
        let startTime = startTimes[startTimeIdx];
        let endTime = endTimes[endTimeIdx];
        if(startTime >= endTime){
            meetingRooms--;
            endTimeIdx++;
        }
        meetingRooms++;
    }
    return meetingRooms;
};