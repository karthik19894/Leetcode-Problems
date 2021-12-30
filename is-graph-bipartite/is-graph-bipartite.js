/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    // so to find if a graph is bipartite, we can color every pair of adjacent node with different colors
    // if we are not able to maintain this streak of alternating colors for adjacent nodes then the graph is not bi partite
    const colors = new Array(graph.length).fill(null);
    for(let node=0; node < graph.length; node++){
        if(colors[node] === null){
            if(!canColorNodeAndNeighbours(graph, node, colors, 0)){
                return false;
            }
        }
    }
    return true;
};

function canColorNodeAndNeighbours(graph, node, colors, color){
    if(colors[node] !== null && colors[node] !== color) return false;
    else if(colors[node] === color) return true;
    colors[node] = color;
    const neighbours = graph[node];
    for(let neighbour of neighbours){
        if(!canColorNodeAndNeighbours(graph, neighbour, colors, color ^ 1)){
            return false;
        }
    }
    return true;
}