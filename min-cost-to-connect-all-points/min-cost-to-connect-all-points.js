/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    const nodes = points.map((point, id)=> ({
        x:point[0],
        y:point[1],
        id: id
    }));
    const parent = new Array(nodes.length).fill(-1);
    const allEdges = getAllEdges(nodes);
    allEdges.sort((a, b) => a[2] - b[2]);
    let totalCost = 0;
    let edgesMade = 0;
    for(let i=0; i < allEdges.length; i++){
        let edge = allEdges[i];
        if(edgesMade === nodes.length - 1) break;
        let willFormCycle = union(parent, edge[0], edge[1]);
        if(willFormCycle) continue;
        edgesMade += 1;
        totalCost += edge[2];
        union(parent, edge[0], edge[1]);
    }
    return totalCost;
};

function find(parent, n){
    if(parent[n] === -1) return n;
    return parent[n] = find(parent, parent[n]);
}

function union(parent, n1, n2){
    let parent1 = find(parent, n1);
    let parent2 = find(parent, n2);
    if(parent1 === parent2) return true;
    parent[parent2] = parent1;
    return false;
}

function getAllEdges(nodes){
    const edges = [];
    for(let i=0; i < nodes.length; i++){
        for(let j=i+1; j < nodes.length; j++){
            if(i===j) continue;
            const {x : x1, y: y1} = nodes[i];
            const {x: x2, y: y2} = nodes[j];
            edges.push([nodes[i].id, nodes[j].id, cost(x1, y1, x2, y2)]);
        }
    }
    return edges;
    
}

function cost(x1, y1, x2, y2){
    return Math.abs(x2- x1) + Math.abs(y2-y1);
}