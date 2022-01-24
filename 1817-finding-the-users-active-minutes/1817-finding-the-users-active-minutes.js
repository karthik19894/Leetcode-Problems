/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
    const result = new Array(k).fill(0);
    const userTimeMap = {};
    for(let log of logs){
        const [id, time] = log;
        if(!(id in userTimeMap)) userTimeMap[id] = new Set();
        userTimeMap[id].add(time);
    }
    const userTimeEntries = Object.entries(userTimeMap);
    for(let [id, times] of userTimeEntries){
        result[times.size - 1] += 1;
    }
    return result;
};