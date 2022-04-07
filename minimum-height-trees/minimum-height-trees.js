/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    /* the naive way to solve the problem would be to take every node as root and calculate its height and then
    take all the roots that has the same minimum height, but the time complexity will be O(N^2).
    
    so in order to solve it optimally, we can notice one thing, that is we know that there will be no cycles in the graph
    and if that is the case, if we take any graph and then try to find out the centre part that is connecting to most other
    parts, those are the nodes with min heights, and a graph can only have atmost two nodes that are centroids in case of even number of nodes, in a graph with odd number of nodes, there can be only centroid.
    
    so now this gives us an intuition that if we try to remove the nodes with least indegree and move all the way upto when 
    we have only 2 nodes in the queue, we have got our ans, and for this we can use topological sort
    */
    if(n <= 2){
        const centroids = [];
        for(let node=0; node < n; node++){
            centroids.push(node);
        }
        return centroids;
    }
    const adjList = new Array(n).fill(0).map(()=> new Array());
    const inDegree = new Array(n).fill(0);
    for(let edge of edges){
        const [from, to] = edge;
        adjList[from].push(to);
        adjList[to].push(from);
        inDegree[from] += 1;
        inDegree[to] += 1;
    }
    let leaves = [];
    for(let node=0; node < n; node++){
        if(inDegree[node] === 1){ // undirected graph so checking for indegree of 1 
            leaves.push(node);
        }
    }
    let nodesLeft = n;
    while(nodesLeft > 2){
        nodesLeft = nodesLeft - leaves.length;
        const newLeaves = [];
        for(let node of leaves){
            const neighbours = adjList[node];
            for(let neighbour of neighbours){
                inDegree[neighbour] -= 1;
                if(inDegree[neighbour] === 1){
                    newLeaves.push(neighbour);
                }
            }
        }
        leaves = newLeaves;
    }
    return leaves;
};