/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function(graph) {
    if(graph.length <= 1) return 0;
    const n = graph.length;
    let endMask = (1 << n) - 1;
    const visited = new Array(n).fill(0).map(()=> new Array(endMask));
    const queue = [];
    for(let node=0; node < n; node++){
        queue.push([node, 1 << node]);
        visited[node][1 << node] = true;
    }
    let steps = 0;
    while(queue.length){
        const size = queue.length;
        for(let i=0; i < size; i++){
            const [node, mask] = queue.shift();
            for(let neighbour of graph[node]){
                const nextMask = mask | (1 << neighbour);
                if(nextMask === endMask){
                    return steps + 1;
                }
                if(!visited[neighbour][nextMask]){
                    visited[neighbour][nextMask] = true;
                    queue.push([neighbour, nextMask]);
                }
            }
            
        }
        steps += 1;
    }
    return -1;
};