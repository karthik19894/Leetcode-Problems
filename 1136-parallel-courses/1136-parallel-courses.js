/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 */
var minimumSemesters = function(n, relations) {
    const inDegree = new Array(n).fill(0);
    const adjList = new Array(n).fill(0).map(()=> new Array());
    for(const [pre, course] of relations){
        inDegree[course-1] += 1;
        adjList[pre-1].push(course-1);
    }
    let coursesTaken = 0;
    let semesters = 0;
    const queue = [];
    for(let i=0; i < n; i++){
        if(inDegree[i] === 0){
            queue.push(i);
        }
    }
    while(queue.length > 0){
        const coursesLength = queue.length;
        semesters++;
        for(let count=0; count < coursesLength; count++){
            const currentCourse = queue.shift();
            coursesTaken++;
            const openCourses = adjList[currentCourse];
            for(let openCourse of openCourses){
                inDegree[openCourse] -= 1;
                if(inDegree[openCourse] === 0){
                    queue.push(openCourse);
                }
            }
        }
    }
    return coursesTaken === n ? semesters : -1;
};