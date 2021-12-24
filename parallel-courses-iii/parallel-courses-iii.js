/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
var minimumTime = function(n, relations, time) {
    const inDegree = new Array(n).fill(0);
    const adjList = new Array(n).fill(0).map(()=> new Array());
    const completionTime = new Array(n).fill(0);
    for(let [pre, course] of relations){
        inDegree[course - 1] += 1;
        adjList[pre - 1].push(course - 1);
    }
    const queue = [];
    for(let i=0; i < n; i++){
        if(inDegree[i] === 0){
            queue.push(i);
            completionTime[i] = time[i];
        }
        
    }
    while(queue.length){
        const courseInQue = queue.shift();
        const coursesOpenToTake = adjList[courseInQue];
        for(let course of coursesOpenToTake){
            completionTime[course] = Math.max(completionTime[course], completionTime[courseInQue] + time[course]);
            inDegree[course] -= 1;
            if(inDegree[course]===0){
                queue.push(course);
            }
        }
        
    }
    return Math.max(...completionTime);
};