/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    const adjList = new Array(n).fill(0).map(()=> new Array());
    for(let edge of edges){
        const [from, to] = edge;
        adjList[from].push(to);
        adjList[to].push(from);
    }
    const visited = new Array(n).fill(false);
    let count = 0;
    for(let node=0; node < n; node++){
        if(visited[node]) continue;
        markNodeAndNeighbours(adjList, node, visited);
        count += 1;
    }
    return count;
};

function markNodeAndNeighbours(adjList, node, visited){
    if(visited[node]) return;
    visited[node] = true;
    const neighbours = adjList[node];
    for(let neighbour of neighbours){
        markNodeAndNeighbours(adjList, neighbour, visited);
    }
}